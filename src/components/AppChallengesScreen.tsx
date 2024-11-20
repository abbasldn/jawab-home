import {
  ScreenProps,
  MotionAppScreenBody,
  bodyAnimation,
} from './AppPacksScreen'
import challengesScreen from '@/images/screenshots/challenge-screen.png'
import Image from 'next/image'

export default function AppChallengesScreen(props: ScreenProps) {
  return (
    <MotionAppScreenBody
      {...(props.animated ? { ...bodyAnimation, custom: props.custom } : {})}
    >
      <Image
        src={challengesScreen}
        alt=""
        className="h-full w-full object-contain"
      />
    </MotionAppScreenBody>
  )
}
