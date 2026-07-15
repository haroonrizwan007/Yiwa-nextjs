'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

/* ============================================================
   PROPS
   ============================================================ */

interface CardProps {
  children:    React.ReactNode
  className?:  string
  hoverEffect?: 'lift' | 'lift-red' | 'none'
  padding?:    'sm' | 'md' | 'lg' | 'none'
  onClick?:    () => void
  as?:         'div' | 'article' | 'li'
}

/* ============================================================
   STYLE MAPS
   ============================================================ */

const paddingStyles = {
  none: '',
  sm:   'p-4',
  md:   'p-6',
  lg:   'p-8',
}

/* Framer Motion hover targets per effect */
const hoverTargets = {
  'lift':     { y: -6, boxShadow: '0 12px 40px rgba(0,0,0,0.15)' },
  'lift-red': { y: -6, boxShadow: '0 8px 30px rgba(192,57,43,0.25)' },
  'none':     {},
}

const tapTargets = {
  'lift':     { scale: 0.99 },
  'lift-red': { scale: 0.99 },
  'none':     {},
}

/* ============================================================
   COMPONENT
   ============================================================ */

export default function Card({
  children,
  className,
  hoverEffect = 'lift',
  padding     = 'md',
  onClick,
  as: Tag     = 'div',
}: CardProps) {
  const isInteractive = !!onClick || hoverEffect !== 'none'

  return (
    <motion.div
      // Cast to the desired tag via style/class — motion.div is fine structurally
      whileHover={hoverEffect !== 'none' ? hoverTargets[hoverEffect] : undefined}
      whileTap={isInteractive ? tapTargets[hoverEffect] : undefined}
      transition={{ duration: 0.25, type: 'tween' }}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={
        onClick
          ? (e) => { if (e.key === 'Enter' || e.key === ' ') onClick() }
          : undefined
      }
      className={cn(
        /* Base card */
        'relative rounded-2xl overflow-hidden',
        'bg-[var(--color-surface)]',
        'border border-[var(--color-border)]',
        'shadow-card',
        /* Hover border transition (CSS — GSAP handles boxShadow above) */
        hoverEffect === 'lift-red' && 'hover:border-brand-primary/50',
        hoverEffect !== 'none' && 'cursor-default',
        onClick && 'cursor-pointer',
        paddingStyles[padding],
        className
      )}
    >
      {children}
    </motion.div>
  )
}
