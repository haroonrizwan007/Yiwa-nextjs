'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ArrowRight, MessageCircle } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { FAQ_ITEMS } from '@/lib/constants'
import { cn } from '@/lib/utils'

/* ============================================================
   ACCORDION ITEM
   ============================================================ */

function AccordionItem({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: (typeof FAQ_ITEMS)[number]
  index: number
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <motion.div
      className={cn(
        'border rounded-xl overflow-hidden transition-colors duration-200',
        isOpen
          ? 'border-brand-primary/50 bg-brand-muted/40'
          : 'border-[var(--color-border)] bg-[var(--color-surface-2)] hover:border-[var(--color-border-strong)]'
      )}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ delay: index * 0.06, duration: 0.5, type: 'tween' }}
    >
      {/* Question button */}
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        id={`faq-question-${index}`}
        className={cn(
          'w-full flex items-center justify-between gap-4',
          'px-5 py-4 text-left',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-inset'
        )}
      >
        <span
          className={cn(
            'text-sm font-semibold leading-snug',
            isOpen ? 'text-brand-primary' : 'text-[var(--color-text)]'
          )}
        >
          {item.question}
        </span>

        {/* Animated chevron */}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, type: 'tween' }}
          className="shrink-0 text-[var(--color-text-muted)]"
          aria-hidden="true"
        >
          <ChevronDown size={18} />
        </motion.div>
      </button>

      {/* Answer — animated expand/collapse */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${index}`}
            role="region"
            aria-labelledby={`faq-question-${index}`}
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, type: 'tween' }}
            style={{ overflow: 'hidden' }}
          >
            <div className="px-5 pb-5">
              {/* Red left border accent */}
              <div className="pl-4 border-l-2 border-brand-primary">
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

/* ============================================================
   FAQ SECTION
   ============================================================ */

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(5) // last item open by default

  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? -1 : i))

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="section-padding bg-[var(--color-surface)]"
    >
      <div className="container-site">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-12 xl:gap-20 items-start">

          {/* ── LEFT: heading + CTA ── */}
          <div className="lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, type: 'tween' }}
            >
              <SectionHeading
                eyebrow="FAQ"
                heading="Frequently Asked Questions"
                description="Everything you need to know about sourcing and importing from China. Can't find your answer?"
                align="left"
              />

              <Link
                href="/contact"
                className={cn(
                  'inline-flex items-center gap-2 mt-6 group',
                  'px-5 py-3 rounded-xl text-sm font-semibold',
                  'bg-[var(--color-surface-2)] border border-[var(--color-border)]',
                  'text-[var(--color-text)] hover:border-brand-primary hover:text-brand-primary hover:bg-brand-muted',
                  'transition-all duration-200',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary'
                )}
              >
                <MessageCircle size={15} aria-hidden="true" />
                Contact Our Team
                <ArrowRight
                  size={14}
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </Link>

              {/* Quick stats */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { value: '< 2h',   label: 'Average response time' },
                  { value: '24/7',   label: 'WhatsApp support' },
                ].map(({ value, label }) => (
                  <div
                    key={label}
                    className="p-4 rounded-xl bg-brand-muted border border-brand-primary/20 text-center"
                  >
                    <p className="font-display font-bold text-xl text-brand-primary">{value}</p>
                    <p className="text-xs text-[var(--color-text-muted)] mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT: accordion ── */}
          <div
            className="space-y-3"
            role="list"
            aria-label="Frequently asked questions"
          >
            {FAQ_ITEMS.map((item, i) => (
              <div key={item.question} role="listitem">
                <AccordionItem
                  item={item}
                  index={i}
                  isOpen={openIndex === i}
                  onToggle={() => toggle(i)}
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
