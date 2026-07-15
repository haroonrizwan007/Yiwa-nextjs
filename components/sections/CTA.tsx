'use client'

import Link from 'next/link'
import { Sparkles, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

/* ============================================================
   CTA BANNER SECTION
   Full-width brand-red background with sparkle icon + two buttons.
   ============================================================ */

export default function CTA() {
  return (
    <section
      id="cta"
      aria-labelledby="cta-heading"
      className="relative overflow-hidden bg-brand-primary"
    >
      {/* ── Background texture ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* ── Glow blobs ── */}
      <div
        aria-hidden="true"
        className="absolute -top-20 -left-20 w-64 h-64 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)',
          filter: 'blur(30px)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0,0,0,0.12) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* ── Content ── */}
      <div className="container-site relative z-10 py-20 md:py-24">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">

          {/* Floating sparkle icon */}
          <motion.div
            className="mb-6 w-14 h-14 rounded-2xl bg-white/15 border border-white/25 flex items-center justify-center"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, type: 'tween' }}
          >
            <Sparkles size={26} className="text-white" aria-hidden="true" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            id="cta-heading"
            className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.15] tracking-tight"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: 0.1, duration: 0.6, type: 'tween' }}
          >
            Ready to import from China
            <br className="hidden sm:block" />
            the smart way?
          </motion.h2>

          {/* Description */}
          <motion.p
            className="mt-5 text-base sm:text-lg text-white/75 leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: 0.2, duration: 0.6, type: 'tween' }}
          >
            Join 200+ Pakistani businesses who trust Yiwa for their China sourcing,
            shipping, and customs clearance needs.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 mt-10"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: 0.3, duration: 0.6, type: 'tween' }}
          >
            <Link
              href="/contact"
              className={cn(
                'inline-flex items-center justify-center gap-2',
                'px-7 py-3.5 rounded-xl font-semibold text-sm',
                'bg-white text-brand-primary',
                'hover:bg-gray-50 hover:-translate-y-0.5 hover:shadow-lg',
                'transition-all duration-200',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-primary'
              )}
            >
              Get Free Quote
              <ArrowRight size={15} aria-hidden="true" />
            </Link>

            <Link
              href="/membership"
              className={cn(
                'inline-flex items-center justify-center gap-2',
                'px-7 py-3.5 rounded-xl font-semibold text-sm',
                'bg-transparent border-2 border-white/50 text-white',
                'hover:border-white hover:bg-white/10 hover:-translate-y-0.5',
                'transition-all duration-200',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-primary'
              )}
            >
              View Membership
            </Link>
          </motion.div>

          {/* Trust line */}
          <motion.p
            className="mt-8 text-xs text-white/50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Free consultation · No commitment · Response within 2 hours
          </motion.p>

        </div>
      </div>
    </section>
  )
}
