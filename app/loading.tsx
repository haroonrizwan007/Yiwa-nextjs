/* ============================================================
   LOADING PAGE
   Shown by Next.js while a page segment is loading.
   Branded spinner with YIWA logo mark.
   ============================================================ */

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[var(--color-bg)]">

      {/* Logo mark */}
      <div className="relative mb-8">
        {/* Outer spinning ring */}
        <div className="absolute inset-0 -m-3 rounded-2xl border-2 border-brand-primary/20 animate-spin-slow" />

        {/* Logo icon */}
        <div className="w-14 h-14 bg-brand-primary rounded-2xl flex items-center justify-center shadow-red">
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="2" y="7" width="20" height="14" rx="2" />
            <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
            <line x1="12" y1="12" x2="12" y2="17" />
            <line x1="9.5" y1="14.5" x2="14.5" y2="14.5" />
          </svg>
        </div>
      </div>

      {/* Brand name */}
      <div className="text-center">
        <p className="font-display font-bold text-base tracking-widest text-[var(--color-text)]">
          YIWA
        </p>
        <p className="text-[9px] font-semibold tracking-[0.3em] uppercase text-[var(--color-text-muted)] mt-0.5">
          Logistics
        </p>
      </div>

      {/* Loading dots */}
      <div className="flex items-center gap-1.5 mt-8" aria-label="Loading" role="status">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-bounce-subtle"
            style={{ animationDelay: `${i * 0.15}s` }}
            aria-hidden="true"
          />
        ))}
        <span className="sr-only">Loading…</span>
      </div>

    </div>
  )
}
