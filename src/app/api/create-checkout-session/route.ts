import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-11-20.acacia',
})

export async function POST(req: Request) {
  const theMarriageMeetingPackPriceId =
    process.env.THE_MARRIAGE_MEETING_PACK_PRICE_ID
  const theJustMarriagePackPriceId = process.env.THE_JUST_MARRIED_PACK_PRICE_ID
  const theBeenMarriedPackPriceId = process.env.THE_BEEN_MARRIED_PACK_PRICE_ID

  const bundlePriceId = process.env.BUNDLE_PRICE_ID

  const { email, isBundle, packName } = await req.json()

  const priceId = isBundle
    ? bundlePriceId
    : packName === 'The Marriage Meeting Pack'
      ? theMarriageMeetingPackPriceId
      : packName === 'The Just Married Pack'
        ? theJustMarriagePackPriceId
        : theBeenMarriedPackPriceId

  const description = isBundle ? 'Jawab: Complete Bundle' : packName

  const coupon = isBundle
    ? process.env.PRESALE_BUNDLE_COUPON
    : process.env.PRESALE_INDIVIDUAL_PACK_COUPON

  try {
    // Get the Trackdesk CID from cookies
    const cookieStore = cookies()
    const trackdeskCookie = cookieStore.get('trakdesk_cid')
    let clientReferenceId = ''

    if (trackdeskCookie) {
      try {
        const trackdeskData = JSON.parse(trackdeskCookie.value)
        clientReferenceId = trackdeskData.cid
      } catch (e) {
        console.error('Error parsing trackdesk cookie:', e)
      }
    }

    const StripeCheckoutSessionCreateParams = {
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      customer_email: email,
      success_url: `${req.headers.get('origin')}/thank-you-presale`,
      cancel_url: `${req.headers.get('origin')}/`,
      payment_method_types: ['card'],
      payment_intent_data: {
        description,
      },
      customer_creation: 'always',
      client_reference_id: clientReferenceId || undefined,
    } as Stripe.Checkout.SessionCreateParams

    if (coupon) {
      StripeCheckoutSessionCreateParams.discounts = [
        {
          coupon,
        },
      ]
    }

    const session = await stripe.checkout.sessions.create(
      StripeCheckoutSessionCreateParams,
    )

    return NextResponse.json({ sessionId: session.id })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
