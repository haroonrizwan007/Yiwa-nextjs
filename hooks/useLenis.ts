'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Initializes Lenis smooth scroll and wires it to GSAP ScrollTrigger.
 * Call this once in a top-level client component (e.g. a providers wrapper).
 *
 * Returns the Lenis instance so callers can scroll programmatically if needed.
 */
export function useLenis(): void {
  useEffect(() => {
    const lenis = new Lenis({
      duration:   1.2,
      easing:     (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    // Wire Lenis to GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)

    // Drive Lenis inside GSAP's ticker for perfect sync
    const onFrame = (time: number) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(onFrame)
    gsap.ticker.lagSmoothing(0)

    // Refresh ScrollTrigger after Lenis changes the scroll container
    const refreshId = setTimeout(() => ScrollTrigger.refresh(), 200)

    return () => {
      clearTimeout(refreshId)
      gsap.ticker.remove(onFrame)
      lenis.destroy()
    }
  }, [])
}
