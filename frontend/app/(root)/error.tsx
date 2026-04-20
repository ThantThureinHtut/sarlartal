'use client' // Error boundaries must be Client Components

import { Button } from '@/components/ui/button'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className='relative flex flex-col items-center justify-center min-h-screen bg-background overflow-hidden'>

      {/* Background blobs */}
      <div className='absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full bg-destructive/5 blur-3xl pointer-events-none' />
      <div className='absolute bottom-1/4 left-1/3 w-100 h-100 rounded-full bg-destructive/5 blur-2xl pointer-events-none' />

      <div className='relative z-10 flex flex-col items-center gap-6 px-6 max-w-lg text-center'>

        {/* Icon */}
        <div className='flex items-center justify-center w-20 h-20 rounded-2xl bg-destructive/10 border border-destructive/20'>
          <svg
            className='w-10 h-10 text-destructive'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={1.5}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z'
            />
          </svg>
        </div>

        {/* Heading */}
        <div className='flex flex-col gap-2'>
          <h1 className='text-3xl font-bold tracking-tight text-foreground'>
            Something went wrong
          </h1>
          <p className='text-sm text-muted-foreground'>
            An unexpected error occurred. You can try again or come back later.
          </p>
        </div>

        {/* Error message box */}
        {error.message && (
          <div className='w-full rounded-lg border border-destructive/20 bg-destructive/5 px-4 py-3 text-left'>
            <p className='text-xs font-medium text-destructive/70 uppercase tracking-wide mb-1'>
              Error details
            </p>
            <p className='text-sm text-destructive font-mono break-all'>
              {error.message}
            </p>
          </div>
        )}

        {/* Actions */}
        <div className='flex gap-3'>
          <Button variant='default' className="bg-black " size='lg' onClick={() => reset()}>
            Try again
          </Button>
          <Button variant='outline' size='lg' onClick={() => window.history.back()}>
            Go back
          </Button>
        </div>

      </div>
    </div>
  )
}
