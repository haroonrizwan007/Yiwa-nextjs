import { cn } from '@/lib/utils'

/* ============================================================
   GRID BACKGROUND
   Decorative full-cover background with:
   - Subtle SVG grid lines
   - Optional red radial glow blobs
   - Optional dot pattern overlay
   Server component — purely CSS/SVG, no JS.
   ============================================================ */

interface GridBackgroundProps {
  variant?:    'grid' | 'dots' | 'both'
  glow?:       boolean            // show the red radial gradient glow
  glowPos?:    'bl' | 'br' | 'tl' | 'tr' | 'center'
  className?:  string
  children?:   React.ReactNode
}

const glowPositions = {
  bl:     'bottom-0 left-0',
  br:     'bottom-0 right-0',
  tl:     'top-0 left-0',
  tr:     'top-0 right-0',
  center: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
}

export default function GridBackground({
  variant  = 'grid',
  glow     = true,
  glowPos  = 'bl',
  className,
  children,
}: GridBackgroundProps) {
  return (
    <div className={cn('relative overflow-hidden', className)}>

      {/* ── Grid lines ── */}
      {(variant === 'grid' || variant === 'both') && (
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(var(--color-border) 1px, transparent 1px),
              linear-gradient(90deg, var(--color-border) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            opacity: 0.5,
          }}
        />
      )}

      {/* ── Dot pattern ── */}
      {(variant === 'dots' || variant === 'both') && (
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none bg-dot-pattern"
          style={{ opacity: 0.6 }}
        />
      )}

      {/* ── Red radial glow blob ── */}
      {glow && (
        <div
          aria-hidden="true"
          className={cn(
            'absolute pointer-events-none',
            'w-[600px] h-[600px] rounded-full',
            glowPositions[glowPos],
            '-translate-x-1/4 translate-y-1/4'
          )}
          style={{
            background:
              'radial-gradient(circle, rgba(192,57,43,0.12) 0%, rgba(192,57,43,0.04) 50%, transparent 75%)',
            filter: 'blur(40px)',
          }}
        />
      )}

      {/* ── Vignette fade at edges (blends into page bg) ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 60%, var(--color-bg) 100%)',
        }}
      />

      {/* Content */}
      {children && (
        <div className="relative z-10">{children}</div>
      )}
    </div>
  )
}
