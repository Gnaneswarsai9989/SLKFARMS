# SLK Farms — Website

A premium, animated one-page React (Vite) website for SLK Farms (sandalwood
farmland investments), built in a classic forest-green & sandalwood-gold
palette with a light/dark mode toggle, scroll animations, an animated tabs
section, a WhatsApp floating button, and a "Book a Slot" form that redirects
straight into a pre-filled WhatsApp chat.

## 1. Run it locally

You need [Node.js](https://nodejs.org) 18+ installed.

```bash
cd slkfarms
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

To build the production version:

```bash
npm run build
npm run preview   # preview the production build locally
```

The build output goes to `dist/` — upload that folder's contents to any
static host (Netlify, Vercel, Hostinger, GoDaddy, etc.).

## 2. Customize your content in one place

Almost all text — company name, phone number, WhatsApp number, hero copy,
services, testimonials, footer — lives in:

```
src/data/content.js
```

Edit that file and the whole site updates. Key things to change first:

- `business.whatsappNumber` — your WhatsApp number in international format
  with no `+` or spaces, e.g. `"919876543210"`. This powers the floating
  WhatsApp button, the "Book a Slot" form and the contact form.
- `business.phoneDisplay`, `business.email`, `business.address`.

## 3. Add your own hero video

Drop an MP4 file at:

```
public/videos/farm-tour.mp4
```

It will autoplay (muted, looped) inside the hero video frame on the right of
the homepage. If no file is present, a tasteful fallback panel is shown
instead, so the site never breaks.

## 4. Add real photos (optional)

The design currently uses CSS gradients + an SVG "growth ring" motif instead
of stock photos, so the site works perfectly with zero images. If you'd like
to swap in real farm photography:

- Drop images into `public/images/`
- Reference them as `/images/your-file.jpg` inside the relevant component
  (e.g. `src/components/About.jsx`, `src/components/Hero.jsx`).

## 5. How "Book a Slot" works

Clicking any "Book a Slot" button (navbar, hero, mid-page CTA) opens a modal
asking for **Name**, **Phone**, and **Message**. On submit, it opens WhatsApp
(`wa.me/<your number>`) in a new tab with the details pre-filled into the
message box, ready for the visitor to hit send. The contact form at the
bottom of the page works the same way.

## 6. Dark / light mode

The sun/moon icon in the navbar toggles the theme. The choice is remembered
in the visitor's browser (`localStorage`) and defaults to their OS
preference on first visit.

## 7. Project structure

```
slkfarms/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   ├── videos/farm-tour.mp4   ← add your hero video here
│   └── images/                ← optional extra photos
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css               ← all design tokens, theme, animations
    ├── data/content.js         ← all editable copy & contact details
    ├── hooks/
    │   ├── useTheme.js
    │   └── useScrollReveal.js
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Services.jsx
        ├── WhyTabs.jsx          ← animated tabs section
        ├── WhySandalwood.jsx
        ├── MidCta.jsx           ← Book a Slot + quotation strip
        ├── Testimonials.jsx
        ├── Contact.jsx
        ├── Footer.jsx
        ├── WhatsAppButton.jsx   ← floating WhatsApp button
        ├── BookSlotModal.jsx    ← Name/Phone/Message → WhatsApp
        ├── Icons.jsx
        └── Reveal.jsx           ← scroll-reveal animation wrapper

```

Enjoy — and good luck with the launch! 🌱
