'use client'

import { handlePurchase } from '@/utils/handlePurchase'
import { useUser } from '@clerk/nextjs'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export default function Purchase() {
  const { user } = useUser()
  const email = user?.emailAddresses[0].emailAddress
  const params = useSearchParams()
  const packName = params.get('packName')

  useEffect(() => {
    handlePurchase(true, '', email)
  }, [email])

  return <div>Purchase</div>
}
