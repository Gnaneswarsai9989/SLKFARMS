import { useEffect, useRef, useState } from 'react'
import { hero } from '../data/content.js'
import Reveal from './Reveal.jsx'
import { Icon } from './Icons.jsx'

function CountUp({ value, suffix }) {
  const [n, setN] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        const duration = 1200
        const start = performance.now()
        const tick = (now) => {
          const p = Math.min(1, (now - start) / duration)
          setN(Math.round(value * (1 - Math.pow(1 - p, 3))))
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
        obs.disconnect()
      },
      { threshold: 0.5 }
    )
    obs.observe(node)
    return () => obs.disconnect()
  }, [value])

  return (
    <strong ref={ref}>
      {n}
      {suffix}
    </strong>
  )
}

export default function Hero({ onBookSlot }) {
  const videoRef = useRef(null)

  useEffect(() => {
    const vid = videoRef.current
    if (!vid) return
    // Programmatically trigger play (bypasses some browser autoplay restrictions)
    vid.muted = true
    vid.play().catch(() => {
      // Autoplay was still blocked — video will stay paused, gradient fallback shows
    })
  }, [])

  return (
    <>
      <section id="home" className="hero hero-fullscreen">
        {/* ── Fullscreen Video Background ── */}
        <div className="hero-video-wrap">
          <video
            ref={videoRef}
            className="hero-bg-video"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src="/videos/farm-tour.mp4" type="video/mp4" />
          </video>
          {/* Multi-layer gradient overlay for text readability */}
          <div className="hero-video-overlay" />
        </div>


        {/* ── Centered Hero Content ── */}
        <div className="hero-fs-content">
          <Reveal as="span" className="hero-eyebrow">Sri Lakshmi Kubera Farms</Reveal>

          <Reveal as="h1" className="hero-fs-title" delay={1}>
            Premium{' '}
            <span className="hero-highlight-pro">
              White Sandalwood
              <svg className="hero-underline-stroke" viewBox="0 0 260 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path d="M3 8.5C65 2.5 195 2.5 257 8.5" stroke="#FFE6A3" strokeWidth="2.8" strokeLinecap="round" />
              </svg>
            </span>{' '}
            Farm Lands<br />in Nellore
          </Reveal>

          <Reveal as="p" className="hero-fs-subtitle" delay={2}>
            {hero.subtitle}
          </Reveal>

          {/* ── Primary CTA ── */}
          <Reveal className="hero-fs-cta-row" delay={3}>
            <button
              id="hero-book-slot-btn"
              className="btn btn-primary btn-hero-book"
              onClick={onBookSlot}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Book Free Site Visit
            </button>

            <a
              href="#about"
              className="btn btn-ghost-light"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Explore Farm Plots
            </a>
          </Reveal>

          {/* ── Stats strip ── */}
          <Reveal className="hero-stats hero-fs-stats" delay={4}>
            {hero.stats.map((s) => (
              <div className="stat" key={s.label}>
                <CountUp value={s.value} suffix={s.suffix} />
                <span>{s.label}</span>
              </div>
            ))}
          </Reveal>
        </div>

        {/* ── Scroll down indicator ── */}
        <a
          href="#pillars"
          className="hero-scroll-cue"
          aria-label="Scroll to explore"
          onClick={(e) => {
            e.preventDefault()
            document.getElementById('pillars-section')?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          <span className="scroll-arrow" />
        </a>
      </section>

      {/* ── Bottom pillars bar (located directly below full-screen hero) ── */}
      <div id="pillars-section" className="hero-pillars-bar">
        {hero.pillars.map((p, i) => (
          <Reveal
            key={p.title}
            delay={Math.min(i + 1, 5)}
            className="pillar-item"
          >
            <strong>{p.title}</strong>
            <span>{p.text}</span>
          </Reveal>
        ))}
      </div>
    </>
  )
}
