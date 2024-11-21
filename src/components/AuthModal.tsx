import { useSignIn, useSignUp } from '@clerk/nextjs'
import { Dialog, DialogPanel } from '@headlessui/react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
  setIsOpen: (isOpen: boolean) => void
  packName: string
}

export default function AuthModal({
  isOpen,
  onClose,
  onSuccess,
  setIsOpen,
  packName,
}: AuthModalProps) {
  const { signUp, isLoaded } = useSignUp()
  const [isLoading, setIsLoading] = useState(false)

  async function handleOAuthSignIn(provider: 'oauth_google' | 'oauth_apple') {
    if (!isLoaded) return

    try {
      setIsLoading(true)
      await signUp.authenticateWithRedirect({
        strategy: provider,
        redirectUrl: '/purchase',
        redirectUrlComplete: `/purchase?packName=${packName}`,
      })
      onSuccess()
    } catch (err) {
      console.error('OAuth error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm" />

      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel className="w-full max-w-md overflow-hidden rounded-3xl bg-white p-6 shadow-lg shadow-gray-900/5">
            <h2 className="text-2xl font-medium tracking-tight text-gray-900">
              Sign in to continue
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              Please sign in to complete your purchase
            </p>

            <div className="mt-8 flex flex-col gap-4">
              <button
                onClick={() => handleOAuthSignIn('oauth_google')}
                disabled={isLoading}
                className="flex items-center justify-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 disabled:opacity-70"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Continue with Google
              </button>

              <button
                onClick={() => handleOAuthSignIn('oauth_apple')}
                disabled={isLoading}
                className="flex items-center justify-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 disabled:opacity-70"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
                </svg>
                Continue with Apple
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
