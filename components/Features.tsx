'use client'

import { useState, useEffect } from 'react'
import Card from './Card'

const features = [
  {
    title: 'Next.js 15',
    description: 'Built with the latest Next.js featuring App Router, Server Components, and enhanced performance.',
    icon: '⚡',
  },
  {
    title: 'Tailwind CSS 4',
    description: 'Styled with Tailwind CSS 4 using utility-first approach and native design tokens.',
    icon: '🎨',
  },
  {
    title: 'TypeScript',
    description: 'Fully typed with TypeScript for better developer experience and code reliability.',
    icon: '🔧',
  },
  {
    title: 'Responsive Design',
    description: 'Mobile-first responsive design that works perfectly on all devices and screen sizes.',
    icon: '📱',
  },
  {
    title: 'Dark Theme',
    description: 'Beautiful minimal dark theme with carefully crafted color palette and typography.',
    icon: '🌙',
  },
  {
    title: 'Performance',
    description: 'Optimized for performance with lazy loading, code splitting, and modern web standards.',
    icon: '🚀',
  },
]

export default function Features() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-pulse">
            <div className="h-12 bg-muted rounded mb-4 w-64 mx-auto"></div>
            <div className="h-6 bg-muted rounded w-96 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="h-48 bg-muted rounded-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">Features</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Built with modern technologies and best practices
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card className="h-full hover:scale-105 transition-transform duration-300">
                <div className="p-6 space-y-4">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}