import React from 'react'
import './WeatherCard.css'

function WeatherCard({ icon, label, value, unit, color = 'default' }) {
  return (
    <div className={`weather-card weather-card--${color}`}>
      <span className="weather-card__icon">{icon}</span>
      <div className="weather-card__value">{value}<span className="weather-card__unit">{unit}</span></div>
      <div className="weather-card__label">{label}</div>
    </div>
  )
}

export default WeatherCard
