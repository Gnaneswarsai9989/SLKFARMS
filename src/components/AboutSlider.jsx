import { useState, useEffect, useRef } from 'react'

const slides = [
  {
    image: '/images/plantation.jpg',
    title: '56-Acre Farmland Project',
    tag: 'Nellore, Andhra Pradesh',
    badge: 'Organic Cultivation',
  },
  {
    image: '/images/farmhouse.jpg',
    title: 'Luxury Farmhouse & Resort',
    tag: 'Owner Retreat & Weekend Stays',
    badge: 'On-Site Amenities',
  },
  {
    image: '/images/irrigation.jpg',
    title: 'Precision Drip Irrigation',
    tag: 'Automated 24/7 Water Management',
    badge: 'Sustainable Tech',
  },
  {
    image: '/images/harvest.jpg',
    title: '15-Year Sandalwood Growth',
    tag: 'High-Value Essential Heartwood',
    badge: 'Green Gold',
  },
]

export default function AboutSlider() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchDelta, setTouchDelta] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const timerRef = useRef(null)

  // Automatic slide transition every 3.4 seconds
  useEffect(() => {
    if (isPaused || isDragging) return
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 3400)
    return () => clearInterval(timerRef.current)
  }, [isPaused, isDragging, current])

  const next = () => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }

  // Touch Swipe Handlers (Mobile)
  const handleTouchStart = (e) => {
    setIsDragging(true)
    setTouchStart(e.touches[0].clientX)
    setTouchDelta(0)
  }

  const handleTouchMove = (e) => {
    if (!isDragging) return
    const delta = e.touches[0].clientX - touchStart
    setTouchDelta(delta)
  }

  const handleTouchEnd = () => {
    if (touchDelta < -40) {
      next()
    } else if (touchDelta > 40) {
      prev()
    }
    setIsDragging(false)
    setTouchDelta(0)
  }

  // Mouse Drag Swipe Handlers (Desktop)
  const handleMouseDown = (e) => {
    e.preventDefault()
    setIsDragging(true)
    setTouchStart(e.clientX)
    setTouchDelta(0)
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    const delta = e.clientX - touchStart
    setTouchDelta(delta)
  }

  const handleMouseUp = () => {
    if (!isDragging) return
    if (touchDelta < -40) {
      next()
    } else if (touchDelta > 40) {
      prev()
    }
    setIsDragging(false)
    setTouchDelta(0)
  }

  return (
    <div
      className={`about-slider-wrap${isDragging ? ' is-dragging' : ''}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false)
        if (isDragging) handleMouseUp()
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      role="region"
      aria-label="Farmland Highlights Slider"
    >
      <div
        className="about-slider-track"
        style={{
          transform: isDragging
            ? `translateX(calc(-${current * 100}% + ${touchDelta}px))`
            : `translateX(-${current * 100}%)`,
          transition: isDragging ? 'none' : 'transform 0.65s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        {slides.map((s, index) => (
          <div key={s.title} className="about-slide">
            <img
              src={s.image}
              alt={s.title}
              className="about-slide-img"
              draggable={false}
              loading={index === 0 ? 'eager' : 'lazy'}
            />
            <div className="about-slide-overlay" />

            <div className="about-slide-content">
              <span className="about-slide-badge">{s.badge}</span>
              <h4 className="about-slide-title">{s.title}</h4>
              <p className="about-slide-tag">{s.tag}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── Slide Arrows ── */}
      <button
        className="slider-arrow prev"
        onClick={(e) => {
          e.stopPropagation()
          prev()
        }}
        aria-label="Previous slide"
      >
        &#8249;
      </button>
      <button
        className="slider-arrow next"
        onClick={(e) => {
          e.stopPropagation()
          next()
        }}
        aria-label="Next slide"
      >
        &#8250;
      </button>

      {/* ── Slider Progress Dots ── */}
      <div className="slider-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`slider-dot${i === current ? ' is-active' : ''}`}
            onClick={(e) => {
              e.stopPropagation()
              setCurrent(i)
            }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* ── Counter Pill ── */}
      <div className="slider-counter" aria-hidden="true">
        0{current + 1} / 0{slides.length}
      </div>
    </div>
  )
}
