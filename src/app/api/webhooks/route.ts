import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { headers } from 'next/headers'
import { createClient } from '@vercel/postgres'
import { Resend } from 'resend'

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

    try {
      const db = createClient()
      await db.connect()

      // Insert customer data into database
      await db.sql`
        INSERT INTO customers (email, price_id, purchase_date)
        VALUES (${session.customer_email}, ${session.line_items?.data[0].price?.id}, NOW())
      `

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

export const runtime = 'edge'
