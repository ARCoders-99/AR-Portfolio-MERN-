import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import nodemailer from 'nodemailer'
import { rateLimit } from 'express-rate-limit'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Trust first proxy (useful for production environments like Heroku, Render, etc.)
app.set('trust proxy', 1)

// Middleware
app.use(cors({
  origin: [
    "https://ar-portfolio-web.onrender.com"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// Rate limiting for contact form
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 20, // Limit each IP to 20 requests per windowMs
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  message: {
    success: false,
    message: 'Too many requests. Please try again later.',
  },
})

// In-memory store for email-based rate limiting
// Key: normalized email (lowercase), Value: array of timestamps
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

// Create transporter for Nodemailer
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })
}

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

  // Check for empty or just whitespace fields
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

  // Basic anti-spam: check for repeated characters or suspiciously long words
  const repeatedChars = /(.)\1{10,}/.test(message) // Check for 10+ repeated characters
  if (repeatedChars) {
    errors.push('Message contains suspicious repeated characters')
  }

  return errors
}

// Contact form endpoint with rate limiting
app.post('/api/contact', contactLimiter, async (req, res) => {
  try {
    const { name, email, message } = req.body

    // 1. Basic validation
    const validationErrors = validateInput(name, email, message)
    if (validationErrors.length > 0) {
      return res.status(400).json({
        success: false,
        message: validationErrors.join(', '),
      })
    }

    // 2. Custom Email-based Rate Limiting (2 requests / 30 mins)
    const normalizedEmail = email.trim().toLowerCase()
    const now = Date.now()
    const thirtyMinutesAgo = now - 30 * 60 * 1000

    // Get existing timestamps for this email or empty array
    let timestamps = emailRateLimitStore.get(normalizedEmail) || []

    // Filter to keep only recent ones (older than 30 mins)
    timestamps = timestamps.filter((ts) => ts > thirtyMinutesAgo)

    if (timestamps.length >= 2) {
      return res.status(429).json({
        success: false,
        message: 'You can only send 2 messages every 30 minutes.',
      })
    }

    // Add current request timestamp
    timestamps.push(now)
    emailRateLimitStore.set(normalizedEmail, timestamps)

    // 3. System checks and processing
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Email credentials not configured')
      return res.status(500).json({
        success: false,
        message: 'Server configuration error. Please contact the administrator.',
      })
    }

    // Create transporter
    const transporter = createTransporter()

    // Escape HTML for security
    const escapedName = escapeHtml(name)
    const escapedEmail = escapeHtml(email)
    const escapedMessage = escapeHtml(message).replace(/\n/g, '<br>')

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to your Gmail
      replyTo: email,
      subject: `Portfolio Contact Form: Message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapedName}</p>
        <p><strong>Email:</strong> ${escapedEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${escapedMessage}</p>
        <hr>
        <p><small>This message was sent from your portfolio contact form.</small></p>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    res.json({
      success: true,
      message: 'Message sent successfully!',
    })
  } catch (error) {
    console.error('Error sending email:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.',
    })
  }
})

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Server is running',
  })
})

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

