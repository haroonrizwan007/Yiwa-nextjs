'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import {
  ArrowRight,
  CheckCircle2,
  Package,
  Clock,
  Plane,
} from 'lucide-react'
import Link from 'next/link'
import Badge from '@/components/ui/Badge'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import GridBackground from '@/components/ui/GridBackground'
import { HERO_STATS } from '@/lib/constants'
import { cn } from '@/lib/utils'

gsap.registerPlugin(MotionPathPlugin)

/* ============================================================
   WORD-BY-WORD HEADING ANIMATION
   ============================================================ */

function AnimatedHeading() {
  return (
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight tracking-tight text-[var(--color-text)]">
      <span className="block">Import from China</span>
      <span className="block mt-1">
        with <span className="text-brand-primary">Confidence.</span>
      </span>
    </h1>
  )
}

/* ============================================================
   HERO VISUAL — Route Card + Floating Notification Cards
   ============================================================ */

const ROUTE_PATH_D = 'M 70 60 C 120 90, 220 160, 290 200 C 330 220, 360 240, 390 260'

function HeroVisual() {
  const dotRef = useRef<SVGCircleElement>(null)

  useEffect(() => {
    if (!dotRef.current) return

    const ctx = gsap.context(() => {
      gsap.to(dotRef.current, {
        duration:   4,
        repeat:     -1,
        ease:       'none',
        motionPath: {
          path:        `#hero-route-path`,
          align:       `#hero-route-path`,
          alignOrigin: [0.5, 0.5],
          autoRotate:  false,
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4, duration: 0.7, type: 'tween' }}
      className="relative h-full flex items-center justify-center"
    >
      {/* ── Main route card ── */}
      <div
        className={cn(
          'relative w-full max-w-[480px] mx-auto',
          'bg-[var(--color-surface)]/80 backdrop-blur-md',
          'border border-[var(--color-border)] rounded-3xl p-6',
          'shadow-hover'
        )}
      >
        {/* Card header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-text-muted)]">
              Live Shipment Route
            </p>
            <p className="text-sm font-semibold text-[var(--color-text)] mt-0.5">
              Yiwu, China → Karachi, Pakistan
            </p>
          </div>
          <span
            className={cn(
              'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full',
              'bg-emerald-500/10 text-emerald-500 text-[11px] font-semibold'
            )}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            In Transit
          </span>
        </div>

        {/* Route SVG */}
        <div className="relative rounded-2xl overflow-hidden bg-[var(--color-surface-2)] border border-[var(--color-border)]" style={{ height: 200 }}>
          {/* Subtle grid inside */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
              opacity: 0.4,
            }}
          />

          <svg
            viewBox="0 0 460 300"
            width="100%"
            height="100%"
            className="absolute inset-0"
            aria-hidden="true"
          >
            {/* Glow path */}
            <path
              d={ROUTE_PATH_D}
              fill="none"
              stroke="rgba(192,57,43,0.25)"
              strokeWidth="8"
              strokeLinecap="round"
            />
            {/* Main path */}
            <path
              id="hero-route-path"
              d={ROUTE_PATH_D}
              fill="none"
              stroke="#C0392B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="6 4"
            />

            {/* China dot */}
            <circle cx="70" cy="60" r="6" fill="#C0392B" />
            <circle cx="70" cy="60" r="10" fill="none" stroke="#C0392B" strokeOpacity="0.3" strokeWidth="2" />
            <text x="82" y="56" fontSize="10" fontWeight="600" fill="currentColor" className="fill-[var(--color-text)]">YIWU</text>
            <text x="82" y="70" fontSize="8" fill="currentColor" className="fill-[var(--color-text-muted)]">China</text>

            {/* Pakistan dot */}
            <circle cx="390" cy="260" r="6" fill="#C0392B" />
            <circle cx="390" cy="260" r="10" fill="none" stroke="#C0392B" strokeOpacity="0.3" strokeWidth="2" />
            <text x="340" y="248" fontSize="10" fontWeight="600" fill="currentColor" className="fill-[var(--color-text)]">KARACHI</text>
            <text x="340" y="262" fontSize="8" fill="currentColor" className="fill-[var(--color-text-muted)]">Pakistan</text>

            {/* Animated dot */}
            <circle
              ref={dotRef}
              r="7"
              fill="#C0392B"
              filter="url(#dot-glow)"
            />

            {/* Glow filter */}
            <defs>
              <filter id="dot-glow" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
          </svg>
        </div>

        {/* Card footer stats */}
        <div className="grid grid-cols-3 gap-3 mt-4">
          {[
            { label: 'Est. Arrival', value: '28 Days' },
            { label: 'Cargo Type',  value: 'FCL 20ft' },
            { label: 'Status',      value: 'On Track' },
          ].map(({ label, value }) => (
            <div key={label} className="bg-[var(--color-surface-2)] rounded-xl p-2.5 text-center">
              <p className="text-[10px] text-[var(--color-text-muted)] uppercase tracking-wide">{label}</p>
              <p className="text-xs font-bold text-[var(--color-text)] mt-0.5">{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Floating card: Delivery confirmed ── */}
      <motion.div
        className={cn(
          'absolute -top-4 -right-4 lg:-right-8',
          'bg-[var(--color-surface)] border border-[var(--color-border)]',
          'rounded-2xl px-4 py-3 shadow-hover',
          'flex items-center gap-3',
          'animate-float'
        )}
        initial={{ opacity: 0, y: 12, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.5, type: 'tween' }}
      >
        <div className="w-8 h-8 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
          <CheckCircle2 size={16} className="text-emerald-500" aria-hidden="true" />
        </div>
        <div>
          <p className="text-xs font-semibold text-[var(--color-text)]">Shipment Delivered</p>
          <p className="text-[10px] text-[var(--color-text-muted)] mt-0.5">Lahore · 2 mins ago</p>
        </div>
      </motion.div>

      {/* ── Floating card: Quality Inspected ── */}
      <motion.div
        className={cn(
          'absolute -bottom-4 -left-4 lg:-left-8',
          'bg-[var(--color-surface)] border border-[var(--color-border)]',
          'rounded-2xl px-4 py-3 shadow-hover',
          'flex items-center gap-3',
          'animate-float-subtle'
        )}
        style={{ animationDelay: '1.5s' }}
        initial={{ opacity: 0, y: 12, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1.1, duration: 0.5, type: 'tween' }}
      >
        <div className="w-8 h-8 rounded-xl bg-brand-muted flex items-center justify-center shrink-0">
          <Package size={16} className="text-brand-primary" aria-hidden="true" />
        </div>
        <div>
          <p className="text-xs font-semibold text-[var(--color-text)]">Quality Inspected</p>
          <p className="text-[10px] text-[var(--color-text-muted)] mt-0.5">500+ items verified</p>
        </div>
      </motion.div>

      {/* ── Floating card: Express delivery ── */}
      <motion.div
        className={cn(
          'absolute top-1/2 -right-4 lg:-right-10 -translate-y-full',
          'bg-[var(--color-surface)] border border-[var(--color-border)]',
          'rounded-2xl px-4 py-3 shadow-hover',
          'flex items-center gap-3',
          'animate-float-subtle'
        )}
        style={{ animationDelay: '0.8s' }}
        initial={{ opacity: 0, x: 12, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ delay: 1.3, duration: 0.5, type: 'tween' }}
      >
        <div className="w-8 h-8 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
          <Plane size={16} className="text-blue-500" aria-hidden="true" />
        </div>
        <div>
          <p className="text-xs font-semibold text-[var(--color-text)]">Air Freight</p>
          <p className="text-[10px] text-[var(--color-text-muted)] mt-0.5">3–7 business days</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

/* ============================================================
   SERVICE TAGS
   ============================================================ */

const SERVICE_TAGS = [
  'Product Sourcing',
  'Supplier Verification',
  'Air & Sea Freight',
  'Customs Clearance',
]

/* ============================================================
   HERO SECTION
   ============================================================ */

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero section"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[var(--color-bg)]"
    >
      {/* Background */}
      <GridBackground
        variant="grid"
        glow
        glowPos="bl"
        className="absolute inset-0"
      />

      {/* Extra glow — top right */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(192,57,43,0.07) 0%, transparent 65%)',
          filter:     'blur(60px)',
        }}
      />

      {/* ── Main content ── */}
      <div className="container-site relative z-10 pt-24 lg:pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* ── LEFT: Text content ── */}
          <div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5, type: 'tween' }}
            >
              <Badge dot variant="red">
                Now shipping to 30+ Pakistani cities
              </Badge>
            </motion.div>

            {/* H1 */}
            <div className="mt-5">
              <AnimatedHeading />
            </div>

            {/* Description */}
            <motion.p
              className="mt-6 text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.55, type: 'tween' }}
            >
              Professional sourcing, freight forwarding, customs clearance, supplier verification,
              and door-to-door delivery from China to Pakistan.
            </motion.p>

            {/* Service tags */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-5"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.5, type: 'tween' }}
            >
              {SERVICE_TAGS.map((tag) => (
                <span
                  key={tag}
                  className={cn(
                    'inline-flex items-center gap-1.5 px-3 py-1.5',
                    'rounded-full text-xs font-medium',
                    'bg-[var(--color-surface-2)] text-[var(--color-text-muted)]',
                    'border border-[var(--color-border)]'
                  )}
                >
                  <span className="w-1 h-1 rounded-full bg-brand-primary shrink-0" aria-hidden="true" />
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 mt-8"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.5, type: 'tween' }}
            >
              <Link
                href="/contact"
                className={cn(
                  'inline-flex items-center justify-center gap-2',
                  'px-6 py-3.5 rounded-xl font-semibold text-sm',
                  'bg-brand-primary hover:bg-brand-primary-dark text-white',
                  'shadow-red hover:shadow-red-lg hover:-translate-y-0.5',
                  'transition-all duration-200',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2'
                )}
              >
                Get Free Quote
                <ArrowRight size={16} aria-hidden="true" />
              </Link>

              <Link
                href="/membership"
                className={cn(
                  'inline-flex items-center justify-center gap-2',
                  'px-6 py-3.5 rounded-xl font-semibold text-sm',
                  'bg-transparent border border-brand-primary text-brand-primary',
                  'hover:bg-brand-muted hover:-translate-y-0.5',
                  'transition-all duration-200',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2'
                )}
              >
                Become a Member
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="mt-12 pt-8 border-t border-[var(--color-border)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.55, type: 'tween' }}
            >
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-xs mx-auto sm:max-w-none sm:mx-0">
                {HERO_STATS.map((stat) => (
                  <div key={stat.label}>
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      duration={2}
                      numClass="font-display font-bold text-3xl sm:text-4xl text-[var(--color-text)]"
                      suffixClass="font-display font-bold text-xl text-brand-primary ml-0.5"
                    />
                    <p className="text-xs sm:text-sm text-[var(--color-text-muted)] mt-1.5 font-medium">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* ── RIGHT: Visual ── */}
          <div className="hidden lg:flex items-center justify-center">
            <HeroVisual />
          </div>

        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        aria-hidden="true"
      >
        <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[var(--color-text-subtle)]">
          Scroll
        </p>
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-[var(--color-border)] to-transparent"
          animate={{ scaleY: [1, 0.4, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.8, repeat: Infinity, type: 'tween' }}
        />
      </motion.div>

      {/* ── Decorative floating blobs ── */}
      <div aria-hidden="true" className="pointer-events-none">
        {/* Top-right accent */}
        <div
          className="absolute top-20 right-10 w-72 h-72 rounded-full opacity-30 animate-blob"
          style={{
            background: 'radial-gradient(circle, rgba(192,57,43,0.15) 0%, transparent 70%)',
            filter:     'blur(30px)',
          }}
        />
        {/* Bottom-left accent */}
        <div
          className="absolute bottom-20 left-10 w-48 h-48 rounded-full opacity-20 animate-blob"
          style={{
            background:     'radial-gradient(circle, rgba(192,57,43,0.12) 0%, transparent 70%)',
            filter:         'blur(20px)',
            animationDelay: '3s',
          }}
        />
      </div>

    </section>
  )
}
