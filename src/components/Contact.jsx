import { useState } from 'react'
import { business } from '../data/content.js'
import Reveal from './Reveal.jsx'
import { Icon } from './Icons.jsx'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    const text = `Hello SLK Farms, I'd like to enquire about sandalwood farmland.%0A%0AName: ${encodeURIComponent(
      form.name
    )}%0APhone: ${encodeURIComponent(form.phone)}%0AMessage: ${encodeURIComponent(form.message)}`
    window.open(`https://wa.me/${business.whatsappNumber}?text=${text}`, '_blank', 'noopener')
  }

  return (
    <section id="contact" className="section section-contact section-alt">
      <div className="container contact-grid">
        <Reveal>
          <span className="eyebrow">Contact Us</span>
          <h2 style={{ fontSize: 'clamp(1.7rem, 3vw, 2.2rem)' }}>Let&rsquo;s Plan Your Sandalwood Investment</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: 30 }}>
            Reach out for a free site visit, plot availability and legal documentation details.
          </p>

          <div className="contact-info">
            <div className="info-row">
              <span className="info-icon"><Icon.pin style={{ width: 20, height: 20 }} /></span>
              <div><strong>Farm Office</strong><span>{business.address}</span></div>
            </div>
            <div className="info-row">
              <span className="info-icon"><Icon.mail style={{ width: 20, height: 20 }} /></span>
              <div><strong>Email</strong><br /><a href={`mailto:${business.email}`}>{business.email}</a></div>
            </div>
            <div className="info-row">
              <span className="info-icon"><Icon.phone style={{ width: 20, height: 20 }} /></span>
              <div><strong>Call / WhatsApp</strong><br /><a href={`tel:${business.phoneDisplay.replace(/\s/g, '')}`}>{business.phoneDisplay}</a></div>
            </div>
            <div className="info-row">
              <span className="info-icon"><Icon.globe style={{ width: 20, height: 20 }} /></span>
              <div>
                <strong>Follow Us</strong>
                <div style={{ display: 'flex', gap: 10, marginTop: 6, flexWrap: 'wrap' }}>
                  <a href={business.instagram} target="_blank" rel="noopener noreferrer" className="contact-social-pill">
                    <Icon.instagram style={{ width: 14, height: 14 }} /> Instagram
                  </a>
                  <a href={business.facebook} target="_blank" rel="noopener noreferrer" className="contact-social-pill">
                    <Icon.facebook style={{ width: 14, height: 14 }} /> Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <form className="contact-form" onSubmit={submit}>
            <div className="field-row">
              <div className="field">
                <label htmlFor="c-name">Full Name</label>
                <input id="c-name" required value={form.name} onChange={update('name')} placeholder="Your name" />
              </div>
              <div className="field">
                <label htmlFor="c-phone">Phone Number</label>
                <input id="c-phone" required value={form.phone} onChange={update('phone')} placeholder="+91 90000 00000" />
              </div>
            </div>
            <div className="field">
              <label htmlFor="c-msg">Message</label>
              <textarea id="c-msg" rows={4} required value={form.message} onChange={update('message')} placeholder="Tell us what you're looking for..." />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              Send via WhatsApp
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
