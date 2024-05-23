import { curlyBackets } from "@/assets/svg/curlyBrackets";
import { cn } from "@/lib/utils";

import React from "react";

type cardSectionProps = {
  children?: React.ReactNode;
  className?: string;
  id?: string;
};

function CardSection({ children, className, id }: cardSectionProps) {
  return (
    <div className='w-[96%]'>
      <div
        className={cn(
          `relative flex flex-col items-center justify-center rounded-2xl border border-slate-800/50 bg-muted  p-4 shadow shadow-slate-800/50`,
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}

export default CardSection;
