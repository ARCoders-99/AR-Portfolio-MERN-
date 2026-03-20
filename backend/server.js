import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { Resend } from 'resend'
import { rateLimit } from 'express-rate-limit'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Trust first proxy for production environments like Render
app.set('trust proxy', 1)

// Middleware - CORS configuration
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:5173',
  'https://ar-portfolio-web.onrender.com', // Your production frontend
  process.env.FRONTEND_URL,
].filter(Boolean)

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true)
    if (allowedOrigins.includes(origin)) {
      return callback(null, true)
    }
    return callback(new Error(`CORS: Origin ${origin} not allowed`))
  },
  credentials: true,
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Rate limiting for contact form (IP-based)
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 20, 
  standardHeaders: true, 
  legacyHeaders: false, 
  message: {
    success: false,
    message: 'Too many requests. Please try again later.',
  },
})

// In-memory store for email-based rate limiting (2 requests / 30 mins)
const emailRateLimitStore = new Map()

// Cleanup old entries from the email store every 30 minutes
setInterval(() => {
  const now = Date.now()
  const thirtyMinutesAgo = now - 30 * 60 * 1000
  for (const [email, timestamps] of emailRateLimitStore.entries()) {
    const validTimestamps = timestamps.filter((ts) => ts > thirtyMinutesAgo)
    if (validTimestamps.length === 0) {
      emailRateLimitStore.delete(email)
    } else {
      emailRateLimitStore.set(email, validTimestamps)
    }
  }
}, 30 * 60 * 1000)

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY)

// HTML escaping helper for security
const escapeHtml = (text) => {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }
  return text.replace(/[&<>"']/g, (m) => map[m])
}

// Input validation helper
const validateInput = (name, email, message) => {
  const errors = []
  if (!name || !name.trim()) {
    errors.push('Name is required')
  } else if (name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long')
  }
  if (!email || !email.trim()) {
    errors.push('Email is required')
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push('Please provide a valid email address')
  }
  if (!message || !message.trim()) {
    errors.push('Message is required')
  } else if (message.trim().length < 10) {
    errors.push('Message must be at least 10 characters long')
  }
  return errors
}

// Contact form endpoint
app.post('/api/contact', contactLimiter, async (req, res) => {
  try {
    const { name, email, message } = req.body

    // 1. Validation
    const validationErrors = validateInput(name, email, message)
    if (validationErrors.length > 0) {
      return res.status(400).json({
        success: false,
        message: validationErrors.join(', '),
      })
    }

    // 2. Email-based Rate Limiting logic
    const normalizedEmail = email.trim().toLowerCase()
    const now = Date.now()
    const thirtyMinutesAgo = now - 30 * 60 * 1000
    let timestamps = emailRateLimitStore.get(normalizedEmail) || []
    timestamps = timestamps.filter((ts) => ts > thirtyMinutesAgo)

    if (timestamps.length >= 2) {
      return res.status(429).json({
        success: false,
        message: 'You can only send 2 messages every 30 minutes.',
      })
    }
    timestamps.push(now)
    emailRateLimitStore.set(normalizedEmail, timestamps)

    // 3. Prepare sanitized content
    const escapedName = escapeHtml(name)
    const escapedEmail = escapeHtml(email)
    const escapedMessage = escapeHtml(message)

    if (!process.env.RESEND_API_KEY) {
      console.error('Resend API key missing')
      return res.status(500).json({ success: false, message: 'Server configuration error.' })
    }

    // 4. Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // Use your verified domain in production
      to: 'abdulrehman.codeworks@gmail.com',
      reply_to: email,
      subject: `Portfolio Contact Form: Message from ${escapedName}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.5; color: #333;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${escapedName}</p>
          <p><strong>Email:</strong> ${escapedEmail}</p>
          <p><strong>Message:</strong></p>
          <div style="background: #f4f4f4; padding: 15px; border-radius: 5px;">
            ${escapedMessage}
          </div>
          <hr style="border: none; border-top: 1px solid #eee; margin-top: 20px;">
          <p style="font-size: 0.8em; color: #888;">Sent from your Portfolio contact form.</p>
        </div>
      `,
    })

    if (error) throw error

    return res.status(200).json({
      success: true,
      message: 'Message sent successfully!',
    })
  } catch (error) {
    console.error('Resend Error:', error)
    return res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.',
    })
  }
})

// Health check
app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'Server is healthy' })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
