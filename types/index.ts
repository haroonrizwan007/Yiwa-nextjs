import type { ElementType } from 'react'

/* ============================================================
   NAVIGATION
   ============================================================ */

export interface NavLink {
  label: string
  href:  string
}

/* ============================================================
   HERO
   ============================================================ */

export interface Stat {
  value:  number
  suffix: string
  label:  string
}

/* ============================================================
   PARTNERS MARQUEE
   ============================================================ */

export interface Partner {
  name: string
  logo: string
}

/* ============================================================
   WHY CHOOSE US
   ============================================================ */

export interface Feature {
  icon:        ElementType
  title:       string
  description: string
}

/* ============================================================
   SERVICES
   ============================================================ */

export interface Service {
  icon:        ElementType
  title:       string
  description: string
  href:        string
}

/* ============================================================
   HOW IT WORKS
   ============================================================ */

export interface Step {
  number:      string
  title:       string
  description: string
}

/* ============================================================
   MEMBERSHIP
   ============================================================ */

export interface MembershipPlan {
  name:        string
  price:       string
  period:      string
  description: string
  badge:       string | null
  features:    string[]
  cta:         string
  href:        string
  highlighted: boolean
}

/* ============================================================
   TESTIMONIALS
   ============================================================ */

export interface Testimonial {
  name:    string
  title:   string
  company: string
  avatar:  string
  rating:  1 | 2 | 3 | 4 | 5
  quote:   string
}

/* ============================================================
   FAQ
   ============================================================ */

export interface FAQItem {
  question: string
  answer:   string
}

/* ============================================================
   FOOTER
   ============================================================ */

export interface FooterLink {
  label: string
  href:  string
}

export interface FooterColumn {
  heading: string
  links:   FooterLink[]
}

export interface SocialLink {
  platform: string
  href:     string
  icon:     string
}

/* ============================================================
   SHARED UI COMPONENT PROPS
   ============================================================ */

export type ButtonVariant = 'primary' | 'outline' | 'ghost' | 'white'
export type ButtonSize    = 'sm' | 'md' | 'lg'

export interface ButtonProps {
  variant?:   ButtonVariant
  size?:      ButtonSize
  children:   React.ReactNode
  href?:      string
  className?: string
  onClick?:   () => void
  disabled?:  boolean
  loading?:   boolean
  type?:      'button' | 'submit' | 'reset'
  ariaLabel?: string
}

export type HeadingAlign = 'left' | 'center'

export interface SectionHeadingProps {
  eyebrow?:    string
  heading:     string
  description?: string
  align?:      HeadingAlign
  className?:  string
}
