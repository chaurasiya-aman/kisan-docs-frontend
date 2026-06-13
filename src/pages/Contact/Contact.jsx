import React, { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaChevronDown } from 'react-icons/fa'
import ContactForm from '../../components/ContactForm/ContactForm.jsx'
import './Contact.css'

const faqs = [
  {
    q: 'Is KisanDoc completely free to use?',
    a: 'Yes. KisanDoc is free for all farmers. We do not charge for disease detection, forecasts, or any other core features.',
  },
  {
    q: 'Does it work without internet?',
    a: 'Yes. The core disease detection model runs fully on your device with no internet needed. Results sync to the community map when you get connectivity.',
  },
  {
    q: 'How accurate is the detection?',
    a: 'The model achieves 92% accuracy on standard test data. For best results, photograph a single leaf in clear natural daylight.',
  },
  {
    q: 'Which crops and diseases are supported?',
    a: 'We support Tomato, Wheat, Rice, Potato, Maize, Grape, and more — covering 38 diseases total. We expand coverage regularly.',
  },
  {
    q: 'Which languages does the voice assistant support?',
    a: 'Currently: Hindi, Marathi, Telugu, Tamil, Punjabi, Bengali, Gujarati, and English. More languages are in development.',
  },
]

function Contact() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div className="page-wrapper">
      <div className="contact__hero">
        <div className="container">
          <h1 className="contact__hero-title">Contact & Support</h1>
          <p className="contact__hero-sub">We're here to help. Reach out in Hindi or English — our team responds within 24 hours.</p>
        </div>
      </div>

      <div className="section">
        <div className="container contact__layout">
          <div className="contact__left">
            <div className="contact__info-cards">
              <div className="contact__info-card">
                <div className="contact__info-icon"><FaPhone /></div>
                <div>
                  <div className="contact__info-label">Kisan Helpline</div>
                  <div className="contact__info-val">1800-180-1551</div>
                  <div className="contact__info-note">Mon–Sat, 9 AM–6 PM</div>
                </div>
              </div>
              <div className="contact__info-card">
                <div className="contact__info-icon contact__info-icon--blue"><FaEnvelope /></div>
                <div>
                  <div className="contact__info-label">Email Support</div>
                  <div className="contact__info-val">support@kisandoc.in</div>
                  <div className="contact__info-note">Reply within 24 hours</div>
                </div>
              </div>
              <div className="contact__info-card">
                <div className="contact__info-icon contact__info-icon--green"><FaWhatsapp /></div>
                <div>
                  <div className="contact__info-label">WhatsApp</div>
                  <div className="contact__info-val">+91 98765 43210</div>
                  <div className="contact__info-note">Send photos of your crop</div>
                </div>
              </div>
              <div className="contact__info-card">
                <div className="contact__info-icon contact__info-icon--orange"><FaMapMarkerAlt /></div>
                <div>
                  <div className="contact__info-label">Office</div>
                  <div className="contact__info-val">ICAR Complex, New Delhi</div>
                  <div className="contact__info-note">110012</div>
                </div>
              </div>
            </div>

            <div className="contact__faq">
              <h2 className="contact__faq-title">Frequently Asked Questions</h2>
              {faqs.map((f, i) => (
                <div
                  key={i}
                  className={`contact__faq-item${openFaq === i ? ' contact__faq-item--open' : ''}`}
                >
                  <button
                    className="contact__faq-q"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    {f.q}
                    <FaChevronDown className="contact__faq-icon" />
                  </button>
                  {openFaq === i && (
                    <div className="contact__faq-a">{f.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="contact__right">
            <div className="contact__form-panel">
              <h2 className="contact__form-title">Send us a message</h2>
              <p className="contact__form-sub">Fill in the form and our agricultural support team will get back to you.</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
