import { useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import { Icon } from '../components/Icons.jsx'
import { upcomingProjectsData, quotation } from '../data/content.js'

export default function UpcomingProjectsPage({ onBookSlot }) {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <div className="inner-page upcoming-projects-page">
      <PageHeader
        eyebrow={upcomingProjectsData.eyebrow}
        title={
          <>
            Mega Upcoming Industrial Projects<br />In Surrounding Areas
          </>
        }
        subtitle={upcomingProjectsData.subtitle}
        bgImage="/images/project_anantha.jpg"
      />

      {/* ── Stats Strip ── */}
      <section className="upcoming-stats-section">
        <div className="container">
          <div className="upcoming-stats-grid">
            {upcomingProjectsData.stats.map((s, i) => (
              <Reveal as="div" className="upcoming-stat-card" delay={i + 1} key={s.label}>
                <span className="upcoming-stat-val">{s.value}</span>
                <strong className="upcoming-stat-lbl">{s.label}</strong>
                <span className="upcoming-stat-sub">{s.sub}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Regional Vision Announcement Banner ── */}
      <section className="section" style={{ paddingBottom: 20 }}>
        <div className="container">
          <Reveal className="upcoming-vision-banner">
            <div className="vision-banner-bg-glow" aria-hidden="true" />
            <div className="vision-banner-header">
              <span className="vision-badge">
                <Icon.star style={{ width: 14, height: 14, color: '#FFE6A3' }} />
                {upcomingProjectsData.teluguTagline}
              </span>
              <h2 className="vision-title">
                దుత్తలూరు • వింజమూరు • కలిగిరి మండలాలు
              </h2>
              <p className="vision-subtitle">
                TOTAL 8 MEGA CORPORATE & INDUSTRIAL PROJECTS (2,315+ ACRES)
              </p>
              <div className="vision-mandals-pills">
                {upcomingProjectsData.regions.map((r) => (
                  <span className="mandal-pill" key={r.name}>
                    <Icon.pin style={{ width: 14, height: 14 }} />
                    <strong>{r.telugu}</strong> <span>({r.name})</span>
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── All 8 Mega Corporate Projects Grid ── */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head center">
            <span className="eyebrow">Approved Industrial Corridors</span>
            <h2>8 Major Companies Expanding Around Our Farmlands</h2>
            <p>
              Transforming the Duttalur, Vinjamur, and Kaligiri regions into major industrial, technology, and green energy powerhouses.
            </p>
          </Reveal>

          <div className="upcoming-projects-grid">
            {upcomingProjectsData.companies.map((c, i) => (
              <Reveal as="div" className="upcoming-project-card" delay={Math.min((i % 4) + 1, 5)} key={c.id}>
                <div className="project-card-img-wrap">
                  <img src={c.image} alt={c.name} className="project-card-img" loading="lazy" />
                  <div className="project-card-overlay" />
                  <span className="project-num-badge">{c.num}</span>
                  <span className="project-acre-badge">{c.badge}</span>
                </div>

                <div className="project-card-body">
                  <div className="project-category-tag">{c.category}</div>
                  <h3 className="project-name">{c.name}</h3>
                  <div className="project-telugu-name">{c.teluguName}</div>

                  <div className="project-loc-tag">
                    <Icon.pin style={{ width: 14, height: 14, flexShrink: 0 }} />
                    <span>{c.location}</span>
                  </div>

                  <div className="project-telugu-box">
                    <p>{c.teluguDesc}</p>
                  </div>

                  <p className="project-desc">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section: 5 Strategic Growth Benefits ── */}
      <section className="section section-alt">
        <div className="container">
          <Reveal className="section-head center">
            <span className="eyebrow">Growth Multiplier</span>
            <h2>ఈ ప్రాజెక్ట్ల వల్ల కలిగే ప్రయోజనాలు</h2>
            <p>
              How these 2,315+ acres of mega industrial developments directly multiply your farmland and real estate appreciation.
            </p>
          </Reveal>

          <div className="upcoming-benefits-grid">
            {upcomingProjectsData.benefits.map((b, i) => {
              const IconCmp = Icon[b.icon] || Icon.chart
              return (
                <Reveal as="div" className="upcoming-benefit-card" delay={i + 1} key={b.id}>
                  <div className="benefit-icon-ring">
                    <IconCmp style={{ width: 26, height: 26 }} />
                  </div>
                  <div className="benefit-content">
                    <div className="benefit-telugu-title">{b.telugu}</div>
                    <h3 className="benefit-english-title">{b.english}</h3>
                    <p className="benefit-desc">{b.desc}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Official Poster Brochure Spotlight ── */}
      <section className="section">
        <div className="container">
          <Reveal className="upcoming-poster-spotlight-card">
            <div className="poster-spotlight-img-wrap" onClick={() => setSelectedImage(upcomingProjectsData.posterImage)}>
              <img
                src={upcomingProjectsData.posterImage}
                alt="Upcoming Projects Official Brochure"
                className="poster-spotlight-img"
              />
              <div className="poster-click-hint">
                <Icon.play style={{ width: 14, height: 14 }} /> Click to expand brochure
              </div>
            </div>

            <div className="poster-spotlight-content">
              <span className="eyebrow" style={{ marginBottom: 12 }}>
                Official Regional Announcement
              </span>
              <h2>{upcomingProjectsData.heroBannerSlogan}</h2>
              <h4 style={{ color: '#FFE6A3', fontWeight: 700, marginBottom: 16 }}>
                {upcomingProjectsData.heroBannerSub}
              </h4>
              <p style={{ lineHeight: 1.8, marginBottom: 24, color: 'var(--text-muted)' }}>
                The strategic development of Reliance Bio Energy (500 Acres), Vijay Green Energies (500 Acres), Anantha Group (300 Acres), Premier Explosives (300 Acres), Anadrone (250 Acres), INSINE Park (225 Acres), Aditya Group (200 Acres), and RR Group (40 Acres) marks a historic inflection point for the Udayagiri & Duttalur corridor.
              </p>

              <div className="poster-key-takeaways">
                <div className="takeaway-item">
                  <span className="takeaway-check"><Icon.check style={{ width: 14, height: 14 }} /></span>
                  <div>
                    <strong>Proximity Advantage:</strong>
                    <span>Sri Lakshmi Kubera Farmlands is ideally situated in the core growth triangle.</span>
                  </div>
                </div>
                <div className="takeaway-item">
                  <span className="takeaway-check"><Icon.check style={{ width: 14, height: 14 }} /></span>
                  <div>
                    <strong>Dual ROI Driver:</strong>
                    <span>White Sandalwood timber yields + Exponential industrial land price appreciation.</span>
                  </div>
                </div>
                <div className="takeaway-item">
                  <span className="takeaway-check"><Icon.check style={{ width: 14, height: 14 }} /></span>
                  <div>
                    <strong>Clear 100% Registration:</strong>
                    <span>Legally verified individual plot ownership with zero development delays.</span>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: 32 }}>
                <button className="btn btn-primary" onClick={onBookSlot}>
                  <Icon.pin style={{ width: 16, height: 16 }} />
                  Book Free Farmland Site Visit &rarr;
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Mid-CTA Banner ── */}
      <section className="section section-mid-cta">
        <div className="container">
          <Reveal className="mid-cta-banner">
            <div className="mid-cta-bg-glow" aria-hidden="true" />
            <div className="mid-cta-header" style={{ marginBottom: 0 }}>
              <span className="mid-cta-eyebrow">
                <span className="mid-cta-dot" />
                Strategic Investment Opportunity
              </span>

              <h2 className="mid-cta-title">
                Invest in the High-Growth Industrial Corridor<br />Secure Your Sandalwood Farmland Plot
              </h2>

              <p className="mid-cta-text">
                {quotation.text}
              </p>

              <div className="mid-cta-actions" style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
                <button className="btn btn-primary btn-cta-main" onClick={onBookSlot}>
                  <Icon.pin style={{ width: 18, height: 18 }} />
                  Schedule Free Farmland Visit
                </button>
                <button
                  className="btn btn-quote-action"
                  style={{ padding: '15px 30px', fontSize: '0.95rem' }}
                  onClick={onBookSlot}
                >
                  Request Investment Details &rarr;
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Lightbox modal for brochure poster */}
      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-card" style={{ maxWidth: 800, padding: 16 }} onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedImage(null)} aria-label="Close">
              &times;
            </button>
            <img src={selectedImage} alt="Enlarged Brochure" style={{ width: '100%', height: 'auto', borderRadius: 12 }} />
          </div>
        </div>
      )}
    </div>
  )
}
