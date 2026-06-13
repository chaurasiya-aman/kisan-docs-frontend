import React from 'react'
import SeverityBadge from '../SeverityBadge/SeverityBadge.jsx'
import './DiseaseCard.css'

function DiseaseCard({ disease }) {
  const { name, confidence, severity, description, affectedCrop, symptoms, treatment } = disease
  return (
    <div className="disease-card">
      <div className="disease-card__header">
        <div>
          <p className="disease-card__crop">Crop: {affectedCrop}</p>
          <h3 className="disease-card__name">{name}</h3>
        </div>
        <div className="disease-card__badges">
          <SeverityBadge level={severity} />
          <span className="disease-card__confidence">{confidence}% match</span>
        </div>
      </div>

      <div className="disease-card__confidence-bar">
        <div className="disease-card__confidence-fill" style={{ width: `${confidence}%` }}></div>
      </div>

      <p className="disease-card__desc">{description}</p>

      <div className="disease-card__sections">
        <div>
          <h4 className="disease-card__section-title">Symptoms</h4>
          <ul className="disease-card__list">
            {symptoms.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </div>
        <div>
          <h4 className="disease-card__section-title">Treatment</h4>
          <ul className="disease-card__list disease-card__list--green">
            {treatment.map((t, i) => <li key={i}>{t}</li>)}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default DiseaseCard
