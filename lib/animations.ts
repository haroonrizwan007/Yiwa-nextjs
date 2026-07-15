import type { Variants } from 'framer-motion'

/* ============================================================
   FRAMER MOTION VARIANTS
   Reusable animation variants for use with motion components.
   ============================================================ */

/** Standard fade-up entrance */
export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
}

/** Fade in (no movement) */
export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

/** Scale in from slightly smaller */
export const scaleIn: Variants = {
  hidden:  { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] },
  },
}

/** Slide in from left */
export const slideInLeft: Variants = {
  hidden:  { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
}

/** Slide in from right */
export const slideInRight: Variants = {
  hidden:  { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
}

/** Stagger container — wraps children that use any of the above variants */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren:  0.08,
      delayChildren:    0.1,
    },
  },
}

/** Stagger container (slower — for large grids) */
export const staggerContainerSlow: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren:   0.15,
    },
  },
}

/** Card hover effect (use with whileHover) */
export const cardHover = {
  y: -6,
  boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
  transition: { duration: 0.3, ease: 'easeOut' },
}

/** Card hover with red border glow (use with whileHover) */
export const cardHoverRed = {
  y: -6,
  boxShadow: '0 8px 30px rgba(192,57,43,0.25)',
  transition: { duration: 0.3, ease: 'easeOut' },
}

/** Button press (use with whileTap) */
export const buttonTap = {
  scale: 0.97,
  transition: { duration: 0.1 },
}

/** Accordion content */
export const accordionContent: Variants = {
  hidden: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
  visible: {
    height: 'auto',
    opacity: 1,
    transition: { duration: 0.35, ease: 'easeInOut' },
  },
}

/* ============================================================
   GSAP DEFAULTS
   Consistent GSAP settings used across ScrollTrigger animations.
   ============================================================ */

export const GSAP_DEFAULTS = {
  ease:     'power3.out',
  duration: 0.8,
} as const

/** Standard ScrollTrigger config for section reveals */
export const SCROLL_TRIGGER_DEFAULTS = {
  start:         'top 85%',
  end:           'bottom 20%',
  toggleActions: 'play none none reverse',
} as const

/** ScrollTrigger config for pinned/scrub animations */
export const SCROLL_TRIGGER_SCRUB = {
  start:  'top top',
  end:    'bottom top',
  scrub:  1,
} as const

/** GSAP from-state for standard fade-up */
export const GSAP_FADE_UP_FROM = {
  y:       40,
  opacity: 0,
  duration: 0.8,
  ease:    'power3.out',
} as const

/** GSAP stagger config for card grids */
export const GSAP_STAGGER = {
  amount:   0.4,
  from:     'start' as const,
  ease:     'power2.out',
}
