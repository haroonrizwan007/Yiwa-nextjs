'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import { NAV_LINKS } from '@/lib/constants'
import { cn } from '@/lib/utils'
import ThemeToggle from './ThemeToggle'

/* ============================================================
   LOGO
   ============================================================ */

function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className="flex items-center gap-2.5 shrink-0 group"
      aria-label="YIWA Logistics — home"
    >
      <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center shadow-red transition-transform duration-200 group-hover:scale-105">
        <svg
          width="18" height="18" viewBox="0 0 24 24"
          fill="none" stroke="white" strokeWidth="2.5"
          strokeLinecap="round" strokeLinejoin="round"
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
   MAIN NAVBAR
   ============================================================ */

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <>
      {/* ── NAVBAR ─────────────────────────────────────────────── */}
      <nav
        role="navigation"
        aria-label="Main navigation"
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-[var(--color-bg)]/90 backdrop-blur-md border-b border-[var(--color-border)] shadow-card'
            : 'bg-transparent'
        )}
      >
        <div className="container-site">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <Logo />

            {/* Desktop nav links */}
            <ul className="hidden lg:flex items-center gap-0.5" role="list">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href
                return (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      aria-current={isActive ? 'page' : undefined}
                      className={cn(
                        'px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200',
                        isActive
                          ? 'text-brand-primary'
                          : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-2)]'
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>

            {/* Desktop actions */}
            <div className="hidden lg:flex items-center gap-2">
              <ThemeToggle />
              <Link
                href="/contact"
                className={cn(
                  'inline-flex items-center gap-1.5 px-5 py-2.5',
                  'bg-brand-primary hover:bg-brand-primary-dark',
                  'text-white text-sm font-semibold rounded-xl',
                  'shadow-red hover:shadow-red-lg hover:-translate-y-0.5',
                  'transition-all duration-200',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2'
                )}
              >
                Get Free Quote
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>

            {/* Mobile: ThemeToggle + hamburger */}
            <div className="flex lg:hidden items-center gap-1">
              <ThemeToggle />
              <button
                onClick={() => setMenuOpen((p) => !p)}
                aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                className={cn(
                  'w-10 h-10 flex items-center justify-center rounded-lg',
                  'text-[var(--color-text-muted)] hover:text-[var(--color-text)]',
                  'hover:bg-[var(--color-surface-2)] transition-colors duration-200',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary'
                )}
              >
                {/* Animated Menu ↔ X icon */}
                <AnimatePresence mode="wait" initial={false}>
                  {menuOpen ? (
                    <motion.div
                      key="x"
                      initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
                      animate={{ rotate: 0,   opacity: 1, scale: 1   }}
                      exit={{    rotate: 90,  opacity: 0, scale: 0.7 }}
                      transition={{ duration: 0.14 }}
                    >
                      <X size={20} aria-hidden="true" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90,  opacity: 0, scale: 0.7 }}
                      animate={{ rotate: 0,   opacity: 1, scale: 1   }}
                      exit={{    rotate: -90, opacity: 0, scale: 0.7 }}
                      transition={{ duration: 0.14 }}
                    >
                      <Menu size={20} aria-hidden="true" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* ── MOBILE MENU ────────────────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-[2px] lg:hidden"
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Panel */}
            <motion.div
              key="panel"
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0,   scale: 1    }}
              exit={{    opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.22, type: 'tween' }}
              className={cn(
                'fixed top-16 left-3 right-3 z-50 lg:hidden',
                'bg-[var(--color-surface)] border border-[var(--color-border)]',
                'rounded-2xl shadow-hover overflow-hidden'
              )}
            >
              <nav aria-label="Mobile navigation">
                <ul className="p-3 space-y-0.5" role="list">
                  {NAV_LINKS.map((link, i) => {
                    const isActive = pathname === link.href
                    return (
                      <motion.li
                        key={link.label}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.045, duration: 0.22, type: 'tween' }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setMenuOpen(false)}
                          aria-current={isActive ? 'page' : undefined}
                          className={cn(
                            'flex items-center justify-between px-4 py-3',
                            'rounded-xl text-sm font-medium transition-colors duration-150',
                            isActive
                              ? 'bg-brand-muted text-brand-primary'
                              : 'text-[var(--color-text)] hover:bg-[var(--color-surface-2)]'
                          )}
                        >
                          {link.label}
                          {isActive && (
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" aria-hidden="true" />
                          )}
                        </Link>
                      </motion.li>
                    )
                  })}
                </ul>

                {/* CTA */}
                <motion.div
                  className="p-3 pt-0"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: NAV_LINKS.length * 0.045 + 0.05, duration: 0.22, type: 'tween' }}
                >
                  <Link
                    href="/contact"
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      'flex items-center justify-center gap-2 w-full',
                      'px-5 py-3 rounded-xl',
                      'bg-brand-primary hover:bg-brand-primary-dark',
                      'text-white text-sm font-semibold shadow-red',
                      'transition-colors duration-200',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2'
                    )}
                  >
                    Get Free Quote
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
