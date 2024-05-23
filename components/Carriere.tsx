"use client";
import { dataCarriere, experiences, objectExperience } from "@/constants";

import Image from "next/image";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { SectionHeaders } from "./SectionHeaders";
import { SectionWrapper } from "@/hoc";
import CardSection from "./CardSection";

const ExperienceCard: React.ElementType = ({
  experience: { date, logo, entreprise, poste, bgLogo, desciption }
}: {
  experience: objectExperience;
}) => (
  <VerticalTimelineElement
    // className='border'
    // dateClassName='border'
    // iconClassName='border'
    // textClassName='border'
    className='text-muted-foreground'
    visible
    contentStyle={{
      background: "#3b82f6",

      padding: "1.5rem",

      maxWidth: "40rem"
    }}
    contentArrowStyle={{ borderRight: "7px solid  #232631" }}
    date={date}
    iconStyle={{ background: bgLogo }}
    icon={
      <div className='flex size-full items-center justify-center'>
        <Image
          src={logo}
          alt={entreprise}
          className='size-3/5 object-contain'
        />
      </div>
    }
  >
    <div className='flex flex-col items-center justify-between p-2 text-primary-foreground '>
      <span className='text-[24px] font-bold '>{poste}</span>
      <span className='text-[16px] font-semibold ' style={{ margin: 0 }}>
        {entreprise}
      </span>
    </div>

    <ul className=' list-disc pl-4 text-primary-foreground'>
      {desciption.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className=' text-start text-[14px] tracking-wider'
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

export const Carriere = () => {
  let { titre, texte } = dataCarriere;
  return (
    <CardSection className=' flex flex-col' id='carriere'>
      <SectionHeaders titre={titre} texte={texte} />
      <div className='flex w-full flex-col items-center justify-center'>
        <div className='container relative z-1 m-0  p-0 text-center'>
          <div className=' flex  flex-col items-center justify-center'>
            <VerticalTimeline className=''>
              {experiences.map((experience: objectExperience) => (
                <ExperienceCard
                  key={`experience-${experience.id}`}
                  experience={experience}
                />
              ))}
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </CardSection>
  );
};

export default SectionWrapper(Carriere, "carriere");
