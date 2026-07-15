'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'

/* ============================================================
   GSAP INIT
   Registers all GSAP plugins once at the application root and
   sets consistent global defaults for all GSAP animations.
   Include this component once inside ThemeProvider in layout.tsx.
   ============================================================ */

export default function GsapInit() {
  useEffect(() => {
    // Register plugins (safe to call multiple times — GSAP dedupes)
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)

    // Global GSAP defaults
    gsap.defaults({
      ease:     'power3.out',
      duration: 0.8,
    })

    // ScrollTrigger performance config
    ScrollTrigger.config({
      limitCallbacks:      true,
      ignoreMobileResize:  true,
    })

    // Refresh once on mount so initial trigger positions are correct
    // after fonts + layout settle
    const id = setTimeout(() => ScrollTrigger.refresh(), 300)

    return () => {
      clearTimeout(id)
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return null
}
