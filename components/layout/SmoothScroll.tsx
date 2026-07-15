'use client'

import { useLenis } from '@/hooks/useLenis'

/**
 * Mounts Lenis smooth scroll + GSAP ScrollTrigger proxy.
 * Renders nothing — include once near the root of the app.
 */
export default function SmoothScroll() {
  useLenis()
  return null
}
