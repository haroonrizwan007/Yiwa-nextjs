import type { Metadata, Viewport } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import SmoothScroll from '@/components/layout/SmoothScroll'
import GsapInit    from '@/components/layout/GsapInit'
import './globals.css'
import '@/styles/animations.css'

/* ============================================================
   FONTS
   ============================================================ */

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-plus-jakarta',
  weight: ['400', '500', '600', '700', '800'],
})

/* ============================================================
   METADATA
   ============================================================ */

export const metadata: Metadata = {
  title: {
    default: 'YIWA Logistics — Import from China with Confidence',
    template: '%s | YIWA Logistics',
  },
  description:
    'Professional sourcing, freight forwarding, customs clearance, supplier verification, and door-to-door delivery from China to Pakistan. Trusted by 200+ Pakistani businesses.',
  keywords: [
    'China to Pakistan import',
    'sourcing agent Pakistan',
    'freight forwarding',
    'customs clearance Pakistan',
    'supplier verification China',
    'Yiwu market sourcing',
  ],
  authors: [{ name: 'YIWA Logistics' }],
  creator: 'YIWA Logistics',
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    title: 'YIWA Logistics — Import from China with Confidence',
    description:
      'End-to-end import solutions from China to Pakistan. Sourcing, verification, shipping, and customs clearance.',
    siteName: 'YIWA Logistics',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YIWA Logistics — Import from China with Confidence',
    description: 'End-to-end import solutions from China to Pakistan.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)',  color: '#0A0A0A' },
  ],
  width: 'device-width',
  initialScale: 1,
}

/* ============================================================
   ROOT LAYOUT
   ============================================================ */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${plusJakarta.variable}`}
    >
      <body className="font-sans antialiased bg-[var(--color-bg)] text-[var(--color-text)]">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <GsapInit />
          <SmoothScroll />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
