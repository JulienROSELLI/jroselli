'use client'
import { SectionWrapper } from '@/hoc'
import React, { Suspense } from 'react'
import TechCanvas from './canvas/TechCanvas'
import { TechList, TechListType } from '@/constants'
import { StaticImageData } from 'next/image'
import { SectionCard } from './SectionCard'
import { SectionHeaders } from './SectionHeaders'
import { Common, View } from './canvas/View'
import { OrbitControls } from '@react-three/drei'
import Ball from './canvas/TechCanvas'

const Technologies = () => {
  return (
    <SectionCard className=' w-full pt-24 ' crosses crossesOffset='lg:translate-y-[5.25rem]' customPaddings=' '>
      <div className='flex flex-col gap-4'>
        <SectionHeaders
          titre='Langages et frameworks'
          paragraphe="Mes projest m'ont ammené a utilisé diverses technologies"
        />

        <div className='relative flex flex-wrap items-center justify-center gap-5'>
          {TechList.map((tech) => (
            <div key={tech.name} className='flex size-40 flex-col items-center justify-center'>
              <View className='size-40'>
                <Suspense fallback={null}>
                  <OrbitControls enableZoom={false} />
                  <Ball icon={tech.icon} />

                  <Common />
                </Suspense>
              </View>
              <h4 className='text-white'>{tech.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </SectionCard>
  )
}

export default SectionWrapper(Technologies, 'technologies')
