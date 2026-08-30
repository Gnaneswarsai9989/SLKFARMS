import PageHeader from '../components/PageHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import { Icon } from '../components/Icons.jsx'
import ArcCarousel from '../components/ArcCarousel.jsx'
import { services, whyChoose, quotation } from '../data/content.js'

export default function ServicesPage({ onBookSlot }) {
  return (
    <div className="inner-page">
      <PageHeader
        eyebrow={services.eyebrow}
        title={
          <>
            Secure, Transparent, and High-Value<br />Agricultural Investment Solutions
          </>
        }
        subtitle={services.text}
        bgImage="/images/irrigation.jpg"
      />

      {/* ── Section 1: All 6 Services & Overview ── */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head center">
            <span className="eyebrow">Our Core Solutions</span>
            <h2>Comprehensive Farmland Services</h2>
            <p>
              Sri Lakshmi Kubera Properties offers professionally managed sandalwood farm land investment services in Andhra Pradesh, helping investors build long-term wealth through secure farmland ownership and sustainable plantation development.
            </p>
            <div style={{ marginTop: 22, display: 'flex', justifyContent: 'center' }}>
              <button className="btn btn-primary" onClick={onBookSlot}>
                <Icon.pin style={{ width: 17, height: 17 }} />
                Schedule Site Visit &rarr;
              </button>
            </div>
          </Reveal>

          <div className="services-grid" style={{ marginTop: 40 }}>
            {services.items.map((s, i) => {
              const IconCmp = Icon[s.icon] || Icon.sprout
              return (
                <Reveal as="div" className="service-card" delay={Math.min((i % 3) + 1, 5)} key={s.title}>
                  <div className="service-icon"><IconCmp style={{ width: 26, height: 26 }} /></div>
                  <h3>{s.title}</h3>
                  <p style={{ lineHeight: 1.7 }}>{s.text}</p>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Section 2: Why Choose Us Checklist ── */}
      <section className="section section-alt">
        <div className="container">
          <Reveal className="section-head center">
            <span className="eyebrow">Built For Excellence</span>
            <h2>10 Reasons to Choose SLK Sandalwood Farmlands</h2>
            <p>Every acre is planned with institutional-grade standards for irrigation, safety, and transparency.</p>
          </Reveal>

          <div className="why-choose-page-grid">
            {whyChoose.map((w, i) => (
              <Reveal as="div" className="why-choose-item-card" delay={Math.min((i % 3) + 1, 5)} key={w}>
                <span className="tick-box">
                  <Icon.check style={{ width: 14, height: 14 }} />
                </span>
                <p>{w}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: 3D Farmland Visual Tour ── */}
      <ArcCarousel onBookSlot={onBookSlot} />

      {/* ── Section 4: Quotation & Site Visit CTA ── */}
      <section className="section section-mid-cta">
        <div className="container">
          <Reveal className="mid-cta-banner">
            <div className="mid-cta-bg-glow" aria-hidden="true" />
            <div className="mid-cta-header" style={{ marginBottom: 0 }}>
              <span className="mid-cta-eyebrow">
                <span className="mid-cta-dot" />
                Custom Estimates
              </span>

              <h2 className="mid-cta-title">
                Get a Quick Quotation &<br />Schedule Your Farmland Visit
              </h2>

              <p className="mid-cta-text">
                {quotation.text}
              </p>

              <div className="mid-cta-actions" style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
                <button className="btn btn-primary btn-cta-main" onClick={onBookSlot}>
                  <Icon.pin style={{ width: 18, height: 18 }} />
                  Schedule Site Visit
                </button>
                <button
                  className="btn btn-quote-action"
                  style={{ padding: '15px 30px', fontSize: '0.95rem' }}
                  onClick={onBookSlot}
                >
                  Request Quick Quotation &rarr;
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
