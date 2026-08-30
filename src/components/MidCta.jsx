import { cta, quotation } from '../data/content.js'
import Reveal from './Reveal.jsx'
import { Icon } from './Icons.jsx'

export default function MidCta({ onBookSlot }) {
  return (
    <section className="section section-mid-cta">
      <div className="container">
        <Reveal className="mid-cta-banner">
          <div className="mid-cta-bg-glow" aria-hidden="true" />

          {/* ── Header Area ── */}
          <div className="mid-cta-header">
            <span className="mid-cta-eyebrow">
              <span className="mid-cta-dot" />
              Limited Plot Availability
            </span>

            <h2 className="mid-cta-title">
              Secure Your Future with a<br />Smart Farmland Investment
            </h2>

            <p className="mid-cta-text">
              {cta.text}
            </p>

            <div className="mid-cta-actions">
              <button className="btn btn-primary btn-cta-main" onClick={onBookSlot}>
                <Icon.pin style={{ width: 18, height: 18 }} />
                Book Free Site Visit
              </button>
            </div>
          </div>

          {/* ── Quotation Sub-Card ── */}
          <div className="mid-cta-quote-card">
            <div className="quote-card-info">
              <div className="quote-card-icon">
                <Icon.chart style={{ width: 22, height: 22 }} />
              </div>
              <div>
                <h4>{quotation.title}</h4>
                <p>{quotation.text}</p>
              </div>
            </div>

            <button
              className="btn btn-quote-action"
              onClick={onBookSlot}
            >
              Request Quotation &rarr;
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
