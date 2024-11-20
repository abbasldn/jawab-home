import Image from 'next/image'
import {
  MotionAppScreenBody,
  ScreenProps,
  bodyAnimation,
} from './AppPacksScreen'
import favouritesScreen from '@/images/screenshots/favourites-screen.png'

export default function AppFavouritesScreen(props: ScreenProps) {
  return (
    <MotionAppScreenBody
      {...(props.animated ? { ...bodyAnimation, custom: props.custom } : {})}
    >
      <Image
        src={favouritesScreen}
        alt=""
        className="h-full w-full object-contain"
      />
    </MotionAppScreenBody>
  )
}
