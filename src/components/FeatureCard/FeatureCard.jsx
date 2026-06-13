import React from 'react'
import './FeatureCard.css'

function FeatureCard({ icon, title, description, accent = false }) {
  return (
    <div className={`feature-card${accent ? ' feature-card--accent' : ''}`}>
      <div className="feature-card__icon">{icon}</div>
      <h3 className="feature-card__title">{title}</h3>
      <p className="feature-card__desc">{description}</p>
    </div>
  )
}

export default FeatureCard
