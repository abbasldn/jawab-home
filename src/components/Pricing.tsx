'use client'

import { useState } from 'react'
import { Radio, RadioGroup } from '@headlessui/react'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

type PlanProps = {
  name: string
  featured: boolean
  originalPrice: string
  discountPrice: string
  description: string
  button: {
    label: string
    onClick: () => void
  }
  features: Array<string>
  logomarkClassName?: string
}

const plans: PlanProps[] = [
  {
    name: 'Single Pack',
    featured: false,
    originalPrice: '$19.99',
    discountPrice: '$14.99',
    description:
      'A single pack. You can choose from The Marriage Meeting, Just Married, or Been Married',
    button: {
      label: 'PREORDER Now',
      onClick: () => {
        console.log('clicked')
      },
    },
    features: ['Single Pack', 'Lifetime Updates'],
    logomarkClassName: 'fill-gray-500',
  },
  {
    name: 'All Packs',
    featured: true,
    originalPrice: '$59.97',
    discountPrice: '$39.99',
    description:
      'All packs. The Marriage Meeting, Just Married, or Been Married',
    button: {
      label: 'PREORDER Now',
      onClick: () => {
        console.log('clicked')
      },
    },
    features: ['All Packs', 'Lifetime Updates'],
    logomarkClassName: 'fill-cyan-500',
  },
]

function CheckIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
        fill="currentColor"
      />
      <circle
        cx="12"
        cy="12"
        r="8.25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Plan({
  name,
  originalPrice,
  discountPrice,
  description,
  button,
  features,
  featured = false,
}: PlanProps) {
  return (
    <section
      className={clsx(
        'flex flex-col overflow-hidden rounded-3xl p-6 shadow-lg shadow-gray-900/5',
        featured ? 'order-first bg-gray-900 lg:order-none' : 'bg-white',
      )}
    >
      <h3
        className={clsx(
          'flex items-center text-sm font-semibold',
          featured ? 'text-white' : 'text-gray-900',
        )}
      >
        <span>{name}</span>
      </h3>
      <p
        className={clsx(
          'relative mt-5 flex text-2xl tracking-tight',
          featured ? 'text-gray-300' : 'text-gray-700',
        )}
      >
        <span className="line-through">{originalPrice}</span>
      </p>
      <p
        className={clsx(
          'relative mt-1 flex text-3xl tracking-tight',
          featured ? 'text-white' : 'text-gray-900',
        )}
      >
        <span>{discountPrice}</span>
      </p>
      <p
        className={clsx(
          'mt-3 text-sm',
          featured ? 'text-gray-300' : 'text-gray-700',
        )}
      >
        {description}
      </p>
      <div className="order-last mt-6">
        <ul
          role="list"
          className={clsx(
            '-my-2 divide-y text-sm',
            featured
              ? 'divide-gray-800 text-gray-300'
              : 'divide-gray-200 text-gray-700',
          )}
        >
          {features.map((feature) => (
            <li key={feature} className="flex py-2">
              <CheckIcon
                className={clsx(
                  'h-6 w-6 flex-none',
                  featured ? 'text-white' : 'text-pink-500',
                )}
              />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <Button
        onClick={button.onClick}
        color={featured ? 'pink' : 'gray'}
        className="mt-6"
        aria-label={`Get started with the ${name} plan for ${discountPrice}`}
      >
        {button.label}
      </Button>
    </section>
  )
}

export function Pricing() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="border-t border-gray-200 bg-gray-100 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="pricing-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Pricing
          </h2>

          <p className="mt-2 text-lg text-gray-600">
            Flat, no-subscription pricing. Buy the packs that you need.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-10 sm:mt-20 lg:max-w-none lg:grid-cols-2">
          {plans.map((plan) => (
            <Plan key={plan.name} {...plan} />
          ))}
        </div>
      </Container>
    </section>
  )
}
