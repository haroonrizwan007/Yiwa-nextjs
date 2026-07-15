'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { fadeUp } from '@/lib/animations'

/* ============================================================
   STAGGER CONTAINER
   Framer Motion parent that triggers staggered child animations.
   Children should use the `motion` component with `variants`
   prop set to a child variant (e.g. `fadeUp` from lib/animations).

   @example
   <StaggerContainer className="grid grid-cols-3 gap-6">
     {items.map(item => (
       <motion.div key={item.id} variants={fadeUp}>
         <Card>...</Card>
       </motion.div>
     ))}
   </StaggerContainer>
   ============================================================ */

interface StaggerContainerProps {
  children:    React.ReactNode
  className?:  string
  /** Delay between each child animation (seconds) */
  stagger?:    number
  /** Delay before the first child starts (seconds) */
  delayChildren?: number
  /** Use IntersectionObserver to trigger only when in view */
  viewport?:   boolean
  /** Margin around the viewport trigger (CSS margin syntax) */
  viewportMargin?: string
  as?:         'div' | 'ul' | 'ol' | 'section'
}

export default function StaggerContainer({
  children,
  className,
  stagger         = 0.08,
  delayChildren   = 0.1,
  viewport        = true,
  viewportMargin  = '-80px',
  as: Tag         = 'div',
}: StaggerContainerProps) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren,
      },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      {...(viewport
        ? { whileInView: 'visible', viewport: { once: true, margin: viewportMargin } }
        : { animate: 'visible' }
      )}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}

/* ============================================================
   STAGGER ITEM
   Convenience wrapper — use as a child of StaggerContainer.
   Automatically picks up the parent's stagger timing.

   @example
   <StaggerContainer>
     <StaggerItem><Card>...</Card></StaggerItem>
     <StaggerItem><Card>...</Card></StaggerItem>
   </StaggerContainer>
   ============================================================ */

interface StaggerItemProps {
  children:   React.ReactNode
  className?: string
  /** Override the default fadeUp variant */
  variants?:  typeof fadeUp
}

export function StaggerItem({ children, className, variants = fadeUp }: StaggerItemProps) {
  return (
    <motion.div variants={variants} className={cn(className)}>
      {children}
    </motion.div>
  )
}
