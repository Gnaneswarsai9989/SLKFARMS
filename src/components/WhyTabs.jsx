import { useState } from 'react'
import { standoutTabs } from '../data/content.js'
import Reveal from './Reveal.jsx'
import { Icon } from './Icons.jsx'

export default function WhyTabs() {
  const [active, setActive] = useState(0)
  const tab = standoutTabs.tabs[active]

  return (
    <section id="standout" className="section section-standout">
      <div className="container">
        <Reveal className="section-head center">
          <span className="eyebrow">{standoutTabs.eyebrow}</span>
          <h2>{standoutTabs.title}</h2>
          <p>{standoutTabs.text}</p>
        </Reveal>

        <Reveal delay={1} className="tabs-wrap">
          <div className="tab-list" role="tablist" aria-label="Investment advantages">
            {standoutTabs.tabs.map((t, i) => (
              <button
                key={t.label}
                role="tab"
                aria-selected={active === i}
                className={`tab-btn ${active === i ? 'active' : ''}`}
                onClick={() => setActive(i)}
              >
                <span className="tab-index">{String(i + 1).padStart(2, '0')}</span>
                {t.label}
              </button>
            ))}
          </div>

          <div className="tab-panel-area">
            <div className="tab-panel" key={active} role="tabpanel">
              <h3>{tab.heading}</h3>
              <p>{tab.intro}</p>
              <ul className="tab-points">
                {tab.points.map((pt) => (
                  <li key={pt}>
                    <span className="tick"><Icon.check style={{ width: 12, height: 12 }} /></span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
