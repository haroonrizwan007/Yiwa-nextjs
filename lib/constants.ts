import type {
  NavLink,
  Service,
  Partner,
  Feature,
  Step,
  MembershipPlan,
  Testimonial,
  FAQItem,
  Stat,
  FooterColumn,
  SocialLink,
} from '@/types'
import {
  Search,
  UserCheck,
  Factory,
  Handshake,
  FlaskConical,
  ClipboardCheck,
  Plane,
  Ship,
  Package,
  ShieldCheck,
  Receipt,
  Headphones,
  BadgeCheck,
  Clock,
} from 'lucide-react'

/* ============================================================
   NAVIGATION
   ============================================================ */

export const NAV_LINKS: NavLink[] = [
  { label: 'Home',       href: '/' },
  { label: 'Services',   href: '/services' },
  { label: 'Membership', href: '/membership' },
  { label: 'About',      href: '/about' },
  { label: 'Resources',  href: '/resources' },
  { label: 'Contact',    href: '/contact' },
]

/* ============================================================
   HERO STATS
   ============================================================ */

export const HERO_STATS: Stat[] = [
  { value: 500,  suffix: '+', label: 'Shipments' },
  { value: 200,  suffix: '+', label: 'Clients' },
  { value: 98,   suffix: '%', label: 'Satisfaction' },
  { value: 24,   suffix: '/7', label: 'Support' },
]

/* ============================================================
   PARTNERS
   ============================================================ */

export const PARTNERS: Partner[] = [
  { name: 'Pakistan Customs',  logo: '/images/partners/pakistan-customs.svg' },
  { name: 'PSW',               logo: '/images/partners/psw.svg' },
  { name: 'Yiwu Market',       logo: '/images/partners/yiwu-market.svg' },
  { name: 'China Warehouse',   logo: '/images/partners/china-warehouse.svg' },
  { name: 'Alibaba',           logo: '/images/partners/alibaba.svg' },
  { name: '1688',              logo: '/images/partners/1688.svg' },
  { name: 'Made in China',     logo: '/images/partners/made-in-china.svg' },
  { name: 'DHL',               logo: '/images/partners/dhl.svg' },
  { name: 'FedEx',             logo: '/images/partners/fedex.svg' },
  { name: 'UPS',               logo: '/images/partners/ups.svg' },
  { name: 'COSCO',             logo: '/images/partners/cosco.svg' },
  { name: 'Maersk',            logo: '/images/partners/maersk.svg' },
]

/* ============================================================
   WHY CHOOSE US — FEATURES
   ============================================================ */

export const FEATURES: Feature[] = [
  {
    icon: Package,
    title: 'End-to-End Solutions',
    description: 'From sourcing to delivery, we manage every step of your China import journey.',
  },
  {
    icon: ShieldCheck,
    title: 'Verified Suppliers',
    description: 'We vet every supplier before you spend a single rupee on an order.',
  },
  {
    icon: Receipt,
    title: 'Transparent Pricing',
    description: 'No hidden fees — you get a full cost breakdown upfront, every time.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    description: 'Your personal import agent, available on WhatsApp whenever you need help.',
  },
  {
    icon: BadgeCheck,
    title: 'Quality Guaranteed',
    description: 'Every shipment is inspected before it leaves China to ensure your standards.',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'We track, manage, and deliver your cargo on schedule — no surprises.',
  },
]

/* ============================================================
   SERVICES
   ============================================================ */

export const SERVICES: Service[] = [
  {
    icon: Search,
    title: 'Product Sourcing',
    description: 'Find the right products at the right price in China\'s largest markets.',
    href: '/services#product-sourcing',
  },
  {
    icon: UserCheck,
    title: 'Supplier Verification',
    description: 'Thorough background checks on factories and trading companies.',
    href: '/services#supplier-verification',
  },
  {
    icon: Factory,
    title: 'Factory Visits',
    description: 'On-ground verification of manufacturing facilities before you commit.',
    href: '/services#factory-visits',
  },
  {
    icon: Handshake,
    title: 'Price Negotiation',
    description: 'Get the best deal with our experienced local negotiation team in China.',
    href: '/services#price-negotiation',
  },
  {
    icon: FlaskConical,
    title: 'Sample Inspection',
    description: 'Test and approve samples before placing your bulk orders.',
    href: '/services#sample-inspection',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Full QC check and detailed report before your shipment departs.',
    href: '/services#quality-inspection',
  },
  {
    icon: Plane,
    title: 'Air Freight',
    description: 'Fast, reliable air delivery for urgent or high-value cargo.',
    href: '/services#air-freight',
  },
  {
    icon: Ship,
    title: 'Sea Freight',
    description: 'Cost-effective FCL and LCL shipping for bulk and container loads.',
    href: '/services#sea-freight',
  },
]

