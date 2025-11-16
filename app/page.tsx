import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import MarqueeBanner from '@/components/MarqueeBanner';
import About from '@/components/About';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Security from '@/components/Security';
import Testimonials from '@/components/Testimonials';
import BookingForm from '@/components/BookingForm';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import StickyConversionBar from '@/components/StickyConversionBar';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="section-container">
        <Hero />
      </div>

      <div className="section-container">
        <MarqueeBanner />
      </div>

      <div className="section-container py-16">
        <About />
      </div>

      <div className="section-container py-16">
        <Services />
      </div>

      <div className="section-container py-16">
        <Gallery />
      </div>

      <div className="section-container py-16">
        <Security />
      </div>

      <Testimonials />

      <div className="section-container py-16">
        <BookingForm />
      </div>

      <div className="section-container py-16">
        <Contact />
      </div>

      <Footer />

      <StickyConversionBar />
    </div>
  );
}
