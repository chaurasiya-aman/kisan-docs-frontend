import React from 'react'
import './Button.css'

function Button({ children, variant = 'primary', size = 'md', icon, className = '', type = 'button', ...props }) {
  return (
    <button
      type={type}
      className={`btn btn--${variant} btn--${size}${className ? ` ${className}` : ''}`}
      {...props}
    >
      {icon && <span className="btn__icon">{icon}</span>}
      {children}
    </button>
  )
}

export default Button
