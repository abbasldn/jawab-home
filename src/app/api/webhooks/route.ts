import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { headers } from 'next/headers'
import { Resend } from 'resend'
import { createCustomer } from '@/db'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-11-20.acacia',
})

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const body = await req.text()
  const signature = headers().get('stripe-signature') as string

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!,
    )
  } catch (err) {
    return NextResponse.json({ error: 'Webhook error' }, { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session
    const lineItemsObject = await stripe.checkout.sessions.listLineItems(
      session.id,
    )
    const lineItems = lineItemsObject.data

    try {
      await createCustomer({
        email: session.customer_email!,
        priceId: lineItems[0].price?.id!,
        purchaseDate: new Date(),
        customerId: session.customer as string,
      })

      // Send confirmation email
      await resend.emails.send({
        from: 'Jawab <hello@getjawab.com>',
        to: [session.customer_email!],
        subject: 'Thank you for pre-ordering Jawab!',
        html: `
          <h1>Thank you for being an early supporter!</h1>
          <p>We're thrilled to have you as one of our first customers. You'll receive another email when the app launches with instructions on how to access your conversation cards.</p>
          <p>In the meantime, if you have any questions, feel free to reply to this email.</p>
          <p>Best regards,<br>The Jawab Team</p>
        `,
      })

      return NextResponse.json({ success: true })
    } catch (error) {
      console.error('Error processing webhook:', error)
      return NextResponse.json(
        { error: 'Internal server error' },
        { status: 500 },
      )
    }
  }

  return NextResponse.json({ received: true })
}