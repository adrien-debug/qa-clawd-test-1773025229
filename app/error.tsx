'use client'

import { useEffect } from 'react'
import Button from '@/components/Button'
import Card from '@/components/Card'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto text-center">
        <Card className="p-8 space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-destructive">⚠️</h1>
            <h2 className="text-2xl font-semibold">Something went wrong</h2>
            <p className="text-muted-foreground">
              An unexpected error occurred. Please try again.
            </p>
            {process.env.NODE_ENV === 'development' && (
              <details className="mt-4 text-left">
                <summary className="cursor-pointer text-sm text-muted-foreground hover:text-foreground">
                  Error details
                </summary>
                <pre className="mt-2 text-xs bg-muted p-2 rounded overflow-auto">
                  {error.message}
                </pre>
              </details>
            )}
          </div>
          
          <div className="flex gap-4 justify-center">
            <Button variant="primary" onClick={reset}>
              Try Again
            </Button>
            <Button 
              variant="secondary" 
              onClick={() => window.location.href = '/'}
            >
              Go Home
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}