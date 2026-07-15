'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUp, ArrowRight, MessageCircle, Mail, MapPin } from 'lucide-react'
import { FOOTER_COLUMNS } from '@/lib/constants'
import { cn } from '@/lib/utils'

/* ============================================================
   SOCIAL ICONS — inline SVG (brand icons not in lucide-react v1)
   ============================================================ */

function IconFacebook() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function IconInstagram() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function IconLinkedin() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function IconWhatsApp() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  )
}

const SOCIAL_LINKS = [
  { label: 'Facebook',  href: 'https://facebook.com/yiwalogistics',  Icon: IconFacebook  },
  { label: 'Instagram', href: 'https://instagram.com/yiwalogistics', Icon: IconInstagram },
  { label: 'LinkedIn',  href: 'https://linkedin.com/company/yiwa',   Icon: IconLinkedin  },
  { label: 'WhatsApp',  href: 'https://wa.me/923001234567',           Icon: IconWhatsApp  },
]

/* ============================================================
   NEWSLETTER FORM
   ============================================================ */

function NewsletterForm() {
  const [email,     setEmail]     = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <motion.p
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-sm font-medium text-brand-primary"
      >
        ✓ You&apos;re subscribed! We&apos;ll be in touch soon.
      </motion.p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        className={cn(
          'flex-1 sm:w-64 px-4 py-2.5 rounded-xl text-sm',
          'bg-[var(--color-surface-2)] border border-[var(--color-border)]',
          'text-[var(--color-text)] placeholder:text-[var(--color-text-subtle)]',
          'focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary',
          'transition-colors duration-200'
        )}
      />
      <button
        type="submit"
        className={cn(
          'inline-flex items-center justify-center gap-2',
          'px-5 py-2.5 rounded-xl shrink-0',
          'bg-brand-primary hover:bg-brand-primary-dark',
          'text-white text-sm font-semibold',
          'shadow-red transition-all duration-200 hover:-translate-y-0.5 hover:shadow-red-lg',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2'
        )}
      >
        Subscribe
        <ArrowRight size={14} aria-hidden="true" />
      </button>
    </form>
  )
}

/* ============================================================
   FOOTER LOGO
   ============================================================ */

function FooterLogo() {
  return (
    <Link href="/" className="inline-flex items-center gap-2.5 group" aria-label="YIWA Logistics home">
      <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center shadow-red transition-transform duration-200 group-hover:scale-105">
        <svg
          width="18"
          height="18"
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
      <div className="leading-none">
        <span className="block font-display font-bold text-[15px] tracking-wide text-[var(--color-text)]">
          YIWA
        </span>
        <span className="block text-[9px] font-semibold tracking-[0.22em] text-[var(--color-text-muted)] uppercase mt-0.5">
          Logistics
        </span>
      </div>
    </Link>
  )
}

/* ============================================================
   BACK TO TOP BUTTON
   ============================================================ */

function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className={cn(
        'w-10 h-10 flex items-center justify-center rounded-lg shrink-0',
        'border border-[var(--color-border)] text-[var(--color-text-muted)]',
        'hover:border-brand-primary hover:text-brand-primary hover:bg-brand-muted',
        'transition-all duration-200',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary'
      )}
    >
      <ArrowUp size={14} aria-hidden="true" />
    </button>
  )
}

/* ============================================================
   MAIN FOOTER
   ============================================================ */

export default function Footer() {
  return (
    <footer
      className="bg-[var(--color-surface)] border-t border-[var(--color-border)]"
      aria-label="Site footer"
    >

      {/* ── NEWSLETTER STRIP ─────────────────────────────────── */}
      <div className="border-b border-[var(--color-border)]">
        <div className="container-site py-10 md:py-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="font-display font-bold text-xl md:text-2xl text-[var(--color-text)]">
                Stay ahead of the market
              </h2>
              <p className="text-sm text-[var(--color-text-muted)] mt-1.5">
                Get weekly sourcing tips, market updates, and exclusive deals.
              </p>
            </div>
            <NewsletterForm />
          </div>
        </div>
      </div>

      {/* ── MAIN GRID ─────────────────────────────────────────── */}
      <div className="container-site py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-10">

          {/* Column 1 — Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <FooterLogo />

            <p className="mt-4 text-sm text-[var(--color-text-muted)] leading-relaxed max-w-xs">
              Professional sourcing, freight forwarding, and door-to-door delivery from China to
              Pakistan. Import with confidence.
            </p>

            {/* Contact details */}
            <ul className="mt-5 space-y-2.5" aria-label="Contact information">
              <li className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]">
                <Mail size={14} className="mt-0.5 shrink-0 text-brand-primary" aria-hidden="true" />
                <a
                  href="mailto:info@yiwalogistics.com"
                  className="hover:text-[var(--color-text)] transition-colors"
                >
                  info@yiwalogistics.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]">
                <MessageCircle size={14} className="mt-0.5 shrink-0 text-brand-primary" aria-hidden="true" />
                <a
                  href="https://wa.me/923001234567"
                  className="hover:text-[var(--color-text)] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +92 300 123 4567
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]">
                <MapPin size={14} className="mt-0.5 shrink-0 text-brand-primary" aria-hidden="true" />
                <span>Yiwu, China &amp; Lahore, Pakistan</span>
              </li>
            </ul>

            {/* Social icons */}
            <div className="flex items-center gap-2 mt-6" aria-label="Social media links">
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={cn(
                    'w-9 h-9 flex items-center justify-center rounded-lg',
                    'border border-[var(--color-border)]',
                    'text-[var(--color-text-muted)] hover:text-brand-primary',
                    'hover:border-brand-primary hover:bg-brand-muted',
                    'transition-all duration-200'
                  )}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Columns 2–5 — Link columns from constants */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.heading}>
              <h3 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-4">
                {col.heading}
              </h3>
              <ul className="space-y-2.5" role="list">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className={cn(
                        'text-sm text-[var(--color-text-muted)]',
                        'hover:text-[var(--color-text)] hover:translate-x-0.5',
                        'transition-all duration-200 inline-block'
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>

      {/* ── BOTTOM BAR ────────────────────────────────────────── */}
      <div className="border-t border-[var(--color-border)]">
        <div className="container-site py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

            {/* Left: Back to top + Copyright */}
            <div className="flex items-center gap-3">
              <BackToTop />
              <p className="text-xs text-[var(--color-text-subtle)]">
                © {new Date().getFullYear()} Yiwa Logistics. All rights reserved.
              </p>
            </div>

            {/* Right: Legal links */}
            <nav aria-label="Legal links">
              <ul className="flex items-center gap-1" role="list">
                {[
                  { label: 'Privacy Policy',   href: '/privacy' },
                  { label: 'Terms of Service', href: '/terms' },
                  { label: 'Cookie Policy',    href: '/cookies' },
                ].map((link, i, arr) => (
                  <li key={link.label} className="flex items-center">
                    <Link
                      href={link.href}
                      className="text-xs text-[var(--color-text-subtle)] hover:text-[var(--color-text)] px-2 transition-colors"
                    >
                      {link.label}
                    </Link>
                    {i < arr.length - 1 && (
                      <span className="text-[var(--color-border-strong)] text-xs" aria-hidden="true">
                        ·
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

          </div>
        </div>
      </div>

    </footer>
  )
}
