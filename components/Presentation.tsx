'use client'
import React from 'react'
import { SectionCard } from './SectionCard'
import { SectionHeaders } from './SectionHeaders'
import { SectionWrapper } from '@/hoc'
import Image from 'next/image'
import { photo } from '@/assets'

const Presentation = () => {
  return (
    <SectionCard
      className=' w-full  pt-20'
      crosses
      crossesOffset='lg:translate-y-[5.25rem]'
      customPaddings=''
      id='introduction'
    >
      <SectionHeaders
        titre='Pretentation'
        paragraphe="Bonjour je suis Julien Roselli developpeur full stack d'applications destiné a la gestion d'entreprise"
      />
      <div className='flex items-start justify-start p-10 px-20'>
        <Image src={photo} alt='Julien Roselli' className=' rounded-full object-contain' width={150} height={150} />
      </div>
    </SectionCard>
  )
}

export default SectionWrapper(Presentation, 'presentation')
