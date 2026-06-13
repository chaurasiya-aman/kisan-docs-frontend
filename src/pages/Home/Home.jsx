import React from 'react'
import { Link } from 'react-router-dom'
import { FaLeaf, FaMicroscope, FaCloudSun, FaMicrophone, FaMapMarkedAlt, FaBookOpen, FaShieldAlt, FaUsers, FaSeedling, FaCheckCircle } from 'react-icons/fa'
import FeatureCard from '../../components/FeatureCard/FeatureCard.jsx'
import StatCard from '../../components/StatCard/StatCard.jsx'
import SectionTitle from '../../components/SectionTitle/SectionTitle.jsx'
import './Home.css'

const features = [
  { icon: <FaMicroscope />, title: 'AI Disease Detection', description: 'Upload a photo of your crop leaf and get instant disease identification with confidence scores.' },
  { icon: <FaCloudSun />, title: 'Risk Forecasting', description: 'Weather-based disease risk predictions for the next 7 days so you can spray before damage spreads.' },
  { icon: <FaMicrophone />, title: 'Voice Assistant', description: 'Ask questions in Hindi or your regional language and get audio responses — no typing needed.' },
  { icon: <FaMapMarkedAlt />, title: 'Community Disease Map', description: 'See real-time disease reports from farmers near you and alert your community.' },
  { icon: <FaBookOpen />, title: 'Farming Tips', description: 'Expert-curated seasonal advice, pest management guides, and soil health articles.' },
  { icon: <FaShieldAlt />, title: 'Offline Support', description: 'Core detection works without internet — results sync automatically when you get connectivity.' },
]

const steps = [
  { number: '01', title: 'Take a photo', desc: 'Photograph the affected leaf clearly in daylight.' },
  { number: '02', title: 'Upload & scan', desc: 'Upload the photo — the AI analyses it in seconds.' },
  { number: '03', title: 'Read the report', desc: 'Get disease name, severity, and treatment steps.' },
  { number: '04', title: 'Take action', desc: 'Follow the treatment plan or contact an agronomist.' },
]

const benefits = [
  'Works on any basic Android smartphone',
  'Results available in Hindi and English',
  'Covers 38 common crop diseases',
  'No agronomist appointment needed',
  'Free for all registered farmers',
  'Links to PM-KISAN and state schemes',
]

function Home() {
  return (
    <div className="page-wrapper">
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__text">
            <span className="hero__eyebrow">For Indian Farmers</span>
            <h1 className="hero__title">
              Detect crop diseases<br />
              <span className="hero__title-accent">before they spread</span>
            </h1>
            <p className="hero__subtitle">
              Take a photo of any affected leaf. KisanDoc identifies the disease, rates its severity, and tells you exactly how to treat it — in seconds, no internet required.
            </p>
            <div className="hero__actions">
              <Link to="/detection" className="hero__btn-primary">Scan a Leaf Now</Link>
              <Link to="/about" className="hero__btn-secondary">Learn How It Works</Link>
            </div>
            <ul className="hero__trust">
              {['Free to use', 'Works offline', 'Hindi support'].map(t => (
                <li key={t}><FaCheckCircle />{t}</li>
              ))}
            </ul>
          </div>
          <div className="hero__visual">
            <div className="hero__card hero__card--main">
              <div className="hero__card-icon"><FaLeaf /></div>
              <div className="hero__card-label">Disease detected</div>
              <div className="hero__card-disease">Early Blight</div>
              <div className="hero__card-confidence">
                <span>Confidence</span>
                <div className="hero__card-bar">
                  <div className="hero__card-bar-fill" style={{ width: '92%' }}></div>
                </div>
                <span className="hero__card-pct">92%</span>
              </div>
              <div className="hero__card-severity hero__card-severity--medium">Moderate severity</div>
            </div>
            <div className="hero__card hero__card--secondary">
              <FaCloudSun />
              <div>
                <div className="hero__mini-label">Risk tomorrow</div>
                <div className="hero__mini-val hero__mini-val--orange">High</div>
              </div>
            </div>
            <div className="hero__card hero__card--tertiary">
              <FaUsers />
              <div>
                <div className="hero__mini-label">Nearby reports</div>
                <div className="hero__mini-val">14 this week</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section home__stats-section">
        <div className="container">
          <div className="home__stats-grid">
            <StatCard value="2.4L+" label="Scans performed" icon={<FaMicroscope />} />
            <StatCard value="38" label="Diseases identified" icon={<FaLeaf />} color="blue" />
            <StatCard value="92%" label="Detection accuracy" icon={<FaShieldAlt />} />
            <StatCard value="18+" label="States covered" icon={<FaMapMarkedAlt />} color="orange" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Features"
            title="Everything a farmer needs in one place"
            subtitle="KisanDoc brings together disease detection, weather forecasting, and community knowledge to protect your harvest."
          />
          <div className="home__features-grid">
            {features.map(f => (
              <FeatureCard key={f.title} icon={f.icon} title={f.title} description={f.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="section home__how-section">
        <div className="container">
          <SectionTitle
            eyebrow="How It Works"
            title="Four steps to save your crop"
          />
          <div className="home__steps">
            {steps.map(s => (
              <div className="home__step" key={s.number}>
                <div className="home__step-num">{s.number}</div>
                <h3 className="home__step-title">{s.title}</h3>
                <p className="home__step-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container home__benefits-section">
          <div className="home__benefits-text">
            <span className="home__benefits-eyebrow">Why KisanDoc</span>
            <h2 className="home__benefits-title">Built specifically for the Indian farming community</h2>
            <ul className="home__benefits-list">
              {benefits.map(b => (
                <li key={b}><FaCheckCircle />{b}</li>
              ))}
            </ul>
            <Link to="/detection" className="hero__btn-primary" style={{ marginTop: 24, display: 'inline-flex' }}>Start for Free</Link>
          </div>
          <div className="home__benefits-visual">
            <div className="home__crop-grid">
              {['🌾 Wheat', '🍅 Tomato', '🌽 Maize', '🍚 Rice', '🥔 Potato', '🧅 Onion'].map(c => (
                <div className="home__crop-pill" key={c}>{c}</div>
              ))}
            </div>
            <div className="home__disease-preview">
              <div className="home__disease-row home__disease-row--blight">
                <FaLeaf /> Early Blight <span>Tomato</span>
              </div>
              <div className="home__disease-row home__disease-row--rust">
                <FaLeaf /> Leaf Rust <span>Wheat</span>
              </div>
              <div className="home__disease-row home__disease-row--spot">
                <FaLeaf /> Brown Spot <span>Rice</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home__cta-section">
        <div className="container home__cta-inner">
          <div className="home__cta-icon"><FaSeedling /></div>
          <h2 className="home__cta-title">Ready to protect your harvest?</h2>
          <p className="home__cta-subtitle">Join 2.4 lakh farmers already using KisanDoc to identify and treat crop diseases early.</p>
          <div className="home__cta-actions">
            <Link to="/detection" className="hero__btn-primary">Scan Your First Leaf</Link>
            <Link to="/contact" className="home__cta-link">Talk to our team →</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
