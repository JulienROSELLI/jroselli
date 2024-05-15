import { cn } from "@/lib/utils";
import React from "react";

import image from "@/public/purpleNight.jpg";
import Image from "next/image";

//TODO refaractor extraire les fonction por nettoyer ce code

const brackets = (position?: "left" | "right") =>
  position === "left" ? (
    <svg
      width='5'
      height='14'
      viewBox='0 0 5 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M5 0.822266H1V12.8223H5' stroke='url(#brackets-left)' />
      <defs>
        <linearGradient id='brackets-left' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#89F9E8' />
          <stop offset='100%' stopColor='#FACB7B' />
        </linearGradient>
      </defs>
    </svg>
  ) : (
    <svg
      width='5'
      height='14'
      viewBox='0 0 5 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M-2.98023e-08 0.822266H4V12.8223H-2.98023e-08'
        stroke='url(#brackets-right)'
      />
      <defs>
        <linearGradient
          id='brackets-right'
          x1='14.635%'
          x2='14.635%'
          y1='0%'
          y2='100%'
        >
          <stop offset='0%' stopColor='#9099FC' />
          <stop offset='100%' stopColor='#D87CEE' />
        </linearGradient>
      </defs>
    </svg>
  );

const Tagline = ({
  className,
  children
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className={`tagline flex items-center ${className}`}>
      {brackets("left")}
      <div className='mx-3 text-n-3'>{children}</div>
      {brackets("right")}
    </div>
  );
};
const GradientLight = () => {
  return (
    <div className=' pointer-events-none absolute left-1/4 top-0 aspect-square w-full from-[#28206C] to-[#28206C]/0 to-70%' />
  );
};

const Heading = ({
  className,
  title,
  text,
  tag
}: {
  className?: string;
  title?: string;
  text?: string;
  tag?: string;
}) => {
  return (
    <div
      className={cn(
        "max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center",
        className
      )}
    >
      {tag && <Tagline className='mb-4 md:justify-center'>{tag}</Tagline>}
      <h2>{title}</h2>
      {text && <p className='body-2 mt-4 text-n-4'>{text}</p>}
    </div>
  );
};

const Arrow: React.FC = () => {
  return (
    <svg className='ml-5 fill-n-1' width='24' height='24'>
      <path d='M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414z' />
    </svg>
  );
};

const ClipPath: React.FC = () => {
  return (
    <svg className='block' width={0} height={0}>
      <clipPath id='benefits' clipPathUnits='objectBoundingBox'>
        <path d='M0.079,0 h0.756 a0.079,0.083,0,0,1,0.058,0.026 l0.086,0.096 A0.079,0.083,0,0,1,1,0.179 V0.917 c0,0.046,-0.035,0.083,-0.079,0.083 H0.079 c-0.044,0,-0.079,-0.037,-0.079,-0.083 V0.083 C0,0.037,0.035,0,0.079,0' />
      </clipPath>
    </svg>
  );
};

const ProjectCard = ({
  title,
  text,
  iconUrl,
  backgroundUrl,
  tag
}: {
  title?: string;
  text?: string;
  iconUrl?: string;
  backgroundUrl?: string;
  tag?: string;
}) => {
  return (
    <div
      className=' relative block bg-border-gradient-1 bg-[length:100%_100%] bg-no-repeat p-0.5 md:max-w-96'
      style={{ backgroundImage: "url(/card-2.svg)" }}
    >
      <div className='pointer-events-none relative z-2 flex min-h-[22rem] flex-col p-[2.4rem]'>
        <h5 className='h2 mb-5'>{title}</h5>
        <p className='body-2 mb-6 text-n-3'>{text}</p>
        <div className='  relative flex max-h-20 w-60 flex-col items-center'>
          <div className='p-4'>
            {image && (
              <Image
                src={image}
                alt={"item.title"}
                width={300}
                height={200}
                className=' '
              />
            )}
          </div>
          <p className=' ml-auto text-xs font-bold uppercase tracking-wider text-n-1'>
            Explore more
          </p>
          <Arrow />
        </div>
      </div>
      <GradientLight />
      <div
        className='absolute inset-0.5 bg-n-8'
        style={{ clipPath: "url(#benefits)" }}
      >
        <div className='absolute inset-0 opacity-0 transition-opacity hover:opacity-10'>
          {image && (
            <Image
              src={image}
              alt={"item.title"}
              width={380}
              height={362}
              className='size-full object-cover'
            />
          )}
        </div>
      </div>
      <ClipPath />
    </div>
  );
};

export default ProjectCard;
