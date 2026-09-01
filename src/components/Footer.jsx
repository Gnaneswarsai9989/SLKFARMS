import { Link } from 'react-router-dom'
import { business, footer } from '../data/content.js'
import { Icon } from './Icons.jsx'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="brand" style={{ marginBottom: 16 }}>
              <Link to="/" aria-label="SLK - Sree Lakshmi Kubera Properties">
                <img src="/images/logo.png" alt="SLK - Sree Lakshmi Kubera Properties" className="brand-logo" style={{ height: 'clamp(76px, 7vw, 96px)', maxWidth: 280 }} />
              </Link>
            </div>
            <p>{footer.about}</p>
            <div className="footer-social">
              <a
                href={business.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram @slkfarms2026"
                className="social-btn social-instagram"
              >
                <Icon.instagram style={{ width: 18, height: 18 }} />
              </a>
              <a
                href={business.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook @slkfarms2026"
                className="social-btn social-facebook"
              >
                <Icon.facebook style={{ width: 18, height: 18 }} />
              </a>
              <a
                href={`https://wa.me/${business.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Support"
                className="social-btn social-whatsapp"
              >
                <Icon.whatsapp style={{ width: 19, height: 19 }} />
              </a>
              <a
                href={`mailto:${business.email}`}
                aria-label="Email Support"
                className="social-btn social-mail"
              >
                <Icon.mail style={{ width: 18, height: 18 }} />
              </a>
            </div>
          </div>

          <div>
            <h4>Services</h4>
            <ul className="footer-links">
              {footer.services.map((s) => (
                <li key={s}>
                  <Link to="/services">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/upcoming-projects">Upcoming Projects</Link></li>
              <li><Link to="/testimonials">Testimonials & FAQs</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>Copyright &copy; {year} {business.name}. All rights reserved.</span>
          <span>{business.address}</span>
        </div>
      </div>
    </footer>
  )
}
