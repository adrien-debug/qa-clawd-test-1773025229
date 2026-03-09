import Link from 'next/link'
import Button from '@/components/Button'
import Card from '@/components/Card'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto text-center">
        <Card className="p-8 space-y-6">
          <div className="space-y-2">
            <h1 className="text-6xl font-bold text-gradient">404</h1>
            <h2 className="text-2xl font-semibold">Page Not Found</h2>
            <p className="text-muted-foreground">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>
          
          <div className="pt-4">
            <Link href="/">
              <Button variant="primary" size="lg">
                Go Home
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  )
}