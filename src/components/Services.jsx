import { Link } from 'react-router-dom'
import { services, whyChoose } from '../data/content.js'
import Reveal from './Reveal.jsx'
import { Icon } from './Icons.jsx'

export default function Services() {
  return (
    <section id="services" className="section section-services section-alt">
      <div className="container">
        <Reveal className="section-head center">
          <span className="eyebrow">{services.eyebrow}</span>
          <h2>{services.title}</h2>
          <p>{services.text}</p>
        </Reveal>

        <div className="services-grid">
          {services.items.map((s, i) => {
            const IconCmp = Icon[s.icon] || Icon.sprout
            return (
              <Reveal as="div" className="service-card" delay={Math.min((i % 3) + 1, 5)} key={s.title}>
                <div className="service-icon"><IconCmp style={{ width: 26, height: 26 }} /></div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </Reveal>
            )
          })}
        </div>

        <div style={{ textAlign: 'center', marginTop: 36 }}>
          <Link to="/services" className="btn btn-outline" style={{ borderColor: 'var(--accent)', color: 'var(--text)' }}>
            Explore All Services & Infrastructure &rarr;
          </Link>
        </div>

        <Reveal delay={2} style={{ marginTop: 70 }}>
          <div className="section-head" style={{ maxWidth: 720 }}>
            <span className="eyebrow">Why Choose Us</span>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.6vw, 2rem)' }}>Why Choose Our SLK Sandalwood Farm Lands?</h2>
          </div>
          <ul className="why-strip">
            {whyChoose.map((w) => (
              <li key={w}>
                <span className="tick" style={{ width: 20, height: 20, flexShrink: 0 }}>
                  <Icon.check style={{ width: 10, height: 10 }} />
                </span>
                {w}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