/* ============================================================
   HOW IT WORKS — STEPS
   ============================================================ */

export const HOW_IT_WORKS_STEPS: Step[] = [
  {
    number: '01',
    title: 'Tell Us What You Need',
    description:
      'Share your product requirements, target quantity, and budget. We\'ll take it from there.',
  },
  {
    number: '02',
    title: 'We Source & Verify',
    description:
      'Our China-based team finds and vets the best suppliers that match your exact specifications.',
  },
  {
    number: '03',
    title: 'We Ship & Clear Customs',
    description:
      'We handle all freight booking, export documentation, and Pakistan customs clearance.',
  },
  {
    number: '04',
    title: 'Delivered to Your Door',
    description:
      'Final-mile delivery to your warehouse or business address anywhere in Pakistan.',
  },
]

/* ============================================================
   MEMBERSHIP PLANS
   ============================================================ */

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    name: 'Starter',
    price: 'PKR 2,999',
    period: '/year',
    description: 'Perfect for first-time importers looking to learn the ropes.',
    badge: null,
    features: [
      '1 sourcing request per month',
      'Basic verified supplier list',
      'Email support (48h response)',
      'Monthly market newsletter',
      'Webinar access (live only)',
      'Beginner import guides',
    ],
    cta: 'Get Started',
    href: '/membership#starter',
    highlighted: false,
  },
  {
    name: 'Business',
    price: 'PKR 7,999',
    period: '/year',
    description: 'For growing businesses that import regularly from China.',
    badge: 'MOST POPULAR',
    features: [
      '5 sourcing requests per month',
      'Full verified supplier directory',
      'Priority WhatsApp support',
      'Bi-weekly market reports',
      'All webinars + recordings',
      'Full guide & template library',
    ],
    cta: 'Join Now',
    href: '/membership#business',
    highlighted: true,
  },
  {
    name: 'Elite',
    price: 'PKR 14,999',
    period: '/year',
    description: 'For serious importers who want a dedicated partner in China.',
    badge: null,
    features: [
      'Unlimited sourcing requests',
      'Personal sourcing agent',
      '24/7 dedicated WhatsApp support',
      'Real-time market intelligence',
      'VIP event & trade fair invites',
      'Custom import strategy sessions',
    ],
    cta: 'Go Elite',
    href: '/membership#elite',
    highlighted: false,
  },
]

/* ============================================================
   TESTIMONIALS
   ============================================================ */

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Ahmed Raza',
    title: 'Importer',
    company: 'Lahore',
    avatar: '/images/testimonials/ahmed.jpg',
    rating: 5,
    quote:
      'Yiwa made my first China import completely stress-free. They handled everything from sourcing to delivery — I just confirmed the order and received it at my door.',
  },
  {
    name: 'Sara Khan',
    title: 'E-commerce Seller',
    company: 'Karachi',
    avatar: '/images/testimonials/sara.jpg',
    rating: 5,
    quote:
      'The supplier verification service saved me from a potential scam. Their team visited the factory and sent a detailed report before I paid a single rupee.',
  },
  {
    name: 'Bilal Mahmood',
    title: 'Retailer',
    company: 'Faisalabad',
    avatar: '/images/testimonials/bilal.jpg',
    rating: 5,
    quote:
      'Their sea freight pricing is unbeatable. My container arrived on time with zero damage. I\'ve been using Yiwa for 2 years and won\'t go anywhere else.',
  },
  {
    name: 'Fatima Zahra',
    title: 'Boutique Owner',
    company: 'Islamabad',
    avatar: '/images/testimonials/fatima.jpg',
    rating: 5,
    quote:
      'Quality inspection before shipment gave me total peace of mind. Every item was exactly as ordered, with a full QC report attached. Highly professional.',
  },
  {
    name: 'Usman Ali',
    title: 'Wholesale Trader',
    company: 'Multan',
    avatar: '/images/testimonials/usman.jpg',
    rating: 5,
    quote:
      'The membership club\'s sourcing guides alone are worth the price. I\'ve learned more about importing in 3 months than in 3 years of trial and error.',
  },
  {
    name: 'Nadia Iqbal',
    title: 'Business Owner',
    company: 'Peshawar',
    avatar: '/images/testimonials/nadia.jpg',
    rating: 5,
    quote:
      'From inquiry to delivery, they kept me updated every single step. The WhatsApp support is incredibly responsive — feels like having a team in China.',
  },
]

