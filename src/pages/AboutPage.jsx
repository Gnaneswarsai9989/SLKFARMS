import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import { Icon } from '../components/Icons.jsx'
import AboutSlider from '../components/AboutSlider.jsx'
import { about, hero, processSteps, standoutTabs } from '../data/content.js'

export default function AboutPage({ onBookSlot }) {
  const locationAdvantage = standoutTabs.tabs.find((t) => t.label === 'Location Advantage')

  return (
    <div className="inner-page">
      <PageHeader
        eyebrow="Who We Are"
        title={
          <>
            Trusted Sandalwood Farm Land<br />Investments in Nellore
          </>
        }
        subtitle="Sri Lakshmi Kubera Properties develops premium, legally transparent sandalwood farm lands designed for sustainable growth and long-term wealth creation."
        bgImage="/images/plantation.jpg"
      />

      {/* ── Section 1: Who We Are Story ── */}
      <section className="section section-about">
        <div className="container about-grid">
          <Reveal>
            <AboutSlider />
          </Reveal>

          <div>
            <Reveal><span className="eyebrow">{about.eyebrow}</span></Reveal>
            <Reveal delay={1}>
              <h2 style={{ fontSize: 'clamp(1.7rem, 3vw, 2.3rem)', maxWidth: '20ch' }}>
                {about.title}
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: 14 }}>
                {about.lead}
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: 14 }}>
                {about.companyStory}
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: 20 }}>
                {about.commitment}
              </p>
            </Reveal>

            <Reveal delay={3}>
              <h3 style={{ fontSize: '1.05rem', marginTop: 24, marginBottom: 12 }}>{about.highlightsTitle}</h3>
              <ul className="highlight-list">
                {about.highlights.map((h) => (
                  <li key={h}>
                    <span className="tick"><Icon.check style={{ width: 12, height: 12 }} /></span>
                    {h}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={4}>
              <p className="closing-line" style={{ marginTop: 20 }}>{about.closing}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Section 2: 6-Step Farmland Ownership Journey ── */}
      <section className="section section-services section-alt">
        <div className="container">
          <Reveal className="section-head center">
            <span className="eyebrow">Seamless Process</span>
            <h2>6-Step Farmland Ownership & Development Journey</h2>
            <p>From site visit and clear legal registration to 15-year harvest management — complete transparency at every step.</p>
          </Reveal>

          <div className="about-process-grid">
            {processSteps.map((s, i) => {
              const IconCmp = Icon[s.icon] || Icon.sprout
              return (
                <Reveal as="div" className="process-step-card" delay={Math.min((i % 3) + 1, 5)} key={s.title}>
                  <div className="process-step-top">
                    <span className="process-num-badge">0{s.num}</span>
                    <div className="process-icon-circle">
                      <IconCmp style={{ width: 22, height: 22 }} />
                    </div>
                  </div>
                  <h3>{s.num}. {s.title}</h3>
                  <p>{s.text}</p>
                  <button className="btn btn-primary btn-sm process-btn" onClick={onBookSlot}>
                    Learn More &rarr;
                  </button>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Section 3: Project Blueprint in Krishnapuram, Udayagiri ── */}
      <section className="section section-standout">
        <div className="container">
          <div className="about-grid">
            <div>
              <Reveal><span className="eyebrow">Project Location & Blueprint</span></Reveal>
              <Reveal delay={1}>
                <h2>About Sri Lakshmi Kubera Properties</h2>
              </Reveal>
              <Reveal delay={2}>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: 14 }}>
                  This is a premium sandalwood farm land project by <strong>Sri Lakshmi Kubera Properties</strong>, located in <strong>Krishnapuram, Udayagiri, Nellore</strong>. Spread across 56 acres, it is designed to offer a secure, sustainable, and high-value agricultural investment focused on long-term wealth creation.
                </p>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: 20 }}>
                  Developed with modern planning and organic farming principles, the project combines nature with structured development to ensure consistent growth and future-ready returns.
                </p>
              </Reveal>

              <Reveal delay={3}>
                <ul className="highlight-list">
                  <li>
                    <span className="tick"><Icon.pin style={{ width: 12, height: 12 }} /></span>
                    Location: Krishnapuram, Udayagiri, Nellore
                  </li>
                  <li>
                    <span className="tick"><Icon.sprout style={{ width: 12, height: 12 }} /></span>
                    96 sandalwood trees per plot (0.22 cent)
                  </li>
                  <li>
                    <span className="tick"><Icon.drop style={{ width: 12, height: 12 }} /></span>
                    Drip irrigation for efficient water management
                  </li>
                  <li>
                    <span className="tick"><Icon.leaf style={{ width: 12, height: 12 }} /></span>
                    Organic cultivation practices
                  </li>
                  <li>
                    <span className="tick"><Icon.shield style={{ width: 12, height: 12 }} /></span>
                    Secure and well-developed farmland layout with 24/7 solar security
                  </li>
                </ul>
              </Reveal>
            </div>

            <Reveal delay={2}>
              <div className="feature-stat-box">
                <div className="stat-highlight">
                  <strong>56+</strong>
                  <span>Acre Planned Project</span>
                </div>
                <div className="stat-highlight">
                  <strong>96</strong>
                  <span>Sandalwood Trees / Plot</span>
                </div>
                <div className="stat-highlight">
                  <strong>100%</strong>
                  <span>Clear Title & Registered Deed</span>
                </div>
                <div className="stat-highlight">
                  <strong>24/7</strong>
                  <span>CCTV & Solar Diamond Fencing</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Section 4: Three Core Pillars ── */}
      <section className="section section-alt">
        <div className="container">
          <Reveal className="section-head center">
            <span className="eyebrow">Our Foundation</span>
            <h2>Three Core Pillars of Sri Lakshmi Kubera Farms</h2>
            <p>Built upon unwavering standards of trust, environmental stewardship, and customer prosperity.</p>
          </Reveal>

          <div className="pillars-grid-page">
            {hero.pillars.map((p, i) => (
              <Reveal as="div" className="pillar-card" delay={i + 1} key={p.title}>
                <span className="pillar-num">0{i + 1}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: Strategic Location Advantage ── */}
      {locationAdvantage && (
        <section className="section">
          <div className="container">
            <Reveal className="section-head center">
              <span className="eyebrow">Location Advantage</span>
              <h2>{locationAdvantage.heading}</h2>
              <p>{locationAdvantage.intro}</p>
            </Reveal>

            <div className="why-choose-page-grid" style={{ maxWidth: 900, margin: '0 auto' }}>
              {locationAdvantage.points.map((pt) => (
                <Reveal as="div" className="why-choose-item-card" key={pt}>
                  <span className="tick-box">
                    <Icon.pin style={{ width: 14, height: 14 }} />
                  </span>
                  <p>{pt}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Section 6: Call to Action Banner ── */}
      <section className="section section-mid-cta">
        <div className="container">
          <Reveal className="mid-cta-banner">
            <div className="mid-cta-bg-glow" aria-hidden="true" />
            <div className="mid-cta-header" style={{ marginBottom: 0 }}>
              <span className="mid-cta-eyebrow">
                <span className="mid-cta-dot" />
                Schedule Your Visit
              </span>

              <h2 className="mid-cta-title">
                Experience Sri Lakshmi<br />Kubera Farms in Person
              </h2>

              <p className="mid-cta-text">
                We invite you to visit our Krishnapuram, Udayagiri plantation, inspect our organic farm plots, and explore the on-site farmhouse.
              </p>

              <div className="mid-cta-actions" style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
                <button className="btn btn-primary btn-cta-main" onClick={onBookSlot}>
                  <Icon.pin style={{ width: 18, height: 18 }} />
                  Book Free Site Visit
                </button>
                <Link to="/contact" className="btn btn-quote-action" style={{ padding: '15px 30px', fontSize: '0.95rem' }}>
                  Contact Farm Office &rarr;
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
