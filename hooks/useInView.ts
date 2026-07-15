'use client'

import { useEffect, useRef, useState } from 'react'

interface InViewOptions {
  /** Intersection threshold (0–1). Default: 0.15 */
  threshold?: number
  /** Root margin. Default: '0px' */
  rootMargin?: string
  /** Only trigger once. Default: true */
  triggerOnce?: boolean
}

/**
 * Custom hook that tracks whether an element is visible in the viewport.
 * Useful for triggering CSS animations, AnimatedCounter, etc.
 *
 * @example
 * const [ref, inView] = useInView({ threshold: 0.2 })
 * return <div ref={ref} className={inView ? 'animate-fade-up' : 'opacity-0'} />
 */
export function useInView<T extends HTMLElement = HTMLElement>(
  options: InViewOptions = {}
): [React.RefObject<T | null>, boolean] {
  const {
    threshold    = 0.15,
    rootMargin   = '0px',
    triggerOnce  = true,
  } = options

  const ref     = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (triggerOnce) observer.disconnect()
        } else if (!triggerOnce) {
          setInView(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [threshold, rootMargin, triggerOnce])

  return [ref, inView]
}
