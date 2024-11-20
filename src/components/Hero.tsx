import { useId } from 'react'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { PhoneFrame } from '@/components/PhoneFrame'
import { AppScreenshot } from './AppScreenshot'

function BackgroundIllustration(props: React.ComponentPropsWithoutRef<'div'>) {
  let id = useId()

  return (
    <div {...props}>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-slow"
      >
        <path
          d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M513 1025C230.23 1025 1 795.77 1 513"
          stroke={`url(#${id}-gradient-1)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-1`}
            x1="1"
            y1="513"
            x2="1"
            y2="1025"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B8004D" />
            <stop offset="1" stopColor="#B8004D" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-reverse-slower"
      >
        <path
          d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M913 513c0 220.914-179.086 400-400 400"
          stroke={`url(#${id}-gradient-2)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-2`}
            x1="913"
            y1="513"
            x2="913"
            y2="913"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B8004D" />
            <stop offset="1" stopColor="#B8004D" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-reverse-slower"
      >
        <path
          d="M513 1025C230.23 1025 1 795.77 1 513"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M513 1025C230.23 1025 1 795.77 1 513"
          stroke={`url(#${id}-gradient-3)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-3`}
            x1="513"
            y1="1025"
            x2="513"
            y2="1025"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B8004D" />
            <stop offset="1" stopColor="#B8004D" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export function Hero() {
  return (
    <div className="overflow-hidden py-16 sm:py-24 lg:pb-32 xl:pb-36">
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <h1 className="text-4xl font-medium tracking-tight text-gray-900">
              Strengthen Your Marriage Through Meaningful Conversations
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Discover deeper connections with your spouse through our carefully
              crafted conversation cards, designed specifically for Muslim
              couples. Choose from three unique packs for every stage of
              marriage.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
              <Button
                href="#pricing"
                variant="solid"
                color="gray"
                className="w-full lg:w-auto"
              >
                <span className="text-lg">Pre-order Now</span>
              </Button>
              {/* <Button href="#features" variant="outline" color="gray">
                <PlayIcon className="h-6 w-6 flex-none" />
                <span className="ml-2.5">See how it works</span>
              </Button> */}
            </div>
          </div>
          <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <BackgroundIllustration className="absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />
            <div className="-mx-4 h-[448px] px-9 [mask-image:linear-gradient(to_bottom,white_80%,transparent_95%)] sm:mx-0 lg:absolute lg:-inset-x-10 lg:-bottom-20 lg:-top-10 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32">
              <PhoneFrame className="mx-auto max-w-[366px]" priority>
                <div className="flex h-full w-full items-center justify-center">
                  <AppScreenshot className="h-full w-full object-contain" />
                </div>
              </PhoneFrame>
            </div>
          </div>
          <div className="relative -mt-4 lg:col-span-7 lg:mt-0 xl:col-span-6">
            <p className="text-center text-sm font-semibold text-gray-900 lg:text-left">
              Special Pre-launch Offer
            </p>
            <div className="mt-8 flex flex-col items-center lg:items-start">
              <div className="flex items-center gap-x-8">
                <div className="rounded-2xl bg-gray-50 p-4">
                  <div className="text-base font-semibold text-gray-900">
                    Individual Packs
                  </div>
                  <div className="mt-1 flex items-baseline gap-x-2">
                    <span className="text-2xl font-bold tracking-tight text-gray-900">
                      $14.99
                    </span>

                    <span className="text-sm font-bold tracking-tight text-gray-900 line-through opacity-70">
                      $19.99
                    </span>
                  </div>
                </div>
                <div className="rounded-2xl bg-gray-900 p-4 text-white">
                  <div className="font-semibold">Complete Bundle</div>
                  <div className="mt-1 flex items-baseline gap-x-2">
                    <span className="text-2xl font-bold tracking-tight">
                      $39.99
                    </span>
                    <span className="text-sm line-through opacity-70">
                      $59.97
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-x-10 gap-y-8 lg:justify-start">
                <div className="flex items-center gap-x-2">
                  <CheckIcon className="h-6 w-6 flex-none text-gray-600" />
                  <span className="text-sm text-gray-600">
                    The Marriage Meeting
                  </span>
                </div>
                <div className="flex items-center gap-x-2">
                  <CheckIcon className="h-6 w-6 flex-none text-gray-600" />
                  <span className="text-sm text-gray-600">Just Married</span>
                </div>
                <div className="flex items-center gap-x-2">
                  <CheckIcon className="h-6 w-6 flex-none text-gray-600" />
                  <span className="text-sm text-gray-600">Been Married</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

function CheckIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} {...props}>
      <path
        d="M4.5 12.75l6 6 9-13.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
