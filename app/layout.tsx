import '@/app/globals.css'
import type { Metadata } from 'next'

import { fontSans } from '@/lib/fonts'
import { cn } from '@/lib/utils'

const url = 'https://next-valhalla-starter.netlify.app'
const title = 'Next Valhalla Starter'
const description = 'An image gallery starter built with Next.js'

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: title,
  description: description,
  icons: {
    icon: '/favicon.ico',
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'dark min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        {children}
      </body>
    </html>
  )
}
