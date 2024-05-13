"use client";
import { SectionWrapper } from "@/hoc";

import React from "react";
import { SectionCard } from "./SectionCard";
import { SectionHeaders } from "./SectionHeaders";

function Projets() {
  return (
    <SectionCard
      className="pt-[12rem] -mt-[5.25rem] w-full "
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings=""
      id="introduction"
    >
      <SectionHeaders
        titre="Mes projets"
        paragraphe="ici on affiche mes projets"
      />
    </SectionCard>
  );
}

export default SectionWrapper(Projets, "projets");
