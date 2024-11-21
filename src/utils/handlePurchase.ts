import { loadStripe } from '@stripe/stripe-js'

export const handlePurchase = async (
  isBundle: boolean,
  packName: string,
  userEmail: string | undefined,
  setShowAuthModal?: (show: boolean) => void,
) => {
  if (!userEmail) {
    setShowAuthModal && setShowAuthModal(true)
    return
  }

  // Existing checkout logic
  const response = await fetch('/api/create-checkout-session', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      isBundle,
      email: userEmail,
      packName: packName,
    }),
  })

  const { sessionId } = await response.json()

  // Redirect to Stripe checkout
  const stripe = await loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
  )
  await stripe?.redirectToCheckout({ sessionId })
}
