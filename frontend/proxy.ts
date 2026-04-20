// proxy.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const guestOnlyRoutes  = ['/', '/login', '/signup' , '/about']
const protectedRoutes  = ['/dashboard', '/profile', '/settings']

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // read session cookie from Better Auth
  const session =
    request.cookies.get('better-auth.session_token') ||
    request.cookies.get('__Secure-better-auth.session_token')

  const isLoggedIn  = !!session
  const isGuestOnly = guestOnlyRoutes.includes(pathname)
  const isProtected = protectedRoutes.some(r => pathname.startsWith(r))

  // logged in + guest-only page → bounce to dashboard
  if (isLoggedIn && isGuestOnly) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  // not logged in + protected page → save destination + go to login
  if (!isLoggedIn && isProtected) {
    const loginUrl = new URL('/login', request.url)
    // loginUrl.searchParams.set('callbackUrl', pathname)
    return NextResponse.redirect(loginUrl)
  }

  // all good — continue to page
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/',
    '/login',
    '/signup',
    '/dashboard/:path*',
    '/profile/:path*',
    '/settings/:path*',
    '/about',
  ]
}