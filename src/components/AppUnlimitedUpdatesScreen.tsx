export interface CustomAnimationProps {
  isForwards: boolean
  changeCount: number
}
export type ScreenProps =
  | {
      animated: true
      custom: CustomAnimationProps
    }
  | { animated?: false }

export const maxZIndex = 2147483647

export const bodyVariantBackwards: Variant = {
  opacity: 0.4,
  scale: 0.8,
  zIndex: 0,
  filter: 'blur(4px)',
  transition: { duration: 0.4 },
}

export const bodyVariantForwards: Variant = (custom: CustomAnimationProps) => ({
  y: '100%',
  zIndex: maxZIndex - custom.changeCount,
  transition: { duration: 0.4 },
})

export const bodyAnimation: MotionProps = {
  initial: 'initial',
  animate: 'animate',
  exit: 'exit',
  variants: {
    initial: (custom: CustomAnimationProps, ...props) =>
      custom.isForwards
        ? bodyVariantForwards(custom, ...props)
        : bodyVariantBackwards,
    animate: (custom: CustomAnimationProps) => ({
      y: '0%',
      opacity: 1,
      scale: 1,
      zIndex: maxZIndex / 2 - custom.changeCount,
      filter: 'blur(0px)',
      transition: { duration: 0.4 },
    }),
    exit: (custom: CustomAnimationProps, ...props) =>
      custom.isForwards
        ? bodyVariantBackwards
        : bodyVariantForwards(custom, ...props),
  },
}

import {
  type MotionProps,
  type Variant,
  type Variants,
  AnimatePresence,
  motion,
} from 'framer-motion'
import { AppScreen } from './AppScreen'

export const MotionAppScreenBody = motion('div')

export default function AppUnlimitedUpdatesScreen(props: ScreenProps) {
  return (
    <MotionAppScreenBody
      {...(props.animated ? { ...bodyAnimation, custom: props.custom } : {})}
    >
      <svg
        width="430"
        height="932"
        viewBox="0 0 430 932"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_updates)">
          <rect width="430" height="932" rx="24" fill="white" />
          <rect width="430" height="272" fill="url(#paint0_linear_updates)" />

          {/* Back Arrow */}
          <path
            d="M25.2799 102.947L32.8266 110.48C32.9506 110.605 33.098 110.704 33.2605 110.772C33.423 110.84 33.5973 110.875 33.7733 110.875C33.9493 110.875 34.1236 110.84 34.286 110.772C34.4485 110.704 34.596 110.605 34.7199 110.48C34.9683 110.23 35.1077 109.892 35.1077 109.54C35.1077 109.188 34.9683 108.85 34.7199 108.6L28.1199 101.933L34.7199 95.3334C34.9683 95.0836 35.1077 94.7457 35.1077 94.3934C35.1077 94.0412 34.9683 93.7033 34.7199 93.4534C34.5965 93.3275 34.4492 93.2272 34.2867 93.1586C34.1242 93.0899 33.9497 93.0542 33.7733 93.0534C33.5969 93.0542 33.4224 93.0899 33.2599 93.1586C33.0974 93.2272 32.9501 93.3275 32.8266 93.4534L25.2799 100.987C25.1446 101.112 25.0366 101.263 24.9627 101.432C24.8888 101.601 24.8507 101.783 24.8507 101.967C24.8507 102.151 24.8888 102.333 24.9627 102.502C25.0366 102.67 25.1446 102.822 25.2799 102.947Z"
            fill="black"
          />

          {/* Title */}
          <text x="138" y="212" className="text-2xl font-semibold" fill="black">
            Updates
          </text>

          {/* Content Cards */}
          <g filter="url(#filter0_dddd_updates)">
            <rect
              x="23"
              y="292"
              width="384"
              height="105"
              rx="10"
              fill="#F0F0F0"
            />
            <text x="40" y="330" fill="#374151" fontSize="16" fontWeight="500">
              New Pack Coming Soon
            </text>
            <text x="40" y="360" fill="#6B7280" fontSize="14">
              Daily Questions Pack
            </text>
          </g>

          <g filter="url(#filter1_dddd_updates)">
            <rect
              x="23"
              y="413"
              width="384"
              height="105"
              rx="10"
              fill="#F0F0F0"
            />
            <text x="40" y="451" fill="#374151" fontSize="16" fontWeight="500">
              Latest Update
            </text>
            <text x="40" y="481" fill="#6B7280" fontSize="14">
              Marriage Meeting Pack v2
            </text>
          </g>

          <g filter="url(#filter2_dddd_updates)">
            <rect
              x="23"
              y="534"
              width="384"
              height="105"
              rx="10"
              fill="#F0F0F0"
            />
            <text x="40" y="572" fill="#374151" fontSize="16" fontWeight="500">
              Next Release
            </text>
            <text x="40" y="602" fill="#6B7280" fontSize="14">
              March 2024
            </text>
          </g>

          {/* Status Badge */}
          <rect x="40" y="655" width="120" height="32" rx="16" fill="#10B981" />
          <text x="60" y="676" fill="white" fontSize="14" fontWeight="600">
            Always Included
          </text>
        </g>

        <defs>
          <linearGradient
            id="paint0_linear_updates"
            x1="215"
            y1="0"
            x2="215"
            y2="272"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F9FAFB" />
            <stop offset="1" stopColor="#F3F4F6" />
          </linearGradient>
          <clipPath id="clip0_updates">
            <rect width="430" height="932" rx="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </MotionAppScreenBody>
  )
}
