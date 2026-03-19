import React, { useState } from 'react'
import axios from 'axios'
import { MdEmail, MdEventAvailable, MdSend } from 'react-icons/md'
import { FaLinkedin } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
  const response = await axios.post(
    import.meta.env.VITE_API_URL || 'https://ar-portfolio-mern-backend.onrender.com/api/contact',
    formData
  );

      if (response.data.success) {
        setStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully.',
        })
        setFormData({ name: '', email: '', message: '' })
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message:
          error.response?.data?.message ||
          'Something went wrong. Please try again later.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <MdEmail />,
      title: 'Email',
      value: 'abdulrehman.codeworks@gmail.com',
      link: 'https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=cm&to=abdulrehman.codeworks@gmail.com',
    },
    {
      icon: <FaLinkedin />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/myprofile',
      link: 'https://www.linkedin.com/in/abdulrehman-ar99/',
    },
    {
      icon: <MdEventAvailable />,
      title: 'Available',
      value: 'Mon - Sun',
      link: null,
    },
  ]

  return (
<section
  id="contact"
  className="relative py-24 bg-slate-50 overflow-hidden"
>
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Header */}
    <div className="text-center mb-16">
      <span className="inline-block py-1 px-3 rounded-full bg-slate-100 text-slate-600 font-semibold text-sm uppercase tracking-wider mb-4 border-2 border-slate-300">
        Get In Touch
      </span>
      <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
        Let's Build Something{" "}
        <span className="text-sky-500">Amazing</span>
      </h2>
      <p className="text-lg text-slate-500 max-w-2xl mx-auto">
        Have a project in mind? I'd love to hear from you. Send me a message and
        I'll respond as soon as possible.
      </p>
    </div>

    {/* Contact Info Cards */}
    <div className="grid md:grid-cols-3 gap-6 mb-12">
      {contactInfo.map((info, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-2 border-slate-300 hover:border-sky-400 text-center group"
        >
          <div className="w-14 h-14 mx-auto mb-4 bg-sky-50 rounded-xl flex items-center justify-center text-sky-600 group-hover:bg-sky-100 group-hover:scale-110 transition-all duration-300 border-2 border-sky-200">
            <div className="text-2xl">{info.icon}</div>
          </div>

          <h3 className="font-bold text-slate-900 mb-2 text-lg">
            {info.title}
          </h3>

          {info.link ? (
            <a
              href={info.link}
              target={info.title === 'Email' || info.title === 'LinkedIn' ? "_blank" : "_self"}
              rel={info.title === 'Email' || info.title === 'LinkedIn' ? "noopener noreferrer" : ""}
              className="text-slate-600 hover:text-sky-600 transition-colors text-sm font-medium"
            >
              {info.value}
            </a>
          ) : (
            <p className="text-slate-600 text-sm font-medium">
              {info.value}
            </p>
          )}
        </div>
      ))}
    </div>

    {/* Contact Form */}
    <div className="max-w-3xl mx-auto">
      <div className="bg-white p-8 md:p-12 rounded-2xl shadow-md border-2 border-slate-300">

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-slate-700 mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="w-full px-4 py-3.5 border-2 border-slate-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all bg-slate-50 hover:bg-white focus:bg-white text-slate-900"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-slate-700 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
                className="w-full px-4 py-3.5 border-2 border-slate-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all bg-slate-50 hover:bg-white focus:bg-white text-slate-900"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-slate-700 mb-2"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              placeholder="Tell me about your project..."
              className="w-full px-4 py-3.5 border-2 border-slate-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all resize-none bg-slate-50 hover:bg-white focus:bg-white text-slate-900"
            />
          </div>

          {status.message && (
            <div
              className={`p-4 rounded-xl border-2 ${
                status.type === "success"
                  ? "bg-green-50 border-green-300 text-green-700"
                  : "bg-red-50 border-red-300 text-red-700"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-xl">
                  {status.type === "success" ? "✅" : "❌"}
                </span>
                <span className="font-medium">{status.message}</span>
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-8 py-4 bg-sky-500 hover:bg-sky-600 text-white rounded-xl font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 border-2 border-sky-600"
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Sending...
              </>
            ) : (
              <>
                Send Message <MdSend />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  </div>
</section>


  )
}
export default Contact
