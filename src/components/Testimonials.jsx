import { Link } from 'react-router-dom'
import { testimonials } from '../data/content.js'
import Reveal from './Reveal.jsx'
import { Icon } from './Icons.jsx'

export default function Testimonials() {
  return (
    <section id="testimonials" className="section section-testimonials">
      <div className="container">
        <Reveal className="section-head center">
          <span className="eyebrow">{testimonials.eyebrow}</span>
          <h2>{testimonials.title}</h2>
          <p>{testimonials.text}</p>
        </Reveal>

        <div className="testimonial-grid">
          {testimonials.items.slice(0, 3).map((t, i) => (
            <Reveal as="div" className="testimonial-card" delay={Math.min(i + 1, 5)} key={t.name}>
              <div className="testimonial-card-top">
                <div className="testimonial-stars" aria-label="5 stars rating">
                  {'★'.repeat(t.rating || 5)}
                </div>
                <span className="verified-badge">
                  <Icon.check style={{ width: 11, height: 11 }} /> Verified Owner
                </span>
              </div>

              <p className="quote-text">&ldquo;{t.quote}&rdquo;</p>

              <div className="testimonial-plot-tag">
                <span>{t.plot}</span>
              </div>

              <div className="testimonial-person">
                <img
                  src={t.image}
                  alt={t.name}
                  className="avatar-photo"
                />
                <div>
                  <strong>{t.name}</strong>
                  <span className="person-role">{t.role}</span>
                  <span className="person-place">📍 {t.place}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 38 }}>
          <Link to="/testimonials" className="btn btn-outline" style={{ borderColor: 'var(--accent)', color: 'var(--text)' }}>
            Read All Investor Stories & FAQs &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}
