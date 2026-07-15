'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cn } from '@/lib/utils'

gsap.registerPlugin(ScrollTrigger)

/* ============================================================
   TEXT ANIMATION
   Splits text into individual word <span>s and animates each
   word into view on scroll, creating a staggered word-reveal effect.

   For headings: set `as="h2"` or `as="h1"` to preserve semantics.

   @example
   <TextAnimation as="h2" className="text-5xl font-bold">
     Import from China with Confidence.
   </TextAnimation>
   ============================================================ */

interface TextAnimationProps {
  children:   string
  as?:        'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'
  className?: string
  stagger?:   number   // delay between words (seconds)
  y?:         number   // starting Y offset (px)
  duration?:  number   // per-word duration (seconds)
  start?:     string   // ScrollTrigger start
  delay?:     number   // overall animation delay (seconds)
}

export default function TextAnimation({
  children,
  as: Tag  = 'p',
  className,
  stagger  = 0.055,
  y        = 24,
  duration = 0.6,
  start    = 'top 88%',
  delay    = 0,
}: TextAnimationProps) {
  const wrapRef = useRef<HTMLElement>(null)

  /* Split text into word spans on mount */
  useEffect(() => {
    if (!wrapRef.current) return

    const el = wrapRef.current

    /* Build word spans preserving spaces */
    const words = children.split(' ')
    el.innerHTML = words
      .map(
        (word) =>
          `<span class="inline-block overflow-hidden"><span class="inline-block word-inner">${word}</span></span>`
      )
      .join(' ')

    const inners = el.querySelectorAll<HTMLElement>('.word-inner')

    const ctx = gsap.context(() => {
      gsap.fromTo(
        inners,
        { y, opacity: 0 },
        {
          y:       0,
          opacity: 1,
          duration,
          delay,
          ease:    'power3.out',
          stagger,
          scrollTrigger: {
            trigger:       el,
            start,
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, wrapRef)

    return () => {
      ctx.revert()
      /* Restore original text to avoid stale DOM on re-render */
      el.textContent = children
    }
  }, [children, stagger, y, duration, start, delay])

  return (
    // @ts-expect-error — dynamic tag + ref typing
    <Tag ref={wrapRef} className={cn(className)}>
      {children}
    </Tag>
  )
}
