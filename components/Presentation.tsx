'use client'
import React from 'react'
import { SectionCard } from './SectionCard'
import { SectionHeaders } from './SectionHeaders'
import { SectionWrapper } from '@/hoc'

const Presentation = () => {
  return (
    <SectionCard
      className='mt-[5.25rem] w-full pt-48 '
      crosses
      crossesOffset='lg:translate-y-[5.25rem]'
      customPaddings=''
      id='introduction'
    >
      <SectionHeaders
        titre='Pretentation'
        paragraphe="Bonjour je suis Julien Roselli developpeur full stack d'applications destiné a la gestion d'entreprise"
      />
    </SectionCard>
  )
}

export default SectionWrapper(Presentation, 'presentation')
