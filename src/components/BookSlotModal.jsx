import { useEffect, useState } from 'react'
import { business } from '../data/content.js'

export default function BookSlotModal({ open, onClose }) {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  useEffect(() => {
    if (!open) return
    setSent(false)
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    const text =
      `Hi SLK Farms, I'd like to book a free site visit.%0A%0A` +
      `Name: ${encodeURIComponent(form.name)}%0A` +
      `Phone: ${encodeURIComponent(form.phone)}%0A` +
      `Message: ${encodeURIComponent(form.message || 'N/A')}`

    setSent(true)
    window.open(`https://wa.me/${business.whatsappNumber}?text=${text}`, '_blank', 'noopener')
    setTimeout(() => {
      onClose()
      setForm({ name: '', phone: '', message: '' })
    }, 900)
  }

  return (
    <div className="modal-overlay" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-card" role="dialog" aria-modal="true" aria-labelledby="book-slot-title">
        <button className="modal-close" onClick={onClose} aria-label="Close">&times;</button>
        <h3 id="book-slot-title">Book a Free Site Visit</h3>
        <p>Share a few details and we&rsquo;ll confirm your visit over WhatsApp.</p>

        <form onSubmit={submit}>
          <div className="field">
            <label htmlFor="b-name">Full Name</label>
            <input id="b-name" required value={form.name} onChange={update('name')} placeholder="e.g. Ramesh Kumar" />
          </div>
          <div className="field">
            <label htmlFor="b-phone">Phone Number</label>
            <input id="b-phone" required type="tel" value={form.phone} onChange={update('phone')} placeholder="e.g. +91 90000 00000" />
          </div>
          <div className="field">
            <label htmlFor="b-msg">Message</label>
            <textarea id="b-msg" rows={3} value={form.message} onChange={update('message')} placeholder="Preferred date, number of plots, questions..." />
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
            {sent ? 'Opening WhatsApp…' : 'Continue on WhatsApp'}
          </button>
        </form>
      </div>
    </div>
  )
}
