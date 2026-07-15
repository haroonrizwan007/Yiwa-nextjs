'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { ButtonVariant, ButtonSize } from '@/types'

/* ============================================================
   STYLE MAPS
   ============================================================ */

const variantStyles: Record<ButtonVariant, string> = {
  primary: cn(
    'bg-brand-primary hover:bg-brand-primary-dark',
    'text-white shadow-red hover:shadow-red-lg',
    'border border-transparent'
  ),
  outline: cn(
    'bg-transparent hover:bg-brand-muted',
    'text-brand-primary border border-brand-primary',
    'hover:shadow-red'
  ),
  ghost: cn(
    'bg-transparent hover:bg-[var(--color-surface-2)]',
    'text-[var(--color-text-muted)] hover:text-[var(--color-text)]',
    'border border-transparent'
  ),
  white: cn(
    'bg-white hover:bg-gray-100',
    'text-brand-primary border border-transparent',
    'shadow-hover'
  ),
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-xs rounded-lg  gap-1.5',
  md: 'px-5 py-2.5 text-sm rounded-xl gap-2',
  lg: 'px-7 py-3.5 text-base rounded-xl gap-2.5',
}

/* ============================================================
   PROPS
   ============================================================ */

interface ButtonProps {
  variant?:   ButtonVariant
  size?:      ButtonSize
  href?:      string
  onClick?:   () => void
  disabled?:  boolean
  loading?:   boolean
  type?:      'button' | 'submit' | 'reset'
  ariaLabel?: string
  className?: string
  children:   React.ReactNode
  external?:  boolean   // open href in new tab
}

/* ============================================================
   COMPONENT
   ============================================================ */

export default function Button({
  variant   = 'primary',
  size      = 'md',
  href,
  onClick,
  disabled  = false,
  loading   = false,
  type      = 'button',
  ariaLabel,
  className,
  children,
  external  = false,
}: ButtonProps) {
  const isDisabled = disabled || loading

  const baseClass = cn(
    'inline-flex items-center justify-center font-semibold',
    'transition-all duration-200 focus-visible:outline-none',
    'focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2',
    variantStyles[variant],
    sizeStyles[size],
    isDisabled && 'opacity-50 cursor-not-allowed pointer-events-none',
    className
  )

  const content = (
    <>
      {loading && (
        <Loader2
          size={size === 'sm' ? 12 : size === 'lg' ? 18 : 14}
          className="animate-spin shrink-0"
          aria-hidden="true"
        />
      )}
      {children}
    </>
  )

  /* Render as Next.js Link when href is provided */
  if (href && !isDisabled) {
    return (
      <motion.div
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.1 }}
        className="inline-flex"
      >
        <Link
          href={href}
          className={baseClass}
          aria-label={ariaLabel}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {content}
        </Link>
      </motion.div>
    )
  }

  /* Render as <button> */
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      aria-label={ariaLabel}
      aria-busy={loading}
      whileTap={isDisabled ? undefined : { scale: 0.97 }}
      transition={{ duration: 0.1 }}
      className={baseClass}
    >
      {content}
    </motion.button>
  )
}
