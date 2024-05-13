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

    <ul className='ml-5 mt-5 list-disc space-y-2'>
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
      className='mt-[5.25rem] w-full pt-48 '
      crosses
      crossesOffset='lg:translate-y-[5.25rem]'
      customPaddings=' '
      id='carriere'
    >
      <SectionHeaders
        titre='Carrière'
        paragraphe="Apres 15 ans d'hotellerie la chance m'a permi de trouver le developpement informatique une passion depuis toujours"
      />

      <div className='container relative'>
        <div className='relative z-1 mx-auto mb-[3.875rem] max-w-[62rem] text-center md:mb-20 lg:mb-[6.25rem]'>
          <div className='mt-20 flex flex-col '>
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
