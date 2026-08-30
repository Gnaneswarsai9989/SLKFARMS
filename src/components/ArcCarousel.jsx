import { useState, useEffect, useRef } from 'react'
import Reveal from './Reveal.jsx'
import { Icon } from './Icons.jsx'

const galleryItems = [
  {
    id: 1,
    title: '56-Acre Sandalwood Project',
    tag: 'Krishnapuram, Nellore',
    badge: 'Organic Layout',
    image: '/images/plantation.jpg',
  },
  {
    id: 2,
    title: 'Luxury On-Site Farmhouse',
    tag: 'Owner Retreat & Weekend Stay',
    badge: 'Resort Amenities',
    image: '/images/farmhouse.jpg',
  },
  {
    id: 3,
    title: 'Precision Drip Irrigation',
    tag: 'Automated Root Nourishment',
    badge: 'Smart Agri-Tech',
    image: '/images/irrigation.jpg',
  },
  {
    id: 4,
    title: '15-Year Harvest Cycle',
    tag: 'High-Value White Sandalwood',
    badge: 'Green Gold',
    image: '/images/harvest.jpg',
  },
  {
    id: 5,
    title: '24/7 Solar Diamond Security',
    tag: 'CCTV Surveillance & Guard Patrols',
    badge: 'Safe Ownership',
    image: '/images/plantation.jpg',
  },
]

export default function ArcCarousel({ onBookSlot }) {
  const [active, setActive] = useState(2) // start with center item active
  const [dragStart, setDragStart] = useState(0)
  const [dragDelta, setDragDelta] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const total = galleryItems.length
  const timerRef = useRef(null)

  // Continuous auto-swipe every 1.5s
  useEffect(() => {
    if (isDragging) return
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % total)
    }, 1500)
    return () => clearInterval(timerRef.current)
  }, [isDragging, active, total])

  const next = () => setActive((prev) => (prev + 1) % total)
  const prev = () => setActive((prev) => (prev - 1 + total) % total)

  // Touch Drag
  const onTouchStart = (e) => {
    setIsDragging(true)
    setDragStart(e.touches[0].clientX)
    setDragDelta(0)
  }
  const onTouchMove = (e) => {
    if (!isDragging) return
    setDragDelta(e.touches[0].clientX - dragStart)
  }
  const onTouchEnd = () => {
    if (dragDelta < -35) next()
    else if (dragDelta > 35) prev()
    setIsDragging(false)
    setDragDelta(0)
  }

  // Mouse Drag
  const onMouseDown = (e) => {
    setIsDragging(true)
    setDragStart(e.clientX)
    setDragDelta(0)
  }
  const onMouseMove = (e) => {
    if (!isDragging) return
    setDragDelta(e.clientX - dragStart)
  }
  const onMouseUp = () => {
    if (!isDragging) return
    if (dragDelta < -35) next()
    else if (dragDelta > 35) prev()
    setIsDragging(false)
    setDragDelta(0)
  }

  return (
    <section className="section section-arc-gallery">
      <div className="container">
        <Reveal className="section-head center">
          <span className="eyebrow">Farmland Visual Tour</span>
          <h2>Experience Sri Lakshmi Kubera Farmlands</h2>
          <p>A panoramic look into our 56-acre planned sandalwood layout, infrastructure, and on-site facilities in Nellore.</p>
        </Reveal>
      </div>

      <div
        className="arc-stage-container"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
      >
        {/* ── Curved Track Arc Line ── */}
        <div className="arc-line-wrap" aria-hidden="true">
          <svg viewBox="0 0 1200 180" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path
              d="M0 160C320 20 880 20 1200 160"
              stroke="rgba(227, 200, 136, 0.25)"
              strokeWidth="2"
              strokeDasharray="6 6"
            />
          </svg>
        </div>

        {/* ── 3D Arc Cards Carousel ── */}
        <div className="arc-cards-track">
          {galleryItems.map((item, index) => {
            // Calculate circular offset distance: -2, -1, 0, 1, 2
            let diff = index - active
            // Wrap offset for circular carousel
            if (diff > total / 2) diff -= total
            if (diff < -total / 2) diff += total

            const isCenter = diff === 0
            const absDiff = Math.abs(diff)

            // Dynamic 3D curved arc geometry
            const translateX = diff * 240
            const translateY = Math.pow(absDiff, 1.6) * 26
            const rotateZ = diff * 9.5
            const rotateY = diff * -16
            const scale = Math.max(0.72, 1 - absDiff * 0.14)
            const opacity = Math.max(0.30, 1 - absDiff * 0.28)
            const zIndex = 20 - absDiff

            return (
              <div
                key={item.id}
                className={`arc-card${isCenter ? ' is-active' : ''}`}
                style={{
                  transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${scale}) rotateZ(${rotateZ}deg) rotateY(${rotateY}deg)`,
                  opacity: opacity,
                  zIndex: zIndex,
                }}
                onClick={() => setActive(index)}
                role="button"
                tabIndex={0}
                aria-label={`View ${item.title}`}
              >
                <div className="arc-card-inner">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="arc-card-img"
                    draggable={false}
                  />
                  <div className="arc-card-overlay" />

                  <div className="arc-card-content">
                    <span className="arc-card-badge">{item.badge}</span>
                    <h3 className="arc-card-title">{item.title}</h3>
                    <p className="arc-card-tag">{item.tag}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* ── Navigation Arrows ── */}
        <button className="arc-arrow prev" onClick={prev} aria-label="Previous slide">
          &#8249;
        </button>
        <button className="arc-arrow next" onClick={next} aria-label="Next slide">
          &#8250;
        </button>

        {/* ── Navigation Dots ── */}
        <div className="arc-dots">
          {galleryItems.map((_, i) => (
            <button
              key={i}
              className={`arc-dot${i === active ? ' is-active' : ''}`}
              onClick={() => setActive(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
