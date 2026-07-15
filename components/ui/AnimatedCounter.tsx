'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { useInView } from '@/hooks/useInView'
import { cn } from '@/lib/utils'

/* ============================================================
   ANIMATED COUNTER
   Counts from 0 to `value` using GSAP when scrolled into view.
   Suffix ("+", "%", "/7") is rendered statically after the number.
   ============================================================ */

interface AnimatedCounterProps {
  value:      number
  suffix?:    string
  duration?:  number          // animation duration in seconds
  className?: string          // applied to the outer wrapper
  numClass?:  string          // applied to the number span
  suffixClass?:string         // applied to the suffix span
  once?:      boolean         // only animate once (default: true)
}

export default function AnimatedCounter({
  value,
  suffix      = '',
  duration    = 2,
  className,
  numClass,
  suffixClass,
  once        = true,
}: AnimatedCounterProps) {
  const numRef               = useRef<HTMLSpanElement>(null)
  const [wrapRef, inView]    = useInView<HTMLDivElement>({ threshold: 0.5, triggerOnce: once })
  const hasAnimated          = useRef(false)

  useEffect(() => {
    if (!inView || !numRef.current) return
    if (once && hasAnimated.current) return

    hasAnimated.current = true

    const obj = { val: 0 }

    gsap.to(obj, {
      val:      value,
      duration,
      ease:     'power2.out',
      onUpdate: () => {
        if (numRef.current) {
          // Show integer during count, show exact value at end
          numRef.current.textContent =
            obj.val >= value
              ? String(value)
              : String(Math.floor(obj.val))
        }
      },
    })

    return () => {
      gsap.killTweensOf(obj)
    }
  }, [inView, value, duration, once])

  return (
    <div ref={wrapRef} className={cn('inline-flex items-baseline gap-0.5', className)}>
      <span ref={numRef} className={cn('tabular-nums', numClass)}>
        0
      </span>
      {suffix && (
        <span className={cn(suffixClass)} aria-hidden="true">
          {suffix}
        </span>
      )}
    </div>
  )
}
