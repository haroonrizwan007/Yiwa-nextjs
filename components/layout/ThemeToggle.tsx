'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ThemeToggleProps {
  className?: string
}

export default function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch — only render icon after mount
  useEffect(() => setMounted(true), [])

  const isDark = theme === 'dark'

  const toggle = () => setTheme(isDark ? 'light' : 'dark')

  return (
    <button
      onClick={mounted ? toggle : undefined}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={cn(
        'relative w-10 h-10 flex items-center justify-center rounded-lg',
        'text-[var(--color-text-muted)] hover:text-[var(--color-text)]',
        'hover:bg-[var(--color-surface-2)] transition-colors duration-200',
        'focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:outline-none',
        className
      )}
    >
      {/* Reserve space before mount to prevent layout shift */}
      {!mounted && <div className="w-[18px] h-[18px]" />}

      <AnimatePresence mode="wait" initial={false}>
        {mounted && isDark && (
          <motion.div
            key="sun"
            initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
            animate={{ rotate: 0,   opacity: 1, scale: 1   }}
            exit={{    rotate: 90,  opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.18, ease: 'easeInOut' }}
          >
            <Sun size={18} aria-hidden="true" />
          </motion.div>
        )}

        {mounted && !isDark && (
          <motion.div
            key="moon"
            initial={{ rotate: 90,  opacity: 0, scale: 0.6 }}
            animate={{ rotate: 0,   opacity: 1, scale: 1   }}
            exit={{    rotate: -90, opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.18, ease: 'easeInOut' }}
          >
            <Moon size={18} aria-hidden="true" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  )
}
