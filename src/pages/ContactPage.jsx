import { useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import { Icon } from '../components/Icons.jsx'
import { business } from '../data/content.js'

export default function ContactPage({ onBookSlot }) {
  const [form, setForm] = useState({ name: '', phone: '', plots: '1 Plot (0.22 Cent)', message: '' })
  const [sent, setSent] = useState(false)

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    const text =
      `Hello SLK Farms, I would like to inquire about sandalwood farmland plots.%0A%0A` +
      `Name: ${encodeURIComponent(form.name)}%0A` +
      `Phone: ${encodeURIComponent(form.phone)}%0A` +
      `Interested In: ${encodeURIComponent(form.plots)}%0A` +
      `Message: ${encodeURIComponent(form.message || 'N/A')}`

    setSent(true)
    window.open(`https://wa.me/${business.whatsappNumber}?text=${text}`, '_blank', 'noopener')
    setTimeout(() => setSent(false), 2000)
  }

  return (
    <div className="inner-page">
      <PageHeader
        eyebrow="Get In Touch"
        title={
          <>
            We’re Here to Help You Plan<br />Your Farmland Investment
          </>
        }
        subtitle="Contact our team for plot availability, customized quotations, legal documentation reviews, or to schedule a free guided site visit."
        bgImage="/images/harvest.jpg"
      />

      <section className="section">
        <div className="container contact-grid">
          <Reveal>
            <span className="eyebrow">Direct Contact Channels</span>
            <h2 style={{ fontSize: 'clamp(1.7rem, 3vw, 2.2rem)' }}>Speak with an Advisor</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: 30, lineHeight: 1.7 }}>
              Our investment specialists are available 7 days a week to answer your questions and guide you through ownership.
            </p>

            <div className="contact-info">
              <div className="info-row">
                <span className="info-icon"><Icon.pin style={{ width: 20, height: 20 }} /></span>
                <div>
                  <strong>Farm & Administrative Office</strong>
                  <span>{business.address}</span>
                </div>
              </div>

              <div className="info-row">
                <span className="info-icon"><Icon.phone style={{ width: 20, height: 20 }} /></span>
                <div>
                  <strong>Phone & WhatsApp Support</strong><br />
                  <a href={`tel:${business.phoneDisplay.replace(/\s/g, '')}`}>{business.phoneDisplay}</a>
                  <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: 2 }}>
                    Mon – Sun, 9:00 AM – 7:00 PM IST
                  </span>
                </div>
              </div>

              <div className="info-row">
                <span className="info-icon"><Icon.mail style={{ width: 20, height: 20 }} /></span>
                <div>
                  <strong>Email Inquiries</strong><br />
                  <a href={`mailto:${business.email}`}>{business.email}</a>
                </div>
              </div>
            </div>

            <div className="visit-card" style={{ marginTop: 32 }}>
              <h4>Planning a Farmland Visit?</h4>
              <p>We provide guided transportation and plantation tours with our agricultural experts from Nellore.</p>
              <button className="btn btn-primary btn-sm" onClick={onBookSlot} style={{ marginTop: 12 }}>
                Book Free Site Visit
              </button>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <form className="contact-form" onSubmit={submit}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: 20, color: 'var(--brand-strong)' }}>
                Send an Instant Message
              </h3>

              <div className="field-row">
                <div className="field">
                  <label htmlFor="cp-name">Full Name *</label>
                  <input id="cp-name" required value={form.name} onChange={update('name')} placeholder="e.g. Ramesh Kumar" />
                </div>
                <div className="field">
                  <label htmlFor="cp-phone">Phone / WhatsApp Number *</label>
                  <input id="cp-phone" required type="tel" value={form.phone} onChange={update('phone')} placeholder="+91 90000 00000" />
                </div>
              </div>

              <div className="field">
                <label htmlFor="cp-plots">Plots of Interest</label>
                <select id="cp-plots" value={form.plots} onChange={update('plots')}>
                  <option value="1 Plot (0.22 Cent)">1 Plot (0.22 Cent · 96 Trees)</option>
                  <option value="2 Plots (0.44 Cent)">2 Plots (0.44 Cent · 192 Trees)</option>
                  <option value="3+ Plots (Custom Acreage)">3+ Plots (Custom Acreage)</option>
                  <option value="General Farmland Enquiry">General Farmland Enquiry</option>
                </select>
              </div>

              <div className="field">
                <label htmlFor="cp-msg">Your Message / Questions</label>
                <textarea id="cp-msg" rows={4} value={form.message} onChange={update('message')} placeholder="Tell us your preferred date for a site visit or any questions..." />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                {sent ? 'Opening WhatsApp…' : 'Submit via WhatsApp'}
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
