import { useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import { Icon } from '../components/Icons.jsx'
import { testimonials, faqs } from '../data/content.js'

export default function TestimonialsPage({ onBookSlot }) {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <div className="inner-page">
      <PageHeader
        eyebrow="Investor Stories"
        title={
          <>
            Real Experiences from Our<br />Valued Farmland Investors
          </>
        }
        subtitle="Read firsthand reviews from individuals and families who have secured sandalwood farmland plots with Sri Lakshmi Kubera Properties in Nellore."
        bgImage="/images/farmhouse.jpg"
      />

      {/* ── Section 1: Verified Testimonials Grid ── */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head center">
            <span className="eyebrow">Verified Reviews</span>
            <h2>What Our Investors Say</h2>
            <p>{testimonials.text}</p>
          </Reveal>

          <div className="testimonial-grid">
            {testimonials.items.map((t, i) => (
              <Reveal as="div" className="testimonial-card" delay={Math.min((i % 3) + 1, 5)} key={t.name}>
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
        </div>
      </section>

      {/* ── Section 2: On-Site Investor Visit Spotlight ── */}
      <section className="section section-alt">
        <div className="container">
          <div className="site-visit-spotlight-card">
            <div className="site-visit-img-wrap">
              <img
                src="/images/site_visit.jpg"
                alt="Investors inspecting sandalwood plantation in Krishnapuram"
                className="site-visit-img"
              />
              <div className="site-visit-badge">
                <span>📍 On-Site in Krishnapuram, Nellore</span>
              </div>
            </div>

            <div className="site-visit-content">
              <span className="eyebrow">Investor Experience</span>
              <h2>Transparent On-Site Guided Farmland Tours</h2>
              <p>
                We believe in 100% ground reality. Every prospective investor is invited to walk through our 56-acre organic plantation, inspect root hydration across the automated drip lines, review government revenue passbooks, and experience our on-site guest farmhouse in person.
              </p>

              <div className="site-visit-features">
                <div className="visit-feat-item">
                  <span className="tick-box"><Icon.pin style={{ width: 14, height: 14 }} /></span>
                  <div>
                    <strong>Free Guided Transport</strong>
                    <span>Complimentary pickup from Nellore / highway for site visits.</span>
                  </div>
                </div>
                <div className="visit-feat-item">
                  <span className="tick-box"><Icon.scroll style={{ width: 14, height: 14 }} /></span>
                  <div>
                    <strong>Live Document Verification</strong>
                    <span>Inspect registered 1B passbooks, survey maps, and revenue records.</span>
                  </div>
                </div>
                <div className="visit-feat-item">
                  <span className="tick-box"><Icon.house style={{ width: 14, height: 14 }} /></span>
                  <div>
                    <strong>Farmhouse Hospitality</strong>
                    <span>Relax at our private eco-farmhouse retreat with your family.</span>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: 24 }}>
                <button className="btn btn-primary" onClick={onBookSlot}>
                  Schedule Free Weekend Site Visit &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: FAQ Accordion ── */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head center">
            <span className="eyebrow">Got Questions?</span>
            <h2>Frequently Asked Questions</h2>
            <p>Everything you need to know about purchasing and owning sandalwood farmlands.</p>
          </Reveal>

          <div className="faq-container">
            {faqs.map((f, i) => {
              const isOpen = openFaq === i
              return (
                <Reveal as="div" className={`faq-card${isOpen ? ' is-open' : ''}`} key={f.q} delay={Math.min((i % 4) + 1, 5)}>
                  <button
                    className="faq-question"
                    onClick={() => setOpenFaq(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-q-text">
                      <span className="faq-q-num">{f.num || i + 1}.</span> {f.q}
                    </span>
                    <span className={`faq-chevron-circle${isOpen ? ' is-rotated' : ''}`}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </span>
                  </button>
                  {isOpen && (
                    <div className="faq-answer">
                      <p>{f.a}</p>
                    </div>
                  )}
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Section 4: Call to Action Banner ── */}
      <section className="section section-mid-cta">
        <div className="container">
          <Reveal className="mid-cta-banner">
            <div className="mid-cta-bg-glow" aria-hidden="true" />
            <div className="mid-cta-header" style={{ marginBottom: 0 }}>
              <span className="mid-cta-eyebrow">
                <span className="mid-cta-dot" />
                Join Our Investors
              </span>

              <h2 className="mid-cta-title">
                Join Our Growing Community of<br />Smart Farmland Investors
              </h2>

              <p className="mid-cta-text">
                Book a free site visit to see the plantation, meet our agricultural team, and select your ideal plot.
              </p>

              <div className="mid-cta-actions">
                <button className="btn btn-primary btn-cta-main" onClick={onBookSlot}>
                  <Icon.pin style={{ width: 18, height: 18 }} />
                  Book Free Site Visit
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
