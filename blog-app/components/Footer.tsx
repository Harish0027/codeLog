import Image from 'next/image'
import React from 'react'
import { assets } from '@/assets/assets'

const Footer = () => {
  return (
     <div className="flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center">
      <Image src={assets.logo_light} alt="logo" width={120} />

      <p className="text-sm text-white">
        All right reserved. Copyright @blogger
      </p>
      asse

      <div className="flex gap-4">
        <Image src={assets.facebook_icon} alt="facebook" width={40} />
        <Image src={assets.twitter_icon} alt="twitter" width={40} />
        <Image src={assets.googleplus_icon} alt="google+" width={40} />
      </div>
    </div>
  )
}

export default Footer