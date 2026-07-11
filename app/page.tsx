import GridBg from '@/components/GridBg'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import PartnersMarquee from '@/components/PartnersMarquee'
import WhyChooseUs from '@/components/WhyChooseUs'
import Services from '@/components/Services'
import HowItWorks from '@/components/HowItWorks'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      {/* START: Background Grid */}
      <GridBg />
      {/* END: Background Grid */}

      {/* START: Navbar */}
      <Navbar />
      {/* END: Navbar */}

      {/* START: Hero Banner */}
      <Hero />
      {/* END: Hero Banner */}

      {/* START: Trusted Partners Marquee */}
      <PartnersMarquee />
      {/* END: Trusted Partners Marquee */}

      {/* START: Why Choose Us */}
      <WhyChooseUs />
      {/* END: Why Choose Us */}

      {/* START: Services */}
      <Services />
      {/* END: Services */}

      {/* START: How It Works */}
      <HowItWorks />
      {/* END: How It Works */}

      {/* START: Membership Pricing */}
      <Pricing />
      {/* END: Membership Pricing */}

      {/* START: Testimonials */}
      <Testimonials />
      {/* END: Testimonials */}

      {/* START: FAQ */}
      <FAQ />
      {/* END: FAQ */}

      {/* START: Newsletter / CTA */}
      <Newsletter />
      {/* END: Newsletter / CTA */}

      {/* START: Footer */}
      <Footer />
      {/* END: Footer */}
    </>
  )
}
