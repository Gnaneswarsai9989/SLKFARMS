import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import useTheme from './hooks/useTheme.js'
import ScrollToTop from './components/ScrollToTop.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import BookSlotModal from './components/BookSlotModal.jsx'

// Pages
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import TestimonialsPage from './pages/TestimonialsPage.jsx'
import ContactPage from './pages/ContactPage.jsx'

export default function App() {
  const { theme, toggleTheme } = useTheme()
  const [modalOpen, setModalOpen] = useState(false)

  const handleBookSlot = () => setModalOpen(true)

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar theme={theme} toggleTheme={toggleTheme} onBookSlot={handleBookSlot} />

      <Routes>
        <Route path="/" element={<HomePage onBookSlot={handleBookSlot} />} />
        <Route path="/about" element={<AboutPage onBookSlot={handleBookSlot} />} />
        <Route path="/services" element={<ServicesPage onBookSlot={handleBookSlot} />} />
        <Route path="/testimonials" element={<TestimonialsPage onBookSlot={handleBookSlot} />} />
        <Route path="/contact" element={<ContactPage onBookSlot={handleBookSlot} />} />
        {/* Fallback route */}
        <Route path="*" element={<HomePage onBookSlot={handleBookSlot} />} />
      </Routes>

      <Footer />
      <WhatsAppButton />
      <BookSlotModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </BrowserRouter>
  )
}
