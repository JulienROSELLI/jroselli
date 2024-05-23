"use client";
import React from "react";
import { SectionCard } from "./SectionCard";
import { SectionHeaders } from "./SectionHeaders";
import { SectionWrapper } from "@/hoc";
import Image from "next/image";
import { photo } from "@/assets";
import { dataPresentation } from "@/constants";
import CardSection from "./CardSection";

const Presentation = () => {
  let { titre, texte } = dataPresentation;
  return (
    <CardSection className='' id='introduction'>
      {/*//TODO : work reesponsive flex*/}
      <div className='xs:flex-col flex flex-col items-center justify-center'>
        <figure className=' w-40  pt-4'>
          <Image
            src={photo}
            alt='Julien Roselli'
            className='  rounded-full object-contain'
            width={150}
            height={150}
          />
        </figure>
        <div className=' '>
          <SectionHeaders titre={titre} texte={texte} />
        </div>
      </div>
    </CardSection>
  );
};

export default SectionWrapper(Presentation, "presentation");
