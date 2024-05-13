'use client'
import React from 'react'

import { textVariant } from '@/utils/motion'
import { motion } from 'framer-motion'

export const SectionHeaders = ({ titre, paragraphe }: { titre: string; paragraphe: string }) => {
  return (
    <motion.div variants={textVariant()}>
      <h1 className='xs:text-[40px] px-6  text-[30px]  text-white sm:px-16  sm:text-[50px] md:text-[60px]'>{titre}</h1>
      <p className='px-6 text-[14px]  tracking-wider text-secondary sm:px-16 sm:text-[18px] xl:text-3xl'>
        {paragraphe}
      </p>
    </motion.div>
  )
}
