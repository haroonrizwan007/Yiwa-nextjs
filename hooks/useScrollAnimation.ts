'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { GSAP_DEFAULTS, SCROLL_TRIGGER_DEFAULTS } from '@/lib/animations'

gsap.registerPlugin(ScrollTrigger)

interface ScrollAnimationOptions {
  /** GSAP from-state (what properties to animate FROM) */
  from?: gsap.TweenVars
  /** Additional ScrollTrigger overrides */
  scrollTrigger?: Partial<ScrollTrigger.Vars>
  /** Stagger for multiple child elements */
  stagger?: number | gsap.StaggerVars
  /** Selector for child targets (if animating children of the ref) */
  targets?: string
}

/**
 * Custom hook that attaches a GSAP ScrollTrigger animation to a ref element.
 *
 * @example
 * const ref = useScrollAnimation({ from: { y: 40, opacity: 0 }, stagger: 0.1, targets: '.card' })
 * return <section ref={ref}>...</section>
 */
export function useScrollAnimation<T extends HTMLElement = HTMLElement>(
  options: ScrollAnimationOptions = {}
) {
  const ref = useRef<T>(null)

  const {
    from = { y: 40, opacity: 0 },
    scrollTrigger: scrollTriggerOverrides = {},
    stagger,
    targets,
  } = options

  useEffect(() => {
    if (!ref.current) return

    const ctx = gsap.context(() => {
      const element  = ref.current!
      const selector = targets ? gsap.utils.toArray<HTMLElement>(element.querySelectorAll(targets)) : element

      gsap.from(selector, {
        ...GSAP_DEFAULTS,
        ...from,
        ...(stagger ? { stagger } : {}),
        scrollTrigger: {
          trigger: element,
          ...SCROLL_TRIGGER_DEFAULTS,
          ...scrollTriggerOverrides,
        },
      })
    }, ref)

    return () => ctx.revert()
  }, [])

  return ref
}
