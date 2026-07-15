import { PARTNERS } from '@/lib/constants'
import { cn } from '@/lib/utils'

/* ============================================================
   PARTNER LOGO ITEM
   Text-based partner logo — clean, works without image assets.
   Grayscale (dimmed) by default, full opacity on hover.
   ============================================================ */

function PartnerLogo({ name }: { name: string }) {
  return (
    <div
      className={cn(
        'flex items-center justify-center shrink-0',
        'h-12 px-6 mx-4',
        'rounded-xl border border-[var(--color-border)]',
        'bg-[var(--color-surface)]',
        'opacity-50 hover:opacity-100',
        'transition-opacity duration-300',
        'cursor-default select-none'
      )}
    >
      <span className="text-sm font-semibold tracking-wide text-[var(--color-text-muted)] whitespace-nowrap">
        {name}
      </span>
    </div>
  )
}

/* ============================================================
   PARTNERS MARQUEE
   Pure CSS infinite scroll — no JS required.
   Duplicated array for seamless loop.
   Pauses on hover via .pause-on-hover CSS class.
   ============================================================ */

export default function PartnersMarquee() {
  // Duplicate partners for seamless marquee loop
  const track = [...PARTNERS, ...PARTNERS]

  return (
    <section
      aria-label="Trusted partners"
      className="py-12 border-y border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden"
    >
      {/* Heading */}
      <p className="text-center text-[10px] font-semibold tracking-[0.3em] uppercase text-[var(--color-text-subtle)] mb-8 px-4">
        Trusted by leading logistics &amp; manufacturing partners
      </p>

      {/* Marquee track */}
      <div className="relative pause-on-hover">
        {/* Fade edges */}
        <div
          aria-hidden="true"
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to right, var(--color-surface), transparent)',
          }}
        />
        <div
          aria-hidden="true"
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to left, var(--color-surface), transparent)',
          }}
        />

        {/* Scrolling track */}
        <div
          className="flex animate-marquee"
          aria-hidden="true"   // decorative; actual content not meaningful to screen readers
        >
          {track.map((partner, i) => (
            <PartnerLogo key={`${partner.name}-${i}`} name={partner.name} />
          ))}
        </div>
      </div>

      {/* Screen-reader-only list of partners */}
      <ul className="sr-only" aria-label="Partner list">
        {PARTNERS.map((p) => (
          <li key={p.name}>{p.name}</li>
        ))}
      </ul>
    </section>
  )
}
