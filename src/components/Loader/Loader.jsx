import React from 'react'
import './Loader.css'

function Loader({ text = 'Analysing leaf...' }) {
  return (
    <div className="loader">
      <div className="loader__spinner"></div>
      <p className="loader__text">{text}</p>
    </div>
  )
}

export default Loader
