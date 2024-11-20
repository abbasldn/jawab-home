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

import { type MotionProps, type Variant, motion } from 'framer-motion'
import packsScreen from '@/images/screenshots/home-screen.png'
import Image from 'next/image'
export const MotionAppScreenBody = motion('div')

export default function AppPacksScreen(props: ScreenProps) {
  return (
    <MotionAppScreenBody
      {...(props.animated ? { ...bodyAnimation, custom: props.custom } : {})}
    >
      <Image
        src={packsScreen}
        alt=""
        className="h-full w-full object-contain"
      />
    </MotionAppScreenBody>
  )
}
