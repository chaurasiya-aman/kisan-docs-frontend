import React from 'react'
import { Link } from 'react-router-dom'
import { FaLeaf, FaTwitter, FaFacebook, FaYoutube, FaWhatsapp } from 'react-icons/fa'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand-col">
          <div className="footer__brand">
            <span className="footer__brand-icon"><FaLeaf /></span>
            <span className="footer__brand-name">KisanDoc</span>
          </div>
          <p className="footer__tagline">
            Helping Indian farmers detect crop diseases early with AI-assisted tools.
          </p>
          <div className="footer__social">
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" aria-label="YouTube"><FaYoutube /></a>
            <a href="#" aria-label="WhatsApp"><FaWhatsapp /></a>
          </div>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/detection">Disease Detection</Link></li>
            <li><Link to="/forecast">Risk Forecast</Link></li>
            <li><Link to="/community">Community Map</Link></li>
            <li><Link to="/tips">Farming Tips</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Support</h4>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/contact">FAQ</Link></li>
            <li><a href="#">Kisan Helpline</a></li>
            <li><a href="#">PM-KISAN Portal</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Contact</h4>
          <p className="footer__contact-item">📞 1800-180-1551</p>
          <p className="footer__contact-item">✉️ support@kisandoc.in</p>
          <p className="footer__contact-item">📍 New Delhi, India</p>
          <div className="footer__legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>© 2025 KisanDoc. All rights reserved. Built for Indian Farmers.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
