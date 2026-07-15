'use client'

import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import { TESTIMONIALS } from '@/lib/constants'
import { cn } from '@/lib/utils'

import 'swiper/css'
import 'swiper/css/pagination'

/* ============================================================
   STAR RATING
   ============================================================ */

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          aria-hidden="true"
          className={i < rating ? 'text-amber-400' : 'text-[var(--color-border-strong)]'}
        >
          <polygon
            points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
            fill="currentColor"
          />
        </svg>
      ))}
    </div>
  )
}

/* ============================================================
   AVATAR — initials-based (no image dependency)
   ============================================================ */

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  // Deterministic hue from name string
  const hue = name.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0) % 360

  return (
    <div
      className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 font-semibold text-white text-sm"
      style={{ background: `hsl(${hue}, 60%, 45%)` }}
      aria-hidden="true"
    >
      {initials}
    </div>
  )
}

/* ============================================================
   TESTIMONIAL CARD
   ============================================================ */

function TestimonialCard({ testimonial }: { testimonial: (typeof TESTIMONIALS)[number] }) {
  return (
    <article
      className={cn(
        'relative h-full flex flex-col',
        'p-6 rounded-2xl',
        'bg-[var(--color-surface)] border border-[var(--color-border)]',
        'select-none'
      )}
      aria-label={`Testimonial from ${testimonial.name}`}
    >
      {/* Quote icon */}
      <div className="mb-4">
        <div className="w-9 h-9 rounded-xl bg-brand-muted flex items-center justify-center">
          <Quote size={16} className="text-brand-primary" aria-hidden="true" />
        </div>
      </div>

      {/* Stars */}
      <StarRating rating={testimonial.rating} />

      {/* Quote text */}
      <blockquote className="mt-4 text-sm text-[var(--color-text-muted)] leading-relaxed flex-1 italic">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      {/* Author */}
      <footer className="mt-6 pt-5 border-t border-[var(--color-border)] flex items-center gap-3">
        <Avatar name={testimonial.name} />
        <div>
          <p className="text-sm font-semibold text-[var(--color-text)]">{testimonial.name}</p>
          <p className="text-xs text-[var(--color-text-muted)] mt-0.5">
            {testimonial.title} · {testimonial.company}
          </p>
        </div>
      </footer>
    </article>
  )
}

/* ============================================================
   TESTIMONIALS SECTION
   ============================================================ */

export default function Testimonials() {
  const swiperRef = useRef<SwiperType | null>(null)

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="section-padding bg-[var(--color-bg)] overflow-hidden"
    >
      <div className="container-site">

        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, type: 'tween' }}
          >
            <SectionHeading
              eyebrow="TESTIMONIALS"
              heading="What Our Clients Say"
              align="left"
            />
          </motion.div>

          {/* Custom navigation arrows */}
          <motion.div
            className="flex items-center gap-2 shrink-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="Previous testimonial"
              className={cn(
                'w-10 h-10 rounded-xl flex items-center justify-center',
                'border border-[var(--color-border)] text-[var(--color-text-muted)]',
                'hover:border-brand-primary hover:text-brand-primary hover:bg-brand-muted',
                'transition-all duration-200',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary'
              )}
            >
              <ChevronLeft size={18} aria-hidden="true" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              aria-label="Next testimonial"
              className={cn(
                'w-10 h-10 rounded-xl flex items-center justify-center',
                'border border-[var(--color-border)] text-[var(--color-text-muted)]',
                'hover:border-brand-primary hover:text-brand-primary hover:bg-brand-muted',
                'transition-all duration-200',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary'
              )}
            >
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          </motion.div>
        </div>

        {/* Swiper carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ delay: 0.1, duration: 0.65, type: 'tween' }}
        >
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            onSwiper={(swiper) => { swiperRef.current = swiper }}
            slidesPerView={1}
            spaceBetween={20}
            loop
            autoplay={{ delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            pagination={{ clickable: true, el: '.testimonials-pagination' }}
            breakpoints={{
              640:  { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
            className="!pb-2"
            aria-label="Client testimonials carousel"
          >
            {TESTIMONIALS.map((t) => (
              <SwiperSlide key={t.name} className="h-auto">
                <TestimonialCard testimonial={t} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination dots */}
          <div className="testimonials-pagination flex justify-center gap-1.5 mt-8 [&_.swiper-pagination-bullet]:w-2 [&_.swiper-pagination-bullet]:h-2 [&_.swiper-pagination-bullet]:rounded-full [&_.swiper-pagination-bullet]:bg-[var(--color-border-strong)] [&_.swiper-pagination-bullet]:opacity-100 [&_.swiper-pagination-bullet-active]:bg-brand-primary [&_.swiper-pagination-bullet-active]:w-5 [&_.swiper-pagination-bullet]:transition-all [&_.swiper-pagination-bullet]:duration-300" />
        </motion.div>

      </div>
    </section>
  )
}
