'use client'
import { SectionWrapper } from '@/hoc'

import React from 'react'
import { SectionCard } from './SectionCard'
import { SectionHeaders } from './SectionHeaders'
import ProjectCard from './ProjectCard'

function Projets() {
  return (
    <SectionCard
      className='mt-[5.25rem] w-full pt-48 '
      crosses
      crossesOffset='lg:translate-y-[5.25rem]'
      customPaddings=''
      id='introduction'
    >
      <SectionHeaders titre='Mes projets' paragraphe='ici on affiche mes projets' />

      <div className='flex p-20'>
        <ProjectCard title='Projet1' text='Lorem ipsum dolor sit amet consectetur adipisicing elit.' />
      </div>
    </SectionCard>
  )
}

export default SectionWrapper(Projets, 'projets')
