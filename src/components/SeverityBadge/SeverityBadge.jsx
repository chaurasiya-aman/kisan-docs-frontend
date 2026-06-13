import React from 'react'
import './SeverityBadge.css'

function SeverityBadge({ level }) {
  const config = {
    low: { label: 'Low Risk', className: 'severity--low' },
    medium: { label: 'Moderate', className: 'severity--medium' },
    high: { label: 'High Risk', className: 'severity--high' },
    critical: { label: 'Critical', className: 'severity--critical' },
  }
  const { label, className } = config[level] || config.low

  return (
    <span className={`severity-badge ${className}`}>{label}</span>
  )
}

export default SeverityBadge
