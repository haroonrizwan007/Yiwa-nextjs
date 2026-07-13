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

function getCpv(): number {
  if (typeof window === 'undefined') return 3
  if (window.innerWidth <= 768) return 1
  if (window.innerWidth <= 1024) return 2
  return 3
}

export default function Testimonials() {
  const [cardsPerView, setCardsPerView] = useState(3)
  const [activeDot, setActiveDot] = useState(0)

  const trackRef = useRef<HTMLDivElement>(null)
  const cpvRef = useRef(3)          // always in sync with cardsPerView
  const idxRef = useRef(3)          // current DOM index (imperative)
  const isTransRef = useRef(false)  // debounce rapid clicks
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const touchStartRef = useRef(0)

  /* Build slide list: [last cpv clones] + [4 real] + [first cpv clones] */
  const allSlides = [
    ...testimonials.slice(-cardsPerView),
    ...testimonials,
    ...testimonials.slice(0, cardsPerView),
  ]

  const totalDots = Math.ceil(testimonials.length / cardsPerView)
  const len = testimonials.length

  /* Compute active dot from a DOM index */
  const computeDot = useCallback((idx: number, cpv: number) => {
    const realIdx = ((idx - cpv) % len + len) % len
    const total = Math.ceil(len / cpv)
    return Math.floor(realIdx / cpv) % total
  }, [len])

  /* Imperatively move the track */
  const applyTransform = useCallback((idx: number, animated: boolean) => {
    const cpv = cpvRef.current
    if (trackRef.current) {
      trackRef.current.style.transition = animated
        ? 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
        : 'none'
      trackRef.current.style.transform = `translateX(-${idx * (100 / cpv)}%)`
    }
    idxRef.current = idx
    setActiveDot(computeDot(idx, cpv))
  }, [computeDot])

  /* Resize — detect cardsPerView */
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>
    const check = () => setCardsPerView(prev => { const n = getCpv(); return n !== prev ? n : prev })
    const onResize = () => { clearTimeout(timer); timer = setTimeout(check, 250) }
    check()
    window.addEventListener('resize', onResize)
    return () => { window.removeEventListener('resize', onResize); clearTimeout(timer) }
  }, [])

  /* Reset carousel when cardsPerView changes */
  useEffect(() => {
    cpvRef.current = cardsPerView
    idxRef.current = cardsPerView
    setActiveDot(0)
    if (trackRef.current) {
      trackRef.current.style.transition = 'none'
      /* cardsPerView clones take exactly 100% of the viewport */
      trackRef.current.style.transform = 'translateX(-100%)'
    }
    const t = setTimeout(() => {
      if (trackRef.current) {
        trackRef.current.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
      }
    }, 50)
    return () => clearTimeout(t)
  }, [cardsPerView])

  /* Seamless infinite-loop jump on transitionend */
  const handleTransitionEnd = useCallback(() => {
    isTransRef.current = false
    const cpv = cpvRef.current
    const idx = idxRef.current
    let newIdx = idx
    if (idx >= len + cpv) newIdx = idx - len
    else if (idx < cpv) newIdx = idx + len

    if (newIdx !== idx && trackRef.current) {
      trackRef.current.style.transition = 'none'
      trackRef.current.style.transform = `translateX(-${newIdx * (100 / cpv)}%)`
      void trackRef.current.offsetHeight // force reflow before re-enabling transition
      trackRef.current.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
      idxRef.current = newIdx
      setActiveDot(computeDot(newIdx, cpv))
    }
  }, [len, computeDot])

  /* Auto-slide */
  const startAutoSlide = useCallback(() => {
    autoRef.current = setInterval(() => {
      if (!isTransRef.current) {
        isTransRef.current = true
        applyTransform(idxRef.current + 1, true)
      }
    }, 5000)
  }, [applyTransform])

  const resetAutoSlide = useCallback(() => {
    if (autoRef.current) clearInterval(autoRef.current)
    startAutoSlide()
  }, [startAutoSlide])

  useEffect(() => {
    startAutoSlide()
    return () => { if (autoRef.current) clearInterval(autoRef.current) }
  }, [startAutoSlide])

  /* Button handlers */
  const handlePrev = () => {
    if (isTransRef.current) return
    isTransRef.current = true
    applyTransform(idxRef.current - 1, true)
    resetAutoSlide()
  }

  const handleNext = () => {
    if (isTransRef.current) return
    isTransRef.current = true
    applyTransform(idxRef.current + 1, true)
    resetAutoSlide()
  }

  const handleDotClick = (dotIdx: number) => {
    applyTransform(dotIdx * cpvRef.current + cpvRef.current, true)
    resetAutoSlide()
  }

  /* Touch / swipe */
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartRef.current - e.changedTouches[0].screenX
    if (Math.abs(diff) > 50 && !isTransRef.current) {
      isTransRef.current = true
      applyTransform(idxRef.current + (diff > 0 ? 1 : -1), true)
      resetAutoSlide()
    }
  }

  /* Hover pause */
  const handleMouseEnter = () => { if (autoRef.current) clearInterval(autoRef.current) }
  const handleMouseLeave = () => { startAutoSlide() }

  return (
    <>
      <section className="testimonial1">
        <div className="testimonial1-label">TESTIMONIALS</div>
        <h2>What Our Clients Say</h2>
      </section>

      <section className="testimonial2">
        <div className="testimonial2-container">
          <div className="carousel-viewport">
            <div
              className="testimonial-carousel-track"
              ref={trackRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onTouchStart={(e) => { touchStartRef.current = e.changedTouches[0].screenX }}
              onTouchEnd={handleTouchEnd}
              onTransitionEnd={handleTransitionEnd}
            >
              {allSlides.map((t, i) => (
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
          </div>

          <div className="carousel-nav">
            <button className="carousel-btn" aria-label="Previous" onClick={handlePrev}>
              <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button className="carousel-btn" aria-label="Next" onClick={handleNext}>
              <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          <div className="carousel-dots">
            {Array.from({ length: totalDots }).map((_, i) => (
              <button
                key={i}
                className={`carousel-dot${activeDot === i ? ' active' : ''}`}
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
