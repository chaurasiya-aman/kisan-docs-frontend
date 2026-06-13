import React, { useState } from 'react'
import { FaSearch, FaSeedling, FaBug, FaCalendarAlt, FaWater, FaLeaf } from 'react-icons/fa'
import TipCard from '../../components/TipCard/TipCard.jsx'
import './Tips.css'

const categories = [
  { id: 'all', label: 'All Tips', icon: <FaLeaf /> },
  { id: 'crop', label: 'Crop Care', icon: <FaSeedling /> },
  { id: 'pest', label: 'Pest Management', icon: <FaBug /> },
  { id: 'seasonal', label: 'Seasonal Advice', icon: <FaCalendarAlt /> },
  { id: 'water', label: 'Water & Soil', icon: <FaWater /> },
]

const tips = [
  {
    icon: '🌱',
    category: 'crop',
    title: 'Rotate your crops every season to prevent soil depletion',
    summary: 'Planting the same crop repeatedly drains specific nutrients and builds up disease pathogens. Rotate legumes, cereals, and vegetables in a 3-year cycle.',
    tag: 'General Farming',
  },
  {
    icon: '🐛',
    category: 'pest',
    title: 'Use yellow sticky traps to monitor whitefly populations early',
    summary: 'Sticky traps placed 30 cm above the crop canopy catch adult whiteflies before populations explode. Check weekly and replace when full.',
    tag: 'Pest Control',
  },
  {
    icon: '☀️',
    category: 'seasonal',
    title: 'Kharif 2025: Prepare fields before the first monsoon rain',
    summary: 'Deep ploughing in May–June exposes soil-borne pests to sunlight. Add well-composted FYM at 10 tonnes per hectare before sowing.',
    tag: 'Kharif Season',
  },
  {
    icon: '💧',
    category: 'water',
    title: 'Drip irrigation reduces fungal disease incidence by up to 40%',
    summary: 'Keeping foliage dry is the single most effective cultural practice for fungal disease management. Drip systems also save 30–50% water compared to flood irrigation.',
    tag: 'Irrigation',
  },
  {
    icon: '🌾',
    category: 'crop',
    title: 'Apply zinc sulphate to wheat fields showing yellowing leaves',
    summary: 'Zinc deficiency is the most common micronutrient deficiency in Indian wheat. Apply 25 kg/ha zinc sulphate at sowing, or foliar spray 0.5% ZnSO4 at tillering stage.',
    tag: 'Wheat',
  },
  {
    icon: '🔬',
    category: 'pest',
    title: 'Neem-based pesticides are effective against sucking pests',
    summary: 'Azadirachtin from neem disrupts the moulting cycle of aphids, thrips, and mites. Use 3–5 ml/litre of Neem Oil EC as a safer alternative to synthetic chemicals.',
    tag: 'Organic',
  },
  {
    icon: '🌧️',
    category: 'seasonal',
    title: 'Post-monsoon: watch for collar rot in standing water fields',
    summary: 'Excess moisture after heavy rains creates conditions for Sclerotium rolfsii and Phytophthora. Ensure field drainage channels are clear before the season ends.',
    tag: 'Rabi Season',
  },
  {
    icon: '🧪',
    category: 'water',
    title: 'Test your soil pH before applying fertilisers this season',
    summary: 'Most Indian soils have shifted to acidic pH due to continuous fertiliser use. A soil test (₹50 at Krishi Vigyan Kendra) guides the right lime and fertiliser combination.',
    tag: 'Soil Health',
  },
  {
    icon: '🍅',
    category: 'crop',
    title: 'Stake and prune tomatoes to improve airflow and reduce disease',
    summary: 'Single-stem training with weekly pruning of suckers reduces canopy density by 60%, cutting disease incidence dramatically. Use sharp, disinfected tools.',
    tag: 'Tomato',
  },
]

function Tips() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [search, setSearch] = useState('')

  const filtered = tips.filter(t => {
    const catOk = activeCategory === 'all' || t.category === activeCategory
    const searchOk = search === '' || t.title.toLowerCase().includes(search.toLowerCase()) || t.summary.toLowerCase().includes(search.toLowerCase())
    return catOk && searchOk
  })

  return (
    <div className="page-wrapper">
      <div className="tips__hero">
        <div className="container">
          <h1 className="tips__hero-title">Farming Tips & Guides</h1>
          <p className="tips__hero-sub">Expert advice on crop care, pest management, and seasonal best practices</p>
          <div className="tips__search">
            <FaSearch className="tips__search-icon" />
            <input
              type="text"
              placeholder="Search tips, crops, or practices..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="tips__search-input"
            />
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="tips__categories">
            {categories.map(c => (
              <button
                key={c.id}
                className={`tips__category-btn${activeCategory === c.id ? ' tips__category-btn--active' : ''}`}
                onClick={() => setActiveCategory(c.id)}
              >
                {c.icon} {c.label}
              </button>
            ))}
          </div>

          <div className="tips__count">{filtered.length} tip{filtered.length !== 1 ? 's' : ''} found</div>

          {filtered.length === 0 ? (
            <div className="tips__empty">
              <p>No tips found for your search. Try different keywords.</p>
            </div>
          ) : (
            <div className="tips__grid">
              {filtered.map((tip, i) => (
                <TipCard
                  key={i}
                  icon={tip.icon}
                  category={categories.find(c => c.id === tip.category)?.label || tip.category}
                  title={tip.title}
                  summary={tip.summary}
                  tag={tip.tag}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Tips
