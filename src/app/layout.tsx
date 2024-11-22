import { type Metadata } from 'next'
import { Outfit } from 'next/font/google'
import clsx from 'clsx'
import PlausibleProvider from 'next-plausible'
import '@/styles/tailwind.css'
import { ClerkProvider } from '@clerk/nextjs'
import Script from 'next/script'

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  title: {
    template: '%s - Jawab',
    default: 'Jawab - Muslim Conversation Cards',
  },
  description:
    'Strengthen your marriage through meaningful conversations with our Islamic conversation cards.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <PlausibleProvider domain="getjawab.com">
      <ClerkProvider>
        <html
          lang="en"
          className={clsx('bg-gray-50 antialiased', outfit.variable)}
        >
          <head>
            <Script
              src="//cdn.trackdesk.com/tracking.js"
              strategy="afterInteractive"
            />
            <Script id="trackdesk-init" strategy="afterInteractive">
              {`
    (function(t,d,k){(t[k]=t[k]||[]).push(d);t[d]=t[d]||t[k].f||function(){(t[d].q=t[d].q||[]).push(arguments)}})(window,"trackdesk","TrackdeskObject");
    trackdesk('jawab', 'click');
  `}
            </Script>
          </head>
          <body>{children}</body>
        </html>
      </ClerkProvider>
    </PlausibleProvider>
  )
}
