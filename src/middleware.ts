import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { clerkClient } from '@clerk/nextjs/server'

// Define admin email
const ADMIN_EMAIL = 'tarabhai2760@gmail.com'

// Create a matcher for admin routes
const isAdminRoute = createRouteMatcher([
  '/admin(.*)',
  '/api/admin(.*)',
])

// Create a matcher for unauthorized page
const isUnauthorizedPage = createRouteMatcher(['/unauthorized'])

export default clerkMiddleware(async (auth, req) => {
  // Allow access to unauthorized page
  if (isUnauthorizedPage(req)) {
    return NextResponse.next()
  }

  // Check if the current route is an admin route
  if (isAdminRoute(req)) {
    // Get the user's session
    const { userId } = await auth()
    
    // If user is not signed in, redirect to sign-in
    if (!userId) {
      // const signInUrl = new URL('/sign-in', req.url)
      // signInUrl.searchParams.set('redirect_url', req.url)
      // return NextResponse.redirect(signInUrl)
      return NextResponse.redirect(new URL('/unauthorized', req.url));
    }
    
    try {
      // Get user details from Clerk
      const client = await clerkClient()
      const user = await client.users.getUser(userId);  
      
      // Get primary email
      const userEmail = user.emailAddresses.find(
        (email) => email.id === user.primaryEmailAddressId
      )?.emailAddress
      
      console.log('User trying to access admin:', userEmail)
      
      // Check if user is admin
      if (userEmail !== ADMIN_EMAIL) {
        console.log('Access denied: User is not admin')
        // Redirect unauthorized users to unauthorized page
        return NextResponse.redirect(new URL('/unauthorized', req.url))
      }
      
      console.log('Access granted: User is admin')
    } catch (error) {
      console.error('Error checking user:', error)
      return NextResponse.redirect(new URL('/unauthorized', req.url))
    }
  }
  
  // Allow the request to proceed
  return NextResponse.next()
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}