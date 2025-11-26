'use client'

import Link from 'next/link'
import { ShieldAlert, Home, LogIn } from 'lucide-react'
import { useAuth, useClerk } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Unauthorized() {
  const { isSignedIn } = useAuth()
  const { openSignIn, signOut } = useClerk()
  const router = useRouter()

  // Handle sign in with different account
  const handleSignInWithDifferentAccount = async () => {
    if (isSignedIn) {
      // Sign out current user first
      await signOut()
    }
    
    // Open Clerk sign-in modal with redirect to admin
    openSignIn({
      redirectUrl: '/admin',
      appearance: {
        elements: {
          rootBox: 'mx-auto',
          card: 'shadow-2xl',
        }
      }
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 px-4">
      <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl text-center max-w-lg w-full border border-red-100">
        {/* Icon */}
        <div className="mb-6 flex justify-center">
          <div className="bg-red-100 p-6 rounded-full">
            <ShieldAlert className="w-16 h-16 text-red-600" strokeWidth={1.5} />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Access Denied
        </h1>

        {/* Description */}
        <p className="text-gray-600 mb-2 text-lg">
          Sorry, you don't have permission to access the admin panel.
        </p>
        <p className="text-gray-500 mb-8 text-sm">
          Only authorized administrators can view this page. If you believe this is an error, please contact support.
        </p>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Link 
            href="/"
            className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium shadow-md hover:shadow-lg"
          >
            <Home className="w-5 h-5" />
            Go Back Home
          </Link>
          
          <button
            onClick={handleSignInWithDifferentAccount}
            className="flex items-center justify-center gap-2 w-full border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 font-medium"
          >
            <LogIn className="w-5 h-5" />
            Sign In with Different Account
          </button>
        </div>

        {/* Additional Info */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-xs text-gray-400">
            Need help? Contact us at{' '}
            <a href="mailto:tarabhai2760@gmail.com?subject=Hello&body=I want to talk about..." className="text-blue-600 hover:underline">
              tarabhai2760@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}