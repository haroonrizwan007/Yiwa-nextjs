import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'YIWA Logistics - Import from China with Confidence',
  description:
    'Professional sourcing, freight forwarding, customs clearance, supplier verification, and door-to-door delivery from China to Pakistan.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
