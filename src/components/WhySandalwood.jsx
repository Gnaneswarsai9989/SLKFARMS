import { whySandalwood } from '../data/content.js'
import Reveal from './Reveal.jsx'
import { Icon } from './Icons.jsx'

export default function WhySandalwood() {
  return (
    <section id="advantages" className="section section-advantages section-alt">
      <div className="container">
        <Reveal className="section-head center">
          <span className="eyebrow">{whySandalwood.eyebrow}</span>
          <h2>{whySandalwood.title}</h2>
          <p>{whySandalwood.text}</p>
        </Reveal>

        <div className="demand-grid">
          {whySandalwood.cards.map((c, i) => {
            const IconCmp = Icon[c.icon] || Icon.leaf
            return (
              <Reveal as="div" className="demand-card" delay={Math.min(i + 1, 5)} key={c.title}>
                <IconCmp className="demand-icon" />
                <h4>{c.title}</h4>
                <p>{c.text}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
