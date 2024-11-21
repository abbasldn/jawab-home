import { type Metadata } from 'next'
import { Outfit } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import { ClerkProvider } from '@clerk/nextjs'

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
    <ClerkProvider>
      <html
        lang="en"
        className={clsx('bg-gray-50 antialiased', outfit.variable)}
      >
        <body>{children}</body>
      </html>
    </ClerkProvider>
  )
}
