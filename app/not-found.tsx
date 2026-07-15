import Link from 'next/link'
import { ArrowLeft, Package } from 'lucide-react'

/* ============================================================
   404 NOT FOUND PAGE
   ============================================================ */

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--color-bg)] px-4">

      {/* Large 404 */}
      <div className="relative mb-8 select-none" aria-hidden="true">
        <span
          className="font-display font-bold text-[8rem] sm:text-[12rem] leading-none text-[var(--color-surface-2)]"
        >
          404
        </span>
        {/* Logo overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-brand-primary rounded-2xl flex items-center justify-center shadow-red">
            <Package size={30} className="text-white" aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* Message */}
      <div className="text-center max-w-md">
        <h1 className="font-display font-bold text-2xl sm:text-3xl text-[var(--color-text)] mb-3">
          Page Not Found
        </h1>
        <p className="text-[var(--color-text-muted)] text-sm sm:text-base leading-relaxed">
          Looks like this shipment got lost in transit. The page you&apos;re looking for
          doesn&apos;t exist or has been moved.
        </p>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3 mt-10">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-brand-primary text-white shadow-red hover:bg-brand-primary-dark hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
        >
          <ArrowLeft size={15} aria-hidden="true" />
          Back to Home
        </Link>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-brand-primary hover:text-brand-primary hover:bg-brand-muted transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
        >
          Contact Us
        </Link>
      </div>

      {/* Brand */}
      <p className="mt-16 text-xs text-[var(--color-text-subtle)] tracking-widest uppercase">
        YIWA Logistics
      </p>

    </div>
  )
}
