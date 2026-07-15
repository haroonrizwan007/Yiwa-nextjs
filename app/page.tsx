import Navbar          from '@/components/layout/Navbar'
import Footer          from '@/components/layout/Footer'
import Hero            from '@/components/sections/Hero'
import PartnersMarquee from '@/components/sections/PartnersMarquee'
import WhyChooseUs     from '@/components/sections/WhyChooseUs'
import Services        from '@/components/sections/Services'
import HowItWorks      from '@/components/sections/HowItWorks'
import Membership      from '@/components/sections/Membership'
import Testimonials    from '@/components/sections/Testimonials'
import FAQ             from '@/components/sections/FAQ'
import CTA             from '@/components/sections/CTA'

export default function Home() {
  return (
    <>
      <Navbar />

      <main id="main-content">
        <Hero />
        <PartnersMarquee />
        <WhyChooseUs />
        <Services />
        <HowItWorks />
        <Membership />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>

      <Footer />
    </>
  )
}
