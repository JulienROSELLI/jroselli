"use client";
import { SectionWrapper } from "@/hoc";
import React, { Suspense } from "react";
import TechCanvas from "./canvas/TechCanvas";
import { TechListType, dataTecnologies } from "@/constants";
import { Button } from "@/components/ui/button";
import { SectionCard } from "./SectionCard";
import { SectionHeaders } from "./SectionHeaders";
import { Common, View } from "./canvas/View";
import { OrbitControls } from "@react-three/drei";
import Ball from "./canvas/TechCanvas";
import { TechList } from "@/constants/techs";
import EarthCanvas from "./canvas/Earth";
import StarsCanvas from "./canvas/Stars";
import CardSection from "./CardSection";

const Technologies = () => {
  let { titre, texte } = dataTecnologies;
  let [isAnimated, setIsAnimated] = React.useState<boolean>(false);

  return (
    <CardSection className='   bg-dark-1 dark:bg-muted' id='technologies'>
      <div className=' flex flex-col gap-4'>
        <SectionHeaders titre={titre} texte={texte} />
        <Button
          className='z-2'
          variant='outline'
          onClick={() => setIsAnimated(!isAnimated)}
        >
          Animation
        </Button>
        {!isAnimated ? (
          <div className=' flex flex-wrap items-center justify-center gap-5'>
            {TechList.map(
              ({ name, icon, bgColor, positionDecal }: TechListType) => (
                <div
                  key={name}
                  className='flex size-40 flex-col items-center justify-center'
                >
                  <View className=' size-40'>
                    <Suspense fallback={null}>
                      <OrbitControls enableZoom={false} />
                      <Ball
                        icon={icon}
                        bgColor={bgColor}
                        positionDecal={positionDecal}
                      />

                      <Common />
                    </Suspense>
                  </View>
                  <h4 className='capitalize text-white'>{name}</h4>
                </div>
              )
            )}
          </div>
        ) : (
          <>
            <div className='relative left-[45%] flex aspect-square w-[70rem] -translate-x-1/2 scale-100 rounded-full  md:scale-100'>
              <div
                className='absolute 
          z-5 m-auto aspect-square w-[75rem] rounded-full'
              >
                <EarthCanvas />
              </div>
              <div className='rotate-x-50'>
                <div className=' rotating m-auto aspect-square w-[75rem] rounded-full '>
                  <div className='m-auto aspect-square w-24 rounded-full p-[0.2rem] '>
                    {/* <div className='flex size-full items-center justify-center rounded-full bg-n-8'> */}
                    {/* <div className='relative flex flex-wrap items-center justify-center gap-5'> */}
                    {TechList.map(({ bgColor, icon, name }, index) => {
                      const degree = (360 / TechList.length) * index;
                      let className = `rotate(${degree}deg) `;
                      let classNameNeg = `rotate(-${degree}deg) `;

                      return (
                        <div
                          key={name}
                          className={`absolute left-1/2 top-0 ml-[1.6rem] h-1/2 origin-bottom  `}
                          style={{ transform: className }}
                        >
                          <View
                            customStyle={{ transform: className }}
                            className={` relative top-[1.6rem] flex size-28   `}
                          >
                            <Suspense fallback={null}>
                              <OrbitControls enableZoom={false} />
                              <Ball icon={icon} bgColor={bgColor} />

                              <Common />
                            </Suspense>
                          </View>
                          {/* <h4 className='text-white'>{name}</h4> */}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>{" "}
            <div>
              <StarsCanvas />
            </div>
          </>
        )}
      </div>
    </CardSection>
  );
};

export default SectionWrapper(Technologies, "technologies");
