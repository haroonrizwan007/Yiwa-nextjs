'use client'

/* START: How It Works */
import { useEffect, useRef } from 'react'

export default function HowItWorks() {
  const stepsContainerRef = useRef<HTMLDivElement>(null)
  const stepsLineRef = useRef<HTMLDivElement>(null)
  const stepsProgressRef = useRef<HTMLDivElement>(null)
  const movingVanRef = useRef<HTMLDivElement>(null)
  const vanGlowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const stepsContainer = stepsContainerRef.current
    const stepsLine = stepsLineRef.current
    const stepsProgress = stepsProgressRef.current
    const movingVan = movingVanRef.current
    const vanGlow = vanGlowRef.current

    if (!stepsContainer || !stepsLine || !stepsProgress || !movingVan || !vanGlow) return

    const stepCards = Array.from(stepsContainer.querySelectorAll<HTMLElement>('.step-card'))
    let hasAnimated = false
    let currentStepIndex = -1

    /* ── Position the line and van at circle centers ── */
    function positionElements() {
      const containerRect = stepsContainer!.getBoundingClientRect()
      const isMobile = window.innerWidth <= 600
      const circles = stepCards.map((c) => c.querySelector<HTMLElement>('.step-number')!)

      if (isMobile) {
        const firstCircle = circles[0]
        const lastCircle = circles[circles.length - 1]
        const fRect = firstCircle.getBoundingClientRect()
        const lRect = lastCircle.getBoundingClientRect()

        const centerX = fRect.left - containerRect.left + fRect.width / 2
        const topY = fRect.top - containerRect.top + fRect.height / 2
        const bottomY = lRect.top - containerRect.top + lRect.height / 2

        stepsLine!.style.left = centerX - 1.5 + 'px'
        stepsLine!.style.right = 'auto'
        stepsLine!.style.width = '3px'
        stepsLine!.style.top = topY + 'px'
        stepsLine!.style.bottom = containerRect.bottom - lRect.bottom + 'px'
        stepsLine!.style.height = bottomY - topY + 'px'

        stepsProgress!.style.left = centerX - 1.5 + 'px'
        stepsProgress!.style.right = 'auto'
        stepsProgress!.style.width = '3px'
        stepsProgress!.style.top = topY + 'px'
        stepsProgress!.style.height = '0'

        movingVan!.style.left = centerX - 22 - 10 + 'px'
        movingVan!.style.top = topY - 22 + 'px'
        vanGlow!.style.left = centerX - 28 - 10 + 'px'
        vanGlow!.style.top = topY - 28 + 'px'
      } else {
        const firstCircle = circles[0]
        const lastCircle = circles[circles.length - 1]
        const fRect = firstCircle.getBoundingClientRect()
        const lRect = lastCircle.getBoundingClientRect()

        const centerY = fRect.top - containerRect.top + fRect.height / 2
        const leftX = fRect.left - containerRect.left + fRect.width / 2
        const rightX = lRect.left - containerRect.left + lRect.width / 2

        stepsLine!.style.left = leftX + 'px'
        stepsLine!.style.right = containerRect.width - rightX + 'px'
        stepsLine!.style.top = centerY + 'px'
        stepsLine!.style.bottom = 'auto'
        stepsLine!.style.width = 'auto'
        stepsLine!.style.height = '3px'

        stepsProgress!.style.left = leftX + 'px'
        stepsProgress!.style.right = 'auto'
        stepsProgress!.style.top = centerY + 'px'
        stepsProgress!.style.bottom = 'auto'
        stepsProgress!.style.width = '0'
        stepsProgress!.style.height = '3px'
        stepsProgress!.style.maxWidth = rightX - leftX + 'px'

        const vanOffsetY = centerY - 24 - 20
        movingVan!.style.left = leftX - 24 + 'px'
        movingVan!.style.top = vanOffsetY + 'px'
        vanGlow!.style.left = leftX - 30 + 'px'
        vanGlow!.style.top = vanOffsetY - 6 + 'px'
      }
    }

    /* ── Move van sequentially to each step ── */
    function moveToStep(index: number) {
      if (index >= stepCards.length) return
      currentStepIndex = index

      const containerRect = stepsContainer!.getBoundingClientRect()
      const isMobile = window.innerWidth <= 600
      const card = stepCards[index]
      const circle = card.querySelector<HTMLElement>('.step-number')!
      const cRect = circle.getBoundingClientRect()

      const cX = cRect.left - containerRect.left + cRect.width / 2
      const cY = cRect.top - containerRect.top + cRect.height / 2

      if (isMobile) {
        movingVan!.style.left = cX - 22 - 10 + 'px'
        movingVan!.style.top = cY - 22 + 'px'
        vanGlow!.style.left = cX - 28 - 10 + 'px'
        vanGlow!.style.top = cY - 28 + 'px'

        const firstCircle = stepCards[0].querySelector<HTMLElement>('.step-number')!
        const fRect = firstCircle.getBoundingClientRect()
        const fY = fRect.top - containerRect.top + fRect.height / 2
        stepsProgress!.style.height = cY - fY + 'px'
      } else {
        movingVan!.style.left = cX - 24 + 'px'
        movingVan!.style.top = cY - 24 - 20 + 'px'
        vanGlow!.style.left = cX - 30 + 'px'
        vanGlow!.style.top = cY - 24 - 20 - 6 + 'px'

        const firstCircle = stepCards[0].querySelector<HTMLElement>('.step-number')!
        const fRect = firstCircle.getBoundingClientRect()
        const fX = fRect.left - containerRect.left + fRect.width / 2
        stepsProgress!.style.width = cX - fX + 'px'
      }

      setTimeout(() => {
        card.classList.add('visible')
        card.classList.add('reached')
        movingVan!.classList.add('arrived')
        setTimeout(() => movingVan!.classList.remove('arrived'), 600)
      }, 500)

      setTimeout(() => {
        if (index < stepCards.length - 1) {
          moveToStep(index + 1)
        } else {
          setTimeout(() => {
            movingVan!.classList.add('hidden')
            vanGlow!.classList.add('hidden')
          }, 800)
        }
      }, 1400)
    }

    /* ── Trigger when section enters viewport ── */
    const triggerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            hasAnimated = true
            positionElements()
            requestAnimationFrame(() => {
              movingVan!.classList.add('visible')
              vanGlow!.classList.add('visible')
              moveToStep(0)
            })
            triggerObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.3 }
    )

    triggerObserver.observe(stepsContainer)

    /* ── Recalculate on resize ── */
    const handleResize = () => {
      positionElements()
      if (currentStepIndex >= 0 && currentStepIndex < stepCards.length) {
        const containerRect = stepsContainer!.getBoundingClientRect()
        const isMobile = window.innerWidth <= 600
        const card = stepCards[currentStepIndex]
        const circle = card.querySelector<HTMLElement>('.step-number')!
        const cRect = circle.getBoundingClientRect()
        const cX = cRect.left - containerRect.left + cRect.width / 2
        const cY = cRect.top - containerRect.top + cRect.height / 2

        if (isMobile) {
          movingVan!.style.left = cX - 22 - 10 + 'px'
          movingVan!.style.top = cY - 22 + 'px'
          vanGlow!.style.left = cX - 28 - 10 + 'px'
          vanGlow!.style.top = cY - 28 + 'px'
        } else {
          movingVan!.style.left = cX - 24 + 'px'
          movingVan!.style.top = cY - 24 - 20 + 'px'
          vanGlow!.style.left = cX - 30 + 'px'
          vanGlow!.style.top = cY - 24 - 20 - 6 + 'px'
        }
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      triggerObserver.disconnect()
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section className="how-section">
      <div className="how-container">
        <div className="how-header">
          <div className="how-label">HOW IT WORKS</div>
          <h2>From Inquiry to Your Doorstep</h2>
        </div>

        <div className="steps-container" id="stepsContainer" ref={stepsContainerRef}>
          <div className="steps-line" id="stepsLine" ref={stepsLineRef}></div>
          <div className="steps-progress" id="stepsProgress" ref={stepsProgressRef}></div>

          <div className="van-glow" id="vanGlow" ref={vanGlowRef}></div>

          <div className="moving-van" id="movingVan" ref={movingVanRef}>
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="14" width="26" height="18" rx="2" fill="#c0392b" />
              <path d="M28 18 L36 18 L42 24 L42 32 L28 32 Z" fill="#e74c3c" />
              <rect x="6" y="18" width="10" height="10" rx="1" fill="#fff" opacity="0.4" />
              <circle cx="12" cy="36" r="5" fill="#222" />
              <circle cx="12" cy="36" r="2.5" fill="#888" />
              <circle cx="36" cy="36" r="5" fill="#222" />
              <circle cx="36" cy="36" r="2.5" fill="#888" />
            </svg>
          </div>

          <div className="steps-grid" id="stepsGrid">
            <div className="step-card" data-step="1">
              <div className="step-number">01</div>
              <div className="step-content">
                <h3>Tell Us What You Need</h3>
                <p>
                  Share a product link, photo, or spec sheet. We respond with sourcing options
                  within 24 hours.
                </p>
              </div>
            </div>
            <div className="step-card" data-step="2">
              <div className="step-number">02</div>
              <div className="step-content">
                <h3>We Source &amp; Verify</h3>
                <p>
                  Supplier vetting, price negotiation, and sample inspection — approved by you at
                  every step.
                </p>
              </div>
            </div>
            <div className="step-card" data-step="3">
              <div className="step-number">03</div>
              <div className="step-content">
                <h3>We Ship &amp; Clear</h3>
                <p>
                  Consolidation in our China warehouse, sea or air freight, and full customs
                  clearance in Pakistan.
                </p>
              </div>
            </div>
            <div className="step-card" data-step="4">
              <div className="step-number">04</div>
              <div className="step-content">
                <h3>Delivered to Your Door</h3>
                <p>
                  Final-mile delivery anywhere in Pakistan with tracking from factory floor to your
                  floor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
/* END: How It Works */
