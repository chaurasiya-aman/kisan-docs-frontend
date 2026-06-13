import React from 'react'
import './TipCard.css'

function TipCard({ icon, category, title, summary, tag }) {
  return (
    <div className="tip-card">
      <div className="tip-card__header">
        <span className="tip-card__icon">{icon}</span>
        <span className="tip-card__category">{category}</span>
      </div>
      <h3 className="tip-card__title">{title}</h3>
      <p className="tip-card__summary">{summary}</p>
      {tag && <span className="tip-card__tag">{tag}</span>}
    </div>
  )
}

export default TipCard
