'use client'

import { handlePurchase } from '@/utils/handlePurchase'
import { useUser } from '@clerk/nextjs'
import { useEffect } from 'react'

export default function Purchase() {
  const { user } = useUser()
  const email = user?.emailAddresses[0].emailAddress

  useEffect(() => {
    handlePurchase(true, '', email)
  }, [email])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-t-2 border-rose-800"></div>
      <p className="mt-4 text-base text-gray-600">Redirecting to checkout...</p>
    </div>
  )
}
