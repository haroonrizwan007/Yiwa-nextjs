'use client'

/* START: Testimonials */
import { useState, useEffect, useRef, useCallback } from 'react'

const testimonials = [
  {
    initials: 'AM',
    name: 'Ahsan Mahmood',
    role: 'Founder, Fashion.pk',
    text: '"Yiwa Logistics handled our entire sourcing from Yiwu to Lahore. We saved 30% on freight and the quality inspections caught defects before shipping. Genuinely professional team."',
  },
  {
    initials: 'SI',
    name: 'Sana Iqbal',
    role: 'CEO, ToyWorld',
    text: '"The supplier verification report stopped us from sending money to a fraudulent factory. That single report paid for years of membership. Worth every rupee."',
  },
  {
    initials: 'BK',
    name: 'Bilal Khan',
    role: 'Director, Auto Traders',
    text: '"Consolidation changed our business. We buy from 6 suppliers now and ship as one container. One customs declaration, one freight cost. Smooth."',
  },
  {
    initials: 'FR',
    name: 'Fatima Riaz',
    role: 'Owner, Urban Living',
    text: '"From sample inspection to door delivery in Faisalabad, everything was tracked and on time. The dashboard preview alone gave me confidence."',
  },
]

function QuoteIcon() {
  return (
    <div className="testimonial3-quote">
      <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
      </svg>
    </div>
  )
}

function StarRow() {
  return (
    <div className="testimonial3-stars">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} viewBox="0 0 24 24">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)
  const autoSlideRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const touchStartRef = useRef(0)
  const touchEndRef = useRef(0)

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  const startAutoSlide = useCallback(() => {
    autoSlideRef.current = setInterval(nextSlide, 5000)
  }, [nextSlide])

  const resetAutoSlide = useCallback(() => {
    if (autoSlideRef.current) clearInterval(autoSlideRef.current)
    startAutoSlide()
  }, [startAutoSlide])

  /* Apply transform whenever index changes */
  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${currentIndex * 100}%)`
    }
  }, [currentIndex])

  /* Auto-slide on mount */
  useEffect(() => {
    startAutoSlide()
    return () => {
      if (autoSlideRef.current) clearInterval(autoSlideRef.current)
    }
  }, [startAutoSlide])

  const handlePrev = () => {
    prevSlide()
    resetAutoSlide()
  }

  const handleNext = () => {
    nextSlide()
    resetAutoSlide()
  }

  const handleDotClick = (index: number) => {
    goToSlide(index)
    resetAutoSlide()
  }

  /* Touch/swipe */
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = e.changedTouches[0].screenX
  }
  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndRef.current = e.changedTouches[0].screenX
    const diff = touchStartRef.current - touchEndRef.current
    if (Math.abs(diff) > 50) {
      diff > 0 ? nextSlide() : prevSlide()
      resetAutoSlide()
    }
  }

  /* Pause on hover */
  const handleMouseEnter = () => {
    if (autoSlideRef.current) clearInterval(autoSlideRef.current)
  }
  const handleMouseLeave = () => {
    startAutoSlide()
  }

  return (
    <>
      <section className="testimonial1">
        <div className="testimonial1-label">TESTIMONIALS</div>
        <h2>What Our Clients Say</h2>
      </section>

      <section className="testimonial2">
        <div className="testimonial2-container">
          <div
            className="testimonial-carousel-track"
            id="carouselTrack"
            ref={trackRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial3">
                <div className="testimonial3-inner">
                  <QuoteIcon />
                  <p className="testimonial3-text">{t.text}</p>
                  <div className="testimonial3-author">
                    <div className="testimonial3-author-info">
                      <div className="testimonial3-avatar">{t.initials}</div>
                      <div className="testimonial3-author-details">
                        <h4>{t.name}</h4>
                        <p>{t.role}</p>
                      </div>
                    </div>
                    <StarRow />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="carousel-nav">
            <button className="carousel-btn" id="prevBtn" aria-label="Previous" onClick={handlePrev}>
              <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button className="carousel-btn" id="nextBtn" aria-label="Next" onClick={handleNext}>
              <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="carousel-dots" id="carouselDots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`carousel-dot${currentIndex === i ? ' active' : ''}`}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => handleDotClick(i)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
/* END: Testimonials */
