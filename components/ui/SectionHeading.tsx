import { cn } from '@/lib/utils'
import type { SectionHeadingProps } from '@/types'

/* ============================================================
   SECTION HEADING
   Eyebrow (red, tracked caps) → H2 (display font) → Description
   Supports left and center alignment.
   Server component — no 'use client' needed.
   ============================================================ */

export default function SectionHeading({
  eyebrow,
  heading,
  description,
  align      = 'left',
  className,
}: SectionHeadingProps) {
  const isCenter = align === 'center'

  return (
    <div
      className={cn(
        'max-w-3xl',
        isCenter && 'mx-auto text-center',
        className
      )}
    >
      {/* Eyebrow */}
      {eyebrow && (
        <p className="eyebrow mb-3">
          {eyebrow}
        </p>
      )}

      {/* Heading */}
      <h2
        className={cn(
          'font-display font-bold text-[var(--color-text)]',
          'text-3xl sm:text-4xl lg:text-5xl',
          'leading-[1.15] tracking-tight'
        )}
      >
        {heading}
      </h2>

      {/* Description */}
      {description && (
        <p
          className={cn(
            'mt-4 text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed',
            isCenter ? 'max-w-2xl mx-auto' : 'max-w-xl'
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
