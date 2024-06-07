"use client";
import { SectionWrapper } from "@/hoc";

import React from "react";
import { jplante, recipe, todoApp } from "@/assets";
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
        {/* <Link href='/todo'>
          <ProjectCard
            title='Todo'
            text='petite application de gestion de tâches'
            thumbnail={todoApp}
          />
        </Link> */}
        <Link href='/recettes'>
          <ProjectCard
            title='Recettes'
            text='petite application pour gerer ses recettes'
            thumbnail={recipe}
          />
        </Link>
        <Link href='/jplante'>
          <ProjectCard
            title='Flechettes'
            text='petite application pour enregistrer ses scores au flejchettes'
            thumbnail={jplante}
          />
        </Link>
      </div>
    </CardSection>
  );
}

export default SectionWrapper(Projets, "projets");
