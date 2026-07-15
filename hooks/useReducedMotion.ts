'use client'

import { useEffect, useState } from 'react'

/* ============================================================
   useReducedMotion
   Returns true if the user has requested reduced motion via
   the OS accessibility setting.

   Usage:
     const prefersReduced = useReducedMotion()
     // skip expensive animations when true
   ============================================================ */

export function useReducedMotion(): boolean {
  const [prefersReduced, setPrefersReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReduced(mq.matches)

    const onChange = (e: MediaQueryListEvent) => setPrefersReduced(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return prefersReduced
}
