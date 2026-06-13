import React, { useState } from 'react'
import Button from '../Button/Button.jsx'
import './ContactForm.css'

function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', state: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="contact-form__success">
        <div className="contact-form__success-icon">✓</div>
        <h3>Message Sent!</h3>
        <p>Our team will get back to you within 24 hours.</p>
        <Button variant="outline" onClick={() => setSubmitted(false)}>Send Another</Button>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__row">
        <div className="contact-form__field">
          <label htmlFor="name">Full Name</label>
          <input id="name" name="name" type="text" placeholder="Your name" value={form.name} onChange={handleChange} required />
        </div>
        <div className="contact-form__field">
          <label htmlFor="phone">Mobile Number</label>
          <input id="phone" name="phone" type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={handleChange} />
        </div>
      </div>
      <div className="contact-form__row">
        <div className="contact-form__field">
          <label htmlFor="state">State</label>
          <select id="state" name="state" value={form.state} onChange={handleChange} required>
            <option value="">Select your state</option>
            <option>Uttar Pradesh</option>
            <option>Maharashtra</option>
            <option>Punjab</option>
            <option>Haryana</option>
            <option>Bihar</option>
            <option>Madhya Pradesh</option>
            <option>Rajasthan</option>
            <option>Karnataka</option>
            <option>Tamil Nadu</option>
            <option>Other</option>
          </select>
        </div>
        <div className="contact-form__field">
          <label htmlFor="subject">Subject</label>
          <input id="subject" name="subject" type="text" placeholder="Disease detection issue / General query" value={form.subject} onChange={handleChange} required />
        </div>
      </div>
      <div className="contact-form__field">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={5} placeholder="Describe your problem or question in detail..." value={form.message} onChange={handleChange} required />
      </div>
      <Button type="submit" variant="primary" size="lg">Send Message</Button>
    </form>
  )
}

export default ContactForm
