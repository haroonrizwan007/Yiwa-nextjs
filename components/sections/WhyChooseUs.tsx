'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/animations/ScrollReveal'
import { FEATURES } from '@/lib/constants'
import { cn } from '@/lib/utils'

gsap.registerPlugin(ScrollTrigger)

/* ============================================================
   FEATURE CARD
   ============================================================ */

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof FEATURES)[number]
  index: number
}) {
  const Icon = feature.icon

  return (
    <motion.div
      className={cn(
        'feature-card group',
        'relative p-6 rounded-2xl',
        'bg-[var(--color-surface-2)] border border-[var(--color-border)]',
        'transition-all duration-300',
        'hover:-translate-y-1.5 hover:border-brand-primary/40',
        'hover:shadow-hover cursor-default'
      )}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.07, duration: 0.55, type: 'tween' }}
    >
      {/* Icon */}
      <div
        className={cn(
          'w-11 h-11 rounded-xl flex items-center justify-center mb-4',
          'bg-brand-muted border border-brand-primary/20',
          'transition-colors duration-300',
          'group-hover:bg-brand-primary group-hover:border-brand-primary'
        )}
      >
        <Icon
          size={20}
          aria-hidden="true"
          className="text-brand-primary group-hover:text-white transition-colors duration-300"
        />
      </div>

      {/* Text */}
      <h3 className="font-display font-semibold text-base text-[var(--color-text)] mb-2">
        {feature.title}
      </h3>
      <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
        {feature.description}
      </p>

      {/* Subtle red corner accent on hover */}
      <div
        aria-hidden="true"
        className={cn(
          'absolute top-0 right-0 w-16 h-16 rounded-tr-2xl rounded-bl-2xl',
          'bg-brand-primary/0 group-hover:bg-brand-primary/5',
          'transition-colors duration-300'
        )}
      />
    </motion.div>
  )
}

/* ============================================================
   WHY CHOOSE US SECTION
   ============================================================ */

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null)

  /* Subtle background parallax on the left column */
  useEffect(() => {
    if (!sectionRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.why-left-col',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="why-yiwa"
      aria-labelledby="why-heading"
      className="section-padding bg-[var(--color-bg)]"
    >
      <div className="container-site">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-12 xl:gap-20 items-start">

          {/* ── LEFT: Content ── */}
          <div className="why-left-col lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="WHY YIWA"
              heading="Why Choose Us"
              description="We simplify China imports for Pakistani businesses — from verified sourcing to door delivery, every step handled by people who know the route."
              align="left"
            />

            <div className="mt-8 space-y-4">
              {/* Trust stat */}
              <div className="flex items-center gap-3 p-4 rounded-xl bg-brand-muted border border-brand-primary/20">
                <div className="w-10 h-10 rounded-xl bg-brand-primary flex items-center justify-center shrink-0">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--color-text)]">200+ Verified Clients</p>
                  <p className="text-xs text-[var(--color-text-muted)] mt-0.5">Across Pakistan — Lahore, Karachi, Faisalabad &amp; more</p>
                </div>
              </div>

              {/* CTA link */}
              <Link
                href="/about"
                className={cn(
                  'inline-flex items-center gap-2 group',
                  'text-sm font-semibold text-brand-primary',
                  'hover:gap-3 transition-all duration-200'
                )}
              >
                <span className="text-[10px] font-semibold tracking-widest uppercase text-[var(--color-text-muted)]">
                  Container Terminal
                </span>
                &mdash; More about us
                <ArrowRight
                  size={14}
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          {/* ── RIGHT: 6 Feature cards ── */}
          <div className="grid sm:grid-cols-2 gap-4" role="list" aria-label="Our advantages">
            {FEATURES.map((feature, i) => (
              <div key={feature.title} role="listitem">
                <FeatureCard feature={feature} index={i} />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
