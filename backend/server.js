import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { Resend } from 'resend'
import { rateLimit } from 'express-rate-limit'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Trust first proxy (useful for production environments like Heroku, Render, etc.)
app.set('trust proxy', 1)

// Middleware
app.use(cors({
  origin: [
    "https://ar-portfolio-web.onrender.com",
    "http://localhost:3000",
    "http://localhost:5173" // Default for Vite
  ],
  credentials: true
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY)

// Rate limiting for contact form
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 20, // Limit each IP to 20 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many requests. Please try again later.',
  },
})

// In-memory email-based rate limiting
const emailRateLimitStore = new Map()
setInterval(() => {
  const now = Date.now()
  const thirtyMinutesAgo = now - 30 * 60 * 1000
  for (const [email, timestamps] of emailRateLimitStore.entries()) {
    const validTimestamps = timestamps.filter(ts => ts > thirtyMinutesAgo)
    if (validTimestamps.length === 0) emailRateLimitStore.delete(email)
    else emailRateLimitStore.set(email, validTimestamps)
  }
}, 30 * 60 * 1000)

// HTML escaping helper
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

// Input validation
const validateInput = (name, email, message) => {
  const errors = []
  if (!name || !name.trim()) errors.push('Name is required')
  else if (name.trim().length < 2) errors.push('Name must be at least 2 characters long')

  if (!email || !email.trim()) errors.push('Email is required')
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('Please provide a valid email address')

  if (!message || !message.trim()) errors.push('Message is required')
  else if (message.trim().length < 10) errors.push('Message must be at least 10 characters long')

  // Anti-spam: repeated chars
  if (/(.)\1{10,}/.test(message)) errors.push('Message contains suspicious repeated characters')

  return errors
}

// Contact endpoint
app.post('/api/contact', contactLimiter, async (req, res) => {
  try {
    const { name, email, message } = req.body

    // Validation
    const errors = validateInput(name, email, message)
    if (errors.length > 0) {
      return res.status(400).json({ success: false, message: errors.join(', ') })
    }

    // Email-based rate limit (2 per 30 mins)
    const normalizedEmail = email.trim().toLowerCase()
    const now = Date.now()
    const thirtyMinutesAgo = now - 30 * 60 * 1000
    let timestamps = emailRateLimitStore.get(normalizedEmail) || []
    timestamps = timestamps.filter(ts => ts > thirtyMinutesAgo)
    if (timestamps.length >= 2) {
      return res.status(429).json({ success: false, message: 'You can only send 2 messages every 30 minutes.' })
    }
    timestamps.push(now)
    emailRateLimitStore.set(normalizedEmail, timestamps)

    // Escape HTML
    const escapedName = escapeHtml(name)
    const escapedEmail = escapeHtml(email)
    const escapedMessage = escapeHtml(message).replace(/\n/g, '<br>')

    // Send email via Resend
    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'abdulrehman2202797@gmail.com',
      subject: `Portfolio Contact Form: Message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapedName}</p>
        <p><strong>Email:</strong> ${escapedEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${escapedMessage}</p>
      `
    })

    res.json({ success: true, message: 'Message sent successfully!' })

  } catch (error) {
    console.error('Error sending email:', error)
    res.status(500).json({ success: false, message: 'Failed to send message. Please try again later.' })
  }
})

// Health check
app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'Server is running' })
})

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
