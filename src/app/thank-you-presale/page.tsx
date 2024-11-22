import { Container } from '@/components/Container'

export default function ThankYouPresale() {
  return (
    <Container className="relative pb-16 pt-20 text-center lg:pt-32">
      <h1 className="font-display mx-auto max-w-4xl text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
        Thank you for your purchase!
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
        We're thrilled to have you join the Jawab family. You'll receive an
        email with your order confirmation and further instructions shortly.
      </p>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
        If you have any questions in the meantime, please don't hesitate to
        reach out to us at{' '}
        <a
          href="mailto:info@getjawab.com"
          className="text-blue-600 hover:text-blue-800"
        >
          info@getjawab.com
        </a>
      </p>
    </Container>
  )
}
