'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import { HOW_IT_WORKS_STEPS } from '@/lib/constants'
import { cn } from '@/lib/utils'

gsap.registerPlugin(ScrollTrigger)

/* ============================================================
   STEP CARD
   ============================================================ */

function StepCard({
  step,
  index,
  total,
}: {
  step: (typeof HOW_IT_WORKS_STEPS)[number]
  index: number
  total: number
}) {
  const isLast = index === total - 1

  return (
    <motion.div
      className="relative flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: 0.2 + index * 0.15, duration: 0.6, type: 'tween' }}
    >
      {/* Number circle */}
      <div className="relative z-10 mb-5">
        <div
          className={cn(
            'w-14 h-14 rounded-2xl flex items-center justify-center',
            'border-2 border-brand-primary bg-brand-muted',
            'font-display font-bold text-xl text-brand-primary',
            'shadow-red'
          )}
        >
          {step.number}
        </div>

        {/* Connector line — desktop (hidden on last) */}
        {!isLast && (
          <div
            aria-hidden="true"
            className={cn(
              'hidden lg:block',
              'absolute top-1/2 left-full -translate-y-1/2',
              'w-[calc(100%+2rem)] h-px',   // spans the gap between cards
              'bg-gradient-to-r from-brand-primary/60 to-brand-primary/20'
            )}
            style={{ width: 'calc(100% + 3.5rem)' }}
          />
        )}
      </div>

      {/* Step content */}
      <div className="max-w-[200px]">
        <h3 className="font-display font-bold text-base text-[var(--color-text)] mb-2 leading-snug">
          {step.title}
        </h3>
        <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
          {step.description}
        </p>
      </div>

      {/* Connector — mobile vertical (hidden on last) */}
      {!isLast && (
        <div
          aria-hidden="true"
          className="sm:hidden w-px h-10 mt-6 bg-gradient-to-b from-brand-primary/60 to-transparent"
        />
      )}
    </motion.div>
  )
}

/* ============================================================
   HOW IT WORKS — GSAP TIMELINE LINE DRAW
   ============================================================ */

function TimelineLine() {
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!lineRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.4,
          ease: 'power2.inOut',
          transformOrigin: 'left center',
          scrollTrigger: {
            trigger: lineRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={lineRef}
      aria-hidden="true"
      className={cn(
        'hidden lg:block',
        'absolute top-7 left-[7%] right-[7%] h-px',
        'bg-gradient-to-r from-brand-primary/80 via-brand-primary/40 to-brand-primary/80',
        'origin-left'
      )}
    />
  )
}

/* ============================================================
   HOW IT WORKS SECTION
   ============================================================ */

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-heading"
      className="section-padding bg-[var(--color-bg)]"
    >
      <div className="container-site">

        {/* Section heading */}
        <ScrollRevealHeading />

        {/* Steps */}
        <div className="relative mt-16">
          {/* Desktop animated connecting line */}
          <TimelineLine />

          {/* Step cards */}
          <div
            className={cn(
              'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6',
              'items-start'
            )}
            role="list"
            aria-label="How it works steps"
          >
            {HOW_IT_WORKS_STEPS.map((step, i) => (
              <div key={step.number} role="listitem">
                <StepCard step={step} index={i} total={HOW_IT_WORKS_STEPS.length} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

/* ============================================================
   HEADING WITH GSAP SCROLL REVEAL
   (separate component so it can use its own ref cleanly)
   ============================================================ */

function ScrollRevealHeading() {
  const headingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!headingRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, headingRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={headingRef}>
      <SectionHeading
        eyebrow="HOW IT WORKS"
        heading="From Inquiry to Your Doorstep"
        description="A simple, proven 4-step process to get your goods from China to Pakistan — handled end-to-end by our team."
        align="center"
      />
    </div>
  )
}
