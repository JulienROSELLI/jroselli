import { PlusSvg } from '@/assets/svg/SvgLib'
import { slideIn } from '@/utils/motion'
import React from 'react'
import { motion } from 'framer-motion'

const SectionSvg = ({ crossesOffset }: { crossesOffset?: string }) => {
  return (
    <>
      <PlusSvg
        className={`absolute left-[1.5625rem] top-[-5px] hidden ${
          crossesOffset && crossesOffset
        } pointer-events-none lg:block xl:left-[2.1875rem]`}
      />

      <PlusSvg
        className={`absolute right-[1.5625rem]  top-[-5px] hidden ${
          crossesOffset && crossesOffset
        } pointer-events-none lg:block xl:right-[2.1875rem]`}
      />
    </>
  )
}

type sectionProps = {
  children?: React.ReactNode
  className?: string
  id?: string
  crosses?: boolean
  crossesOffset?: string
  customPaddings?: string
}
export const SectionCard = ({ children, className, id, crosses, crossesOffset, customPaddings }: sectionProps) => {
  return (
    <div
      id={id}
      className={`
  relative 
  ${customPaddings || `py-10 lg:pb-10 xl:py-20 ${crosses ? 'lg:pb-10 xl:py-24' : ''}`} 
  ${className || ''}`}
    >
      {children}

      <div className='pointer-events-none absolute left-5 top-0 hidden h-full w-0.25 bg-stroke-1 md:block lg:left-7.5 xl:left-10' />
      <div className='pointer-events-none absolute right-5 top-0 hidden h-full w-0.25 bg-stroke-1 md:block lg:right-7.5 xl:right-10' />

      {crosses && (
        <>
          <div
            className={`absolute inset-x-7.5 top-0 hidden h-0.25 bg-stroke-1 ${
              crossesOffset && crossesOffset
            } pointer-events-none right-10 lg:block xl:left-10`}
          />
          <SectionSvg crossesOffset={crossesOffset} />
        </>
      )}
    </div>
  )
}
