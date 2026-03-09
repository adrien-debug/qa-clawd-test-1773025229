'use client'

import { useState, useEffect } from 'react'
import Button from './Button'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse">
          <div className="h-16 bg-muted rounded-lg mb-6 w-96"></div>
          <div className="h-6 bg-muted rounded mb-4 w-80"></div>
          <div className="h-6 bg-muted rounded mb-8 w-72"></div>
          <div className="h-12 bg-muted rounded w-32"></div>
        </div>
      </section>
    )
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="text-gradient">QA Clean Build</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A minimal dark landing page built with Next.js 15 and Tailwind CSS 4
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => {
                document.getElementById('features')?.scrollIntoView({ 
                  behavior: 'smooth' 
                })
              }}
            >
              Get Started
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => {
                window.open('https://github.com', '_blank')
              }}
            >
              View on GitHub
            </Button>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
      </div>
    </section>
  )
}