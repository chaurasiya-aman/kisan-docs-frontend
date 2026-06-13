import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaLeaf, FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/detection', label: 'Detection' },
  { path: '/forecast', label: 'Forecast' },
  { path: '/voice', label: 'Voice' },
  { path: '/tips', label: 'Tips' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <Link to="/" className="navbar__brand">
          <span className="navbar__brand-icon"><FaLeaf /></span>
          <span className="navbar__brand-name">KisanDoc</span>
        </Link>

        <ul className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`}>
          {navLinks.map(link => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`navbar__link${location.pathname === link.path ? ' navbar__link--active' : ''}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/detection" className="navbar__cta">Scan Leaf</Link>
          </li>
        </ul>

        <button
          className="navbar__toggle"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
