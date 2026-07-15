'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cn } from '@/lib/utils'

gsap.registerPlugin(ScrollTrigger)

/* ============================================================
   SCROLL REVEAL
   Wraps any children in a GSAP ScrollTrigger fade-up animation.
   The wrapper div is the trigger element.

   @example
   <ScrollReveal>
     <p>This fades up when scrolled into view.</p>
   </ScrollReveal>

   @example — stagger children by class name
   <ScrollReveal stagger={0.1} targets=".card">
     <div className="grid">
       <div className="card">...</div>
       <div className="card">...</div>
     </div>
   </ScrollReveal>
   ============================================================ */

interface ScrollRevealProps {
  children:    React.ReactNode
  className?:  string
  /** Animate child elements matching this selector instead of the wrapper */
  targets?:    string
  /** Stagger delay between target children (seconds) */
  stagger?:    number
  /** Y distance to animate from (px) */
  y?:          number
  /** ScrollTrigger start position */
  start?:      string
  /** Delay before animation begins (seconds) */
  delay?:      number
  /** Animation duration (seconds) */
  duration?:   number
  /** Whether to reverse on scroll up */
  reverse?:    boolean
  as?:         keyof React.JSX.IntrinsicElements
}

export default function ScrollReveal({
  children,
  className,
  targets,
  stagger   = 0,
  y         = 40,
  start     = 'top 85%',
  delay     = 0,
  duration  = 0.7,
  reverse   = true,
  as: Tag   = 'div',
}: ScrollRevealProps) {
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!wrapRef.current) return

    const ctx = gsap.context(() => {
      const el     = wrapRef.current!
      const elems  = targets
        ? gsap.utils.toArray<HTMLElement>(el.querySelectorAll(targets))
        : el

      gsap.fromTo(
        elems,
        { y, opacity: 0 },
        {
          y:       0,
          opacity: 1,
          duration,
          delay,
          ease:    'power3.out',
          ...(stagger > 0 && Array.isArray(elems)
            ? { stagger: { amount: stagger * (elems as HTMLElement[]).length, from: 'start' } }
            : {}
          ),
          scrollTrigger: {
            trigger:       el,
            start,
            toggleActions: reverse
              ? 'play none none reverse'
              : 'play none none none',
          },
        }
      )
    }, wrapRef)

    return () => ctx.revert()
  }, [targets, stagger, y, start, delay, duration, reverse])

  return (
    // @ts-expect-error — dynamic tag, TS can't infer ref type precisely
    <Tag ref={wrapRef} className={cn(className)}>
      {children}
    </Tag>
  )
}
