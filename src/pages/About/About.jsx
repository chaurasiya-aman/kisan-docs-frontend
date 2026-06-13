import React from 'react'
import { FaLeaf, FaShieldAlt, FaMicrophone, FaUsers, FaMapMarkedAlt, FaCheckCircle, FaMobile, FaBrain, FaDatabase } from 'react-icons/fa'
import SectionTitle from '../../components/SectionTitle/SectionTitle.jsx'
import './About.css'

const objectives = [
  'Enable early detection of 38+ common crop diseases across major Indian crops',
  'Make agricultural expertise accessible to every farmer, regardless of literacy or connectivity',
  'Provide region-specific, weather-aware disease risk forecasting',
  'Build a crowdsourced disease surveillance network across Indian farming communities',
  'Support decision-making in local languages with voice-based interaction',
  'Connect farmers with government schemes and local agricultural resources',
]

const techStack = [
  { icon: <FaBrain />, name: 'AI / ML Model', detail: 'MobileNetV3 trained on PlantVillage dataset (54,000+ images)' },
  { icon: <FaMobile />, name: 'Offline-first', detail: 'TensorFlow Lite on-device inference — no internet needed' },
  { icon: <FaDatabase />, name: 'Local Storage', detail: 'SQLite stores scans and syncs when connectivity returns' },
  { icon: <FaMicrophone />, name: 'Voice NLP', detail: 'Speech-to-text + text-to-speech in 8 Indian languages' },
  { icon: <FaMapMarkedAlt />, name: 'Community Map', detail: 'GPS-tagged reports visualised on an interactive map' },
  { icon: <FaShieldAlt />, name: 'Privacy-first', detail: 'Federated learning — images never leave the device' },
]

const teamValues = [
  { icon: '🌾', title: 'Farmer-first design', desc: 'Every feature is designed for a farmer with a basic smartphone, in a field with poor connectivity.' },
  { icon: '🔬', title: 'Science-backed', desc: 'Recommendations come from ICAR research and peer-reviewed agronomy literature.' },
  { icon: '🌐', title: 'Language-inclusive', desc: 'Available in Hindi, Marathi, Telugu, Tamil, Punjabi, Bengali, Gujarati, and English.' },
  { icon: '🤝', title: 'Community-driven', desc: 'Farmers help each other by sharing disease sightings on the community map.' },
]

function About() {
  return (
    <div className="page-wrapper">
      <div className="about__hero">
        <div className="container about__hero-inner">
          <div>
            <span className="about__eyebrow">Our Mission</span>
            <h1 className="about__hero-title">Putting crop disease expertise<br />in every farmer's hands</h1>
            <p className="about__hero-sub">
              KisanDoc is an AI-powered plant health platform built for the 140 million smallholder farmers of India. We believe no farmer should lose their harvest to a disease that could have been identified and treated in time.
            </p>
          </div>
          <div className="about__hero-stats">
            <div className="about__hero-stat">
              <div className="about__hero-stat-val">140M+</div>
              <div className="about__hero-stat-label">Target farmers in India</div>
            </div>
            <div className="about__hero-stat">
              <div className="about__hero-stat-val">₹50,000 Cr</div>
              <div className="about__hero-stat-label">Annual crop losses from disease</div>
            </div>
            <div className="about__hero-stat">
              <div className="about__hero-stat-val">38+</div>
              <div className="about__hero-stat-label">Diseases we identify</div>
            </div>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Objectives"
            title="What we're building toward"
            subtitle="Six concrete goals that guide every product decision we make."
          />
          <div className="about__objectives">
            {objectives.map((o, i) => (
              <div className="about__objective" key={i}>
                <span className="about__objective-num">{String(i + 1).padStart(2, '0')}</span>
                <div className="about__objective-line"></div>
                <p className="about__objective-text">{o}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section about__tech-section">
        <div className="container">
          <SectionTitle
            eyebrow="Technology"
            title="How it works under the hood"
          />
          <div className="about__tech-grid">
            {techStack.map((t, i) => (
              <div className="about__tech-card" key={i}>
                <div className="about__tech-icon">{t.icon}</div>
                <div>
                  <div className="about__tech-name">{t.name}</div>
                  <div className="about__tech-detail">{t.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Our Values"
            title="Principles behind KisanDoc"
          />
          <div className="about__values-grid">
            {teamValues.map((v, i) => (
              <div className="about__value-card" key={i}>
                <div className="about__value-icon">{v.icon}</div>
                <h3 className="about__value-title">{v.title}</h3>
                <p className="about__value-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section about__benefits-section">
        <div className="container about__benefits-inner">
          <div>
            <SectionTitle
              eyebrow="For Farmers"
              title="What this means for you"
              align="left"
            />
            <ul className="about__benefits-list">
              {[
                'Free to use, forever — no subscription',
                'Works on any Android phone with 2 GB RAM',
                'Results in under 3 seconds, even offline',
                'Treatment advice in plain Hindi',
                'Links to PM-KISAN, soil health cards, and KCC',
                'Community reports keep you ahead of outbreaks',
              ].map((b, i) => (
                <li key={i}><FaCheckCircle />{b}</li>
              ))}
            </ul>
          </div>
          <div className="about__phone-mockup">
            <div className="about__phone">
              <div className="about__phone-screen">
                <div className="about__phone-result">
                  <div className="about__phone-label">Disease detected</div>
                  <div className="about__phone-disease">Early Blight</div>
                  <div className="about__phone-bar-wrap">
                    <div className="about__phone-bar"><div style={{ width: '92%' }}></div></div>
                    <span>92%</span>
                  </div>
                  <div className="about__phone-action">Spray Mancozeb 0.25% today</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
