'use client'
import { experiences, objectExperience } from '@/constants'

import Image from 'next/image'
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { SectionCard } from './SectionCard'
import { SectionHeaders } from './SectionHeaders'
import { SectionWrapper } from '@/hoc'

const ExperienceCard: React.ElementType = ({
  experience: { date, logo, entreprise, poste, bgLogo, desciption },
}: {
  experience: objectExperience
}) => (
  <VerticalTimelineElement
    visible
    contentStyle={{
      background: '#1d1836',
      color: '#fff',
      padding: '2.5rem',
    }}
    contentArrowStyle={{ borderRight: '7px solid  #232631' }}
    date={date}
    iconStyle={{ background: bgLogo }}
    icon={
      <div className='flex size-full items-center justify-center'>
        <Image src={logo} alt={entreprise} className='size-3/5 object-contain' />
      </div>
    }
  >
    <div>
      <h3 className='text-[24px] font-bold text-white'>{poste}</h3>
      <p className='text-[16px] font-semibold text-secondary' style={{ margin: 0 }}>
        {entreprise}
      </p>
    </div>

    <ul className=' list-disc space-y-2'>
      {desciption.map((point, index) => (
        <li key={`experience-point-${index}`} className='pl-1 text-[14px] tracking-wider text-white'>
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
)

export const Carriere = () => {
  return (
    <SectionCard
      className=' w-full  pt-24'
      crosses
      crossesOffset='lg:translate-y-[5.25rem]'
      customPaddings=' '
      id='carriere'
    >
      <SectionHeaders
        titre='Carrière'
        paragraphe="Apres 15 ans d'hotellerie la chance m'a permi de trouver le developpement informatique une passion depuis toujours"
      />
      <div className='flex flex-col items-center justify-center'>
        <div className='container relative z-1 m-0  p-10 text-center'>
          <div className=' flex flex-col items-center justify-center'>
            <VerticalTimeline className=''>
              {experiences.map((experience: objectExperience) => (
                <ExperienceCard key={`experience-${experience.id}`} experience={experience} />
              ))}
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </SectionCard>
  )
}

export default SectionWrapper(Carriere, 'carriere')
