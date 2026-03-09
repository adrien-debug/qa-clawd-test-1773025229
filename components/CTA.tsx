'use client'

import { useState, useEffect } from 'react'
import Button from './Button'
import Card from './Card'

export default function CTA() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto animate-pulse">
          <div className="h-64 bg-muted rounded-lg"></div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto animate-slide-up">
        <Card className="glass glow">
          <div className="p-12 text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                <span className="text-gradient">Ready to Start?</span>
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Get started with this clean, minimal landing page template. 
                Perfect for your next project.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                variant="primary" 
                size="lg"
                onClick={() => {
                  window.open('https://github.com', '_blank')
                }}
              >
                Download Template
              </Button>
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => {
                  window.open('https://nextjs.org/docs', '_blank')
                }}
              >
                View Documentation
              </Button>
            </div>
            
            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Built with ❤️ using Next.js 15 and Tailwind CSS 4
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}