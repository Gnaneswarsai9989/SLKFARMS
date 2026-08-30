const base = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round' }

export const Icon = {
  sprout: (p) => (
    <svg viewBox="0 0 24 24" {...base} {...p}><path d="M12 22V13" /><path d="M12 13C12 8 8 6 4 6c0 5 3 8 8 8Z" /><path d="M12 13c0-6 4-8 8-8 0 5-3 8-8 8Z" /></svg>
  ),
  scroll: (p) => (
    <svg viewBox="0 0 24 24" {...base} {...p}><path d="M6 3h11a2 2 0 0 1 2 2v13a3 3 0 0 1-3 3H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" /><path d="M9 8h6M9 12h6M9 16h4" /></svg>
  ),
  drop: (p) => (
    <svg viewBox="0 0 24 24" {...base} {...p}><path d="M12 3s7 7.2 7 12a7 7 0 1 1-14 0c0-4.8 7-12 7-12Z" /></svg>
  ),
  house: (p) => (
    <svg viewBox="0 0 24 24" {...base} {...p}><path d="M4 11.5 12 4l8 7.5" /><path d="M6 10v9a1 1 0 0 0 1 1h3v-6h4v6h3a1 1 0 0 0 1-1v-9" /></svg>
  ),
  chart: (p) => (
    <svg viewBox="0 0 24 24" {...base} {...p}><path d="M4 20V10M12 20V4M20 20v-7" /><path d="M3 20h18" /></svg>
  ),
  shield: (p) => (
    <svg viewBox="0 0 24 24" {...base} {...p}><path d="M12 3 4.5 6v6c0 5 3.4 7.8 7.5 9 4.1-1.2 7.5-4 7.5-9V6L12 3Z" /><path d="m9 12 2 2 4-4" /></svg>
  ),
  globe: (p) => (
    <svg viewBox="0 0 24 24" {...base} {...p}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3Z" /></svg>
  ),
  trend: (p) => (
    <svg viewBox="0 0 24 24" {...base} {...p}><path d="m3 17 6-6 4 4 8-8" /><path d="M15 7h6v6" /></svg>
  ),
  leaf: (p) => (
    <svg viewBox="0 0 24 24" {...base} {...p}><path d="M20 4C10 4 4 10 4 19c9 0 15-6 15-15Z" /><path d="M6 18C10 14 14 10 19 5" /></svg>
  ),
  coin: (p) => (
    <svg viewBox="0 0 24 24" {...base} {...p}><circle cx="12" cy="12" r="9" /><path d="M9 12h6M12 9v6" /></svg>
  ),
  pin: (p) => (
    <svg viewBox="0 0 24 24" {...base} {...p}><path d="M12 21s7-6.6 7-12a7 7 0 1 0-14 0c0 5.4 7 12 7 12Z" /><circle cx="12" cy="9" r="2.5" /></svg>
  ),
  mail: (p) => (
    <svg viewBox="0 0 24 24" {...base} {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>
  ),
  phone: (p) => (
    <svg viewBox="0 0 24 24" {...base} {...p}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2C9.6 21 3 14.4 3 6a2 2 0 0 1 2-2Z" /></svg>
  ),
  sun: (p) => (
    <svg viewBox="0 0 24 24" {...base} {...p}><circle cx="12" cy="12" r="4.2" /><path d="M12 2v2.4M12 19.6V22M4.9 4.9l1.7 1.7M17.4 17.4l1.7 1.7M2 12h2.4M19.6 12H22M4.9 19.1l1.7-1.7M17.4 6.6l1.7-1.7" /></svg>
  ),
  moon: (p) => (
    <svg viewBox="0 0 24 24" {...base} {...p}><path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z" /></svg>
  ),
  play: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M8 5v14l11-7Z" /></svg>
  ),
  check: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" {...p}><path d="m5 13 4 4L19 7" /></svg>
  ),
  whatsapp: (p) => (
    <svg viewBox="0 0 32 32" fill="currentColor" {...p}><path d="M16.02 3C9.4 3 4 8.38 4 15c0 2.4.7 4.63 1.9 6.5L4 29l7.7-1.85A11.9 11.9 0 0 0 16.02 27C22.65 27 28 21.62 28 15S22.65 3 16.02 3Zm0 21.7c-1.98 0-3.83-.55-5.42-1.5l-.39-.23-4.57 1.1 1.12-4.46-.25-.4a9.6 9.6 0 0 1-1.5-5.2c0-5.34 4.36-9.68 9.71-9.68 5.34 0 9.68 4.34 9.68 9.68 0 5.35-4.34 9.69-9.68 9.69Zm5.32-7.27c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.65.15-.19.29-.75.95-.92 1.14-.17.19-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.44-.87-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.65-1.57-.9-2.15-.24-.57-.48-.5-.65-.5-.17-.01-.36-.01-.55-.01-.19 0-.51.07-.78.36-.27.29-1.02 1-1.02 2.44s1.05 2.83 1.2 3.03c.15.19 2.06 3.15 5 4.41.7.3 1.24.48 1.67.62.7.22 1.34.19 1.84.12.56-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.34Z" /></svg>
  ),
}
