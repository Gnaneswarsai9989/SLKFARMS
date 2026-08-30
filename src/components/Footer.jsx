import { Link } from 'react-router-dom'
import { business, footer } from '../data/content.js'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="brand" style={{ marginBottom: 16 }}>
              <Link to="/" aria-label="SLK - Sree Lakshmi Kubera Properties">
                <img src="/images/logo.png" alt="SLK - Sree Lakshmi Kubera Properties" className="brand-logo" style={{ height: 58 }} />
              </Link>
            </div>
            <p>{footer.about}</p>
            <div className="footer-social">
              {['f', 'x', 'ig', 'yt'].map((s) => (
                <a href="#" key={s} aria-label={s}>{s}</a>
              ))}
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
