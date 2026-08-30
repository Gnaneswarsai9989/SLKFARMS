import Reveal from './Reveal.jsx'

export default function PageHeader({ eyebrow, title, subtitle, bgImage = '/images/plantation.jpg' }) {
  return (
    <section className="page-header">
      {/* ── Background Cinematic Photography with Dark Forest Overlay ── */}
      <div className="page-header-bg-wrap">
        <img src={bgImage} alt="" className="page-header-bg-img" aria-hidden="true" />
        <div className="page-header-overlay" />
      </div>

      <div className="container page-header-content">
        {eyebrow && (
          <Reveal as="div" className="page-header-eyebrow-wrap">
            <span className="page-header-eyebrow">
              <span className="page-header-dot" />
              {eyebrow}
            </span>
          </Reveal>
        )}

        <Reveal as="h1" className="page-header-title" delay={1}>
          {title}
        </Reveal>

        {subtitle && (
          <Reveal as="p" className="page-header-subtitle" delay={2}>
            {subtitle}
          </Reveal>
        )}
      </div>
    </section>
  )
}
