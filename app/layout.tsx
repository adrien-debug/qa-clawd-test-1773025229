import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'QA Clean Build - Landing Page Test',
  description: 'A minimal dark landing page built with Next.js 15 and Tailwind CSS 4',
  keywords: ['Next.js', 'Tailwind CSS', 'Landing Page', 'Minimal', 'Dark Theme'],
  authors: [{ name: 'QA Clean Build' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'QA Clean Build - Landing Page Test',
    description: 'A minimal dark landing page built with Next.js 15 and Tailwind CSS 4',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QA Clean Build - Landing Page Test',
    description: 'A minimal dark landing page built with Next.js 15 and Tailwind CSS 4',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-background text-foreground">
          {children}
        </div>
      </body>
    </html>
  )
}