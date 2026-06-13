import React from 'react'
import './StatCard.css'

function StatCard({ value, label, icon, color = 'green' }) {
  return (
    <div className={`stat-card stat-card--${color}`}>
      {icon && <span className="stat-card__icon">{icon}</span>}
      <div className="stat-card__value">{value}</div>
      <div className="stat-card__label">{label}</div>
    </div>
  )
}

export default StatCard
