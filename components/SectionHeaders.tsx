"use client";
import React from "react";

import { fadeIn, textVariant } from "@/utils/motion";
import { motion } from "framer-motion";
import { objectDataCards } from "@/constants";
import brackets from "@/assets/svg/Brackets";
import { curlyBackets } from "@/assets/svg/curlyBrackets";

export const SectionHeaders = ({ titre, texte }: objectDataCards) => {
  return (
    // <motion.div variants={textVariant()}>
    <div className='z-5 flex flex-wrap  font-code'>
      <span className='xs:text-[40px] p-2  text-2xl  leading-10  text-blue-600  sm:text-[40px] md:text-[45px]'>
        <span className=' text-4xl text-green-600'>{"{"}</span> {`${titre}`}
        <span className=' text-white'>{' : " '}</span>
        <span className='  text-base  tracking-wider text-secondary sm:text-[18px] xl:text-2xl'>
          {`${texte} `}
          <span className='text-2xl text-white'>{'"'}</span>
          <span className='text-4xl text-green-600'>{" }"}</span>
        </span>
      </span>
    </div>
    // </motion.div>
  );
};
