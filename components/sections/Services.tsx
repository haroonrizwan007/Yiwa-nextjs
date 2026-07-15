'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import { SERVICES } from '@/lib/constants'
import { cn } from '@/lib/utils'

/* ============================================================
   SERVICE CARD
   ============================================================ */

function ServiceCard({
  service,
  index,
}: {
  service: (typeof SERVICES)[number]
  index: number
}) {
  const Icon = service.icon

  return (
    <motion.article
      className={cn(
        'group relative flex flex-col',
        'p-6 rounded-2xl',
        'bg-[var(--color-bg)] border border-[var(--color-border)]',
        'transition-all duration-300',
        'hover:-translate-y-2 hover:shadow-hover hover:border-brand-primary/40'
      )}
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.06, duration: 0.55, type: 'tween' }}
      aria-label={service.title}
    >
      {/* Icon circle */}
      <div
        className={cn(
          'w-12 h-12 rounded-xl flex items-center justify-center mb-5 shrink-0',
          'bg-brand-muted border border-brand-primary/15',
          'transition-all duration-300',
          'group-hover:bg-brand-primary group-hover:border-brand-primary group-hover:scale-110'
        )}
      >
        <Icon
          size={22}
          aria-hidden="true"
          className="text-brand-primary group-hover:text-white transition-colors duration-300"
        />
      </div>

      {/* Content */}
      <h3 className="font-display font-semibold text-base text-[var(--color-text)] mb-2">
        {service.title}
      </h3>
      <p className="text-sm text-[var(--color-text-muted)] leading-relaxed flex-1">
        {service.description}
      </p>

      {/* Learn more link */}
      <Link
        href={service.href}
        className={cn(
          'inline-flex items-center gap-1.5 mt-5',
          'text-xs font-semibold text-brand-primary',
          'opacity-0 group-hover:opacity-100',
          'transition-opacity duration-200'
        )}
        aria-label={`Learn more about ${service.title}`}
      >
        Learn more
        <ArrowRight size={12} aria-hidden="true" className="group-hover:translate-x-0.5 transition-transform" />
      </Link>

      {/* Bottom-left red accent bar on hover */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-brand-primary rounded-b-2xl transition-all duration-500"
      />
    </motion.article>
  )
}

/* ============================================================
   SERVICES SECTION
   ============================================================ */

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="section-padding bg-[var(--color-surface)]"
    >
      <div className="container-site">

        {/* Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="WHAT WE DO"
            heading="Our Services"
            description="Comprehensive import solutions tailored for Pakistani businesses."
            align="left"
          />

          {/* Desktop CTA */}
          <Link
            href="/services"
            className={cn(
              'hidden sm:inline-flex items-center gap-2 shrink-0',
              'px-5 py-2.5 rounded-xl text-sm font-semibold',
              'border border-[var(--color-border)] text-[var(--color-text-muted)]',
              'hover:border-brand-primary hover:text-brand-primary hover:bg-brand-muted',
              'transition-all duration-200'
            )}
          >
            View All Services
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>

        {/* Services grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          role="list"
          aria-label="Our services"
        >
          {SERVICES.map((service, i) => (
            <div key={service.title} role="listitem">
              <ServiceCard service={service} index={i} />
            </div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="flex justify-center mt-10 sm:hidden">
          <Link
            href="/services"
            className={cn(
              'inline-flex items-center gap-2',
              'px-6 py-3 rounded-xl text-sm font-semibold',
              'bg-brand-primary text-white shadow-red',
              'hover:bg-brand-primary-dark transition-colors duration-200'
            )}
          >
            View All Services
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>

      </div>
    </section>
  )
}
