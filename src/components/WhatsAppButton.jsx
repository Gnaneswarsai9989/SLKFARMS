import { business } from '../data/content.js'
import { Icon } from './Icons.jsx'

export default function WhatsAppButton() {
  const text = encodeURIComponent("Hello SLK Farms, I'm interested in your sandalwood farmland plots.")
  return (
    <a
      className="whatsapp-fab"
      href={`https://wa.me/${business.whatsappNumber}?text=${text}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <span className="whatsapp-tooltip">Chat on WhatsApp</span>
      <Icon.whatsapp />
      <span className="whatsapp-online-dot" aria-hidden="true" />
    </a>
  )
}

