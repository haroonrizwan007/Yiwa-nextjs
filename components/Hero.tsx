'use client'

/* START: Hero Banner */
import { useEffect, useRef } from 'react'

export default function Hero() {
  const routePathRef = useRef<SVGPathElement>(null)
  const movingStarRef = useRef<HTMLDivElement>(null)
  const mapSvgRef = useRef<SVGSVGElement>(null)
  const statNumsRef = useRef<NodeListOf<Element> | null>(null)

  /* ── Star animation along the route path ── */
  useEffect(() => {
    const path = routePathRef.current
    const star = movingStarRef.current
    const svg = mapSvgRef.current
    if (!path || !star || !svg) return

    const totalLength = path.getTotalLength()
    const duration = 4000
    let startTime: number | null = null
    let animId: number

    function animateStar(timestamp: number) {
      if (!startTime) startTime = timestamp
      const elapsed = (timestamp - startTime) % duration
      const progress = elapsed / duration
      const point = path!.getPointAtLength(progress * totalLength)
      const svgRect = svg!.getBoundingClientRect()
      const viewBox = svg!.viewBox.baseVal
      const scaleX = svgRect.width / viewBox.width
      const scaleY = svgRect.height / viewBox.height
      star!.style.left = point.x * scaleX + 'px'
      star!.style.top = point.y * scaleY + 'px'
      const scale = 0.8 + Math.sin(progress * Math.PI) * 0.4
      star!.style.transform = `translate(-50%, -50%) scale(${scale})`
      animId = requestAnimationFrame(animateStar)
    }

    animId = requestAnimationFrame(animateStar)
    return () => cancelAnimationFrame(animId)
  }, [])

  /* ── Stat counter animation on intersection ── */
  useEffect(() => {
    const statNums = document.querySelectorAll('.stat-num')
    statNumsRef.current = statNums

    const animateCount = (el: Element) => {
      const text = el.textContent || ''
      const num = parseInt(text)
      const suffix = text.replace(/[0-9]/g, '')
      let current = 0
      const step = num / 60
      const timer = setInterval(() => {
        current += step
        if (current >= num) {
          current = num
          clearInterval(timer)
        }
        el.textContent = Math.floor(current) + suffix
      }, 20)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCount(entry.target)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 }
    )

    statNums.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="badge">
          <span className="badge-dot"></span>
          Now shipping to 30+ Pakistani cities
        </div>
        <h1>
          Import from China
          <br />
          <span className="red">with Confidence.</span>
        </h1>
        <p>
          Professional sourcing, freight forwarding, customs clearance, supplier verification, and
          door-to-door delivery from China to Pakistan.
        </p>
        <div className="hero-buttons">
          <a href="#" className="btn-primary">
            Get Free Quote →
          </a>
          <a href="#" className="btn-secondary">
            Become a Member
          </a>
        </div>
        <div className="stats">
          <div>
            <div className="stat-num">500+</div>
            <div className="stat-label">Successful Shipments</div>
          </div>
          <div>
            <div className="stat-num">200+</div>
            <div className="stat-label">Business Clients</div>
          </div>
          <div>
            <div className="stat-num">98%</div>
            <div className="stat-label">Customer Satisfaction</div>
          </div>
          <div>
            <div className="stat-num">24/7</div>
            <div className="stat-label">Customer Support</div>
          </div>
        </div>
      </div>

      <div className="hero-visual" id="heroVisual">
        <div className="ship-bg"></div>
        <div className="crane"></div>
        <div className="container-label" style={{ top: '55%', left: '60%' }}>
          SCRELL FJ17 u4
        </div>
        <div className="container-label" style={{ top: '70%', left: '55%' }}>
          東 NC 天
        </div>
        <div className="container-label" style={{ top: '75%', left: '70%' }}>
          P:15 機 天
        </div>
        <div className="container-label" style={{ top: '85%', right: '10%' }}>
          FF
        </div>

        <svg
          className="map-svg"
          viewBox="0 0 600 520"
          preserveAspectRatio="xMidYMid slice"
          ref={mapSvgRef}
        >
          <path
            className="route-glow"
            id="routeGlow"
            d="M 460 180 C 420 220, 340 260, 260 300 C 220 320, 180 340, 150 360"
          />
          <path
            className="route-path"
            id="routePath"
            ref={routePathRef}
            d="M 460 180 C 420 220, 340 260, 260 300 C 220 320, 180 340, 150 360"
          />
          <circle className="city-dot-ring" cx="460" cy="180" r="6" />
          <circle className="city-dot" cx="460" cy="180" r="5" />
          <text className="city-label" x="475" y="175">
            CHINA
          </text>
          <text className="city-sublabel" x="475" y="190">
            YIWU - GUANG
          </text>
          <circle className="city-dot-ring" cx="150" cy="360" r="6" />
          <circle className="city-dot" cx="150" cy="360" r="5" />
          <text className="city-label" x="60" y="355">
            PAKISTAN
          </text>
          <text className="city-sublabel" x="60" y="370">
            KARACHI - LAHORE
          </text>
        </svg>

        <div className="moving-star" id="movingStar" ref={movingStarRef}>
          <svg viewBox="0 0 24 24">
            <polygon
              points="12,2 15,9 22,9 16,14 18,22 12,17 6,22 8,14 2,9 9,9"
              fill="#fff"
              stroke="#e74c3c"
              strokeWidth="1"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
/* END: Hero Banner */
