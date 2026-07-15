'use client'

import { motion } from 'framer-motion'

/* ============================================================
   PAGE TEMPLATE
   Wraps every page route with a smooth entrance transition.
   Next.js re-mounts template.tsx on every navigation, making
   it the right place for per-page enter animations.
   ============================================================ */

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94], type: 'tween' }}
    >
      {children}
    </motion.div>
  )
}
