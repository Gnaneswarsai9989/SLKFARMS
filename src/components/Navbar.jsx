import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { nav } from '../data/content.js'
import { Icon } from './Icons.jsx'

export default function Navbar({ theme, toggleTheme, onBookSlot }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12)
      const h = document.documentElement
      const scrollTop = h.scrollTop || document.body.scrollTop
      const height = h.scrollHeight - h.clientHeight
      setProgress(height > 0 ? (scrollTop / height) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile drawer on route change
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const navbarClasses = [
    'navbar',
    scrolled ? 'is-scrolled' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <>
      <div className="scroll-progress" style={{ width: `${progress}%` }} />

      <header
        className={navbarClasses}
        style={{ boxShadow: scrolled ? '0 8px 30px -20px rgba(0,0,0,0.5)' : 'none' }}
      >
        <div className="container">
          <Link to="/" className="brand" aria-label="SLK - Sree Lakshmi Kubera Properties">
            <img src="/images/logo.png" alt="SLK - Sree Lakshmi Kubera Properties" className="brand-logo" />
          </Link>

          <nav className={`nav-links ${open ? 'open' : ''}`}>
            {nav.map((n) => (
              <NavLink
                key={n.id}
                to={n.path}
                className={({ isActive }) => (isActive ? 'active' : '')}
                end={n.path === '/'}
              >
                {n.label}
              </NavLink>
            ))}
            <button
              className="btn btn-primary mobile-book"
              onClick={() => {
                setOpen(false)
                onBookSlot()
              }}
            >
              Book Free Site Visit
            </button>
          </nav>

          <div className="nav-actions">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode">
              {theme === 'dark' ? <Icon.sun /> : <Icon.moon />}
            </button>
            <button className="btn btn-primary btn-nav-cta desktop-only" onClick={onBookSlot}>
              Book Free Site Visit
            </button>
            <button
              className={`nav-toggle ${open ? 'open' : ''}`}
              onClick={() => setOpen((o) => !o)}
              aria-label="Menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>
    </>
  )
}
