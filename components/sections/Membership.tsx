'use client'

import Link from 'next/link'
import { Check, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import { MEMBERSHIP_PLANS } from '@/lib/constants'
import { cn } from '@/lib/utils'

/* ============================================================
   PRICING CARD
   ============================================================ */

function PricingCard({
  plan,
  index,
}: {
  plan: (typeof MEMBERSHIP_PLANS)[number]
  index: number
}) {
  const isPopular = plan.highlighted

  return (
    <motion.div
      className={cn(
        'relative flex flex-col rounded-2xl p-7 h-full',
        'border transition-all duration-300',
        isPopular
          ? 'bg-[var(--color-bg)] border-brand-primary shadow-red-lg scale-[1.02] lg:scale-[1.04] z-10'
          : 'bg-[var(--color-surface-2)] border-[var(--color-border)] hover:border-brand-primary/40 hover:shadow-hover'
      )}
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.1, duration: 0.6, type: 'tween' }}
    >
      {/* Popular badge */}
      {isPopular && plan.badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span
            className={cn(
              'inline-flex items-center gap-1.5 px-4 py-1.5',
              'rounded-full text-[11px] font-bold tracking-wider uppercase',
              'bg-brand-primary text-white shadow-red',
              'animate-pulse-ring'
            )}
          >
            <Sparkles size={11} aria-hidden="true" />
            {plan.badge}
          </span>
        </div>
      )}

      {/* Plan name + description */}
      <div className="mb-6">
        <h3
          className={cn(
            'font-display font-bold text-xl',
            isPopular ? 'text-brand-primary' : 'text-[var(--color-text)]'
          )}
        >
          {plan.name}
        </h3>
        <p className="text-sm text-[var(--color-text-muted)] mt-1.5 leading-relaxed">
          {plan.description}
        </p>
      </div>

      {/* Price */}
      <div className="mb-7 pb-7 border-b border-[var(--color-border)]">
        <div className="flex items-baseline gap-1">
          <span
            className={cn(
              'font-display font-bold text-4xl',
              isPopular ? 'text-[var(--color-text)]' : 'text-[var(--color-text)]'
            )}
          >
            {plan.price}
          </span>
          <span className="text-sm font-medium text-[var(--color-text-muted)]">
            {plan.period}
          </span>
        </div>
      </div>

      {/* Features list */}
      <ul className="space-y-3 mb-8 flex-1" role="list" aria-label={`${plan.name} features`}>
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <div
              className={cn(
                'w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5',
                isPopular
                  ? 'bg-brand-primary'
                  : 'bg-brand-muted border border-brand-primary/30'
              )}
            >
              <Check
                size={11}
                aria-hidden="true"
                className={isPopular ? 'text-white' : 'text-brand-primary'}
                strokeWidth={3}
              />
            </div>
            <span className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA button */}
      <Link
        href={plan.href}
        className={cn(
          'flex items-center justify-center w-full',
          'px-6 py-3.5 rounded-xl font-semibold text-sm',
          'transition-all duration-200',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2',
          isPopular
            ? 'bg-brand-primary hover:bg-brand-primary-dark text-white shadow-red hover:shadow-red-lg hover:-translate-y-0.5'
            : 'bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text)] hover:border-brand-primary hover:text-brand-primary hover:bg-brand-muted'
        )}
      >
        {plan.cta}
      </Link>
    </motion.div>
  )
}

/* ============================================================
   MEMBERSHIP SECTION
   ============================================================ */

export default function Membership() {
  return (
    <section
      id="membership"
      aria-labelledby="membership-heading"
      className="section-padding bg-[var(--color-surface)]"
    >
      <div className="container-site">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, type: 'tween' }}
        >
          <SectionHeading
            eyebrow="MEMBERSHIP CLUB"
            heading="Join the Yiwa Importers Club"
            description="Learn Smarter. Import Better. Grow Faster. — Get exclusive access to sourcing guides, supplier directories, market insights, and priority support."
            align="center"
          />
        </motion.div>

        {/* Cards grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch py-6 overflow-visible">
          {MEMBERSHIP_PLANS.map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} index={i} />
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          className="text-center text-xs text-[var(--color-text-subtle)] mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          All plans include a 7-day satisfaction guarantee. No hidden fees. Cancel anytime.
        </motion.p>

      </div>
    </section>
  )
}
