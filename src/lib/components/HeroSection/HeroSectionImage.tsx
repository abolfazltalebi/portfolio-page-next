import HsImage from '@/assets/image/hSection.webp';
import Image from 'next/image'
import React from 'react'

export default function HeroSectionImage() {
    return (
        <div>
            <Image width={450} height={200} src={HsImage} alt='Hero section mage' className=' h-auto bg-cover' />
        </div>
    )
}
