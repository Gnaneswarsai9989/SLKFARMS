import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Services from '../components/Services.jsx'
import ArcCarousel from '../components/ArcCarousel.jsx'
import WhyTabs from '../components/WhyTabs.jsx'
import WhySandalwood from '../components/WhySandalwood.jsx'
import MidCta from '../components/MidCta.jsx'
import Testimonials from '../components/Testimonials.jsx'
import Contact from '../components/Contact.jsx'

export default function HomePage({ onBookSlot }) {
  return (
    <main>
      <Hero onBookSlot={onBookSlot} />
      <About isHome onBookSlot={onBookSlot} />
      <Services isHome onBookSlot={onBookSlot} />
      <ArcCarousel onBookSlot={onBookSlot} />
      <WhyTabs onBookSlot={onBookSlot} />
      <WhySandalwood onBookSlot={onBookSlot} />
      <MidCta onBookSlot={onBookSlot} />
      <Testimonials isHome onBookSlot={onBookSlot} />
      <Contact isHome />
    </main>
  )
}