/* ============================================================
   FAQ
   ============================================================ */

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'How do I get started with Yiwa?',
    answer:
      'Getting started is simple. Contact us via WhatsApp or fill in our inquiry form, and we\'ll schedule a free consultation call to understand your product requirements, budget, and timeline.',
  },
  {
    question: 'Do I need a membership to use your services?',
    answer:
      'No — all core services (sourcing, shipping, inspection, customs clearance) are available without a membership. Membership unlocks premium tools, guides, priority support, and exclusive market insights.',
  },
  {
    question: 'What shipping methods do you offer?',
    answer:
      'We offer both air freight (3–7 business days) and sea freight (25–40 days, FCL & LCL). We recommend the best option based on your cargo weight, volume, urgency, and budget.',
  },
  {
    question: 'How long does shipping from China to Pakistan take?',
    answer:
      'Air freight typically takes 3–7 business days. Sea freight (LCL or FCL) takes 25–40 days depending on the port, season, and customs processing time. We provide live tracking throughout.',
  },
  {
    question: 'Can you verify suppliers before I place an order?',
    answer:
      'Absolutely. Supplier verification is one of our core services. We conduct background checks, verify business licenses, review factory capabilities, and can arrange physical factory visits on request.',
  },
  {
    question: 'Do you handle customs clearance in Pakistan?',
    answer:
      'Yes — we manage all Pakistan customs documentation, import duties calculation, clearance from Karachi Port or air cargo terminals, and coordinate with the Pakistan Single Window (PSW) system.',
  },
]

/* ============================================================
   FOOTER
   ============================================================ */

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    heading: 'COMPANY',
    links: [
      { label: 'About Us',       href: '/about' },
      { label: 'Our Team',       href: '/about#team' },
      { label: 'Careers',        href: '/careers' },
      { label: 'Blog',           href: '/blog' },
      { label: 'Contact',        href: '/contact' },
      { label: 'Privacy Policy', href: '/privacy' },
    ],
  },
  {
    heading: 'SERVICES',
    links: [
      { label: 'Product Sourcing',     href: '/services#product-sourcing' },
      { label: 'Supplier Verification',href: '/services#supplier-verification' },
      { label: 'Factory Visits',       href: '/services#factory-visits' },
      { label: 'Quality Inspection',   href: '/services#quality-inspection' },
      { label: 'Air Freight',          href: '/services#air-freight' },
      { label: 'Sea Freight',          href: '/services#sea-freight' },
    ],
  },
  {
    heading: 'RESOURCES',
    links: [
      { label: 'Import Guide',   href: '/resources/import-guide' },
      { label: 'Customs Guide',  href: '/resources/customs-guide' },
      { label: 'Shipping Guide', href: '/resources/shipping-guide' },
      { label: 'Blog',           href: '/blog' },
      { label: 'FAQs',           href: '/#faq' },
    ],
  },
  {
    heading: 'CALCULATORS',
    links: [
      { label: 'CBM Calculator',     href: '/tools/cbm-calculator' },
      { label: 'Currency Converter', href: '/tools/currency-converter' },
      { label: 'Profit Margin Tool', href: '/tools/profit-margin' },
      { label: 'MOQ Calculator',     href: '/tools/moq-calculator' },
    ],
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'Facebook',  href: 'https://facebook.com/yiwalogistics',  icon: 'Facebook' },
  { platform: 'Instagram', href: 'https://instagram.com/yiwalogistics', icon: 'Instagram' },
  { platform: 'LinkedIn',  href: 'https://linkedin.com/company/yiwa',   icon: 'Linkedin' },
  { platform: 'WhatsApp',  href: 'https://wa.me/923001234567',           icon: 'MessageCircle' },
]
