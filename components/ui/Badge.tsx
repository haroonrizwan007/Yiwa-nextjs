import { cn } from '@/lib/utils'

/* ============================================================
   BADGE
   Pill-shaped label with optional animated pulsing red dot.
   Server component.
   ============================================================ */

interface BadgeProps {
  children:   React.ReactNode
  dot?:       boolean        // show pulsing red dot on the left
  variant?:   'default' | 'red' | 'outline'
  className?: string
}

export default function Badge({
  children,
  dot      = false,
  variant  = 'default',
  className,
}: BadgeProps) {
  const variantStyles = {
    default: cn(
      'bg-[var(--color-surface-2)] text-[var(--color-text-muted)]',
      'border border-[var(--color-border)]'
    ),
    red: cn(
      'bg-brand-muted text-brand-primary',
      'border border-brand-primary/20'
    ),
    outline: cn(
      'bg-transparent text-brand-primary',
      'border border-brand-primary'
    ),
  }

  return (
    <span
      className={cn(
        'inline-flex items-center gap-2',
        'px-3 py-1.5 rounded-full',
        'text-xs font-semibold tracking-wide',
        variantStyles[variant],
        className
      )}
    >
      {dot && (
        <span className="relative flex h-1.5 w-1.5 shrink-0" aria-hidden="true">
          {/* Pulsing ring */}
          <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75" />
          {/* Solid dot */}
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-primary" />
        </span>
      )}
      {children}
    </span>
  )
}
