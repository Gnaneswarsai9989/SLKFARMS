import { Link } from 'react-router-dom'
import { about } from '../data/content.js'
import Reveal from './Reveal.jsx'
import { Icon } from './Icons.jsx'
import AboutSlider from './AboutSlider.jsx'

export default function About() {
  return (
    <section id="about" className="section section-about">
      <div className="container about-grid">
        <Reveal>
          <AboutSlider />
        </Reveal>

        <div>
          <Reveal><span className="eyebrow">{about.eyebrow}</span></Reveal>
          <Reveal delay={1}><h2 style={{ fontSize: 'clamp(1.7rem, 3vw, 2.3rem)', maxWidth: '20ch' }}>{about.title}</h2></Reveal>
          <Reveal delay={2}>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: 14 }}>{about.lead}</p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: 14 }}>{about.companyStory}</p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>{about.commitment}</p>
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
            <p className="closing-line">{about.closing}</p>
            <div style={{ marginTop: 24 }}>
              <Link to="/about" className="btn btn-primary">
                More About Us &rarr;
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
