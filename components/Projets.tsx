"use client";
import { SectionWrapper } from "@/hoc";

import React from "react";

import { SectionHeaders } from "./SectionHeaders";
import ProjectCard from "./ProjectCard";
import { dataProjets } from "@/constants";
import CardSection from "./CardSection";
import Link from "next/link";

function Projets() {
  let { titre, texte } = dataProjets;
  return (
    <CardSection className=' mt-[5.25rem]   ' id='projets'>
      <SectionHeaders titre={titre} texte={texte} />

      <div className='flex '>
        <Link href='/todo'>
          <ProjectCard
            title='Todo'
            text='petite application de gestion de tâches'
          />
        </Link>
      </div>
    </CardSection>
  );
}

export default SectionWrapper(Projets, "projets");
