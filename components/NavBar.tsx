"use client";
import React, { useState } from "react";

import Link from "next/link";

import Image from "next/image";
import { navLinks } from "@/constants";
import { close, menu, logo } from "@/assets";
import { objectLink } from "@/constants";

const Navbar = () => {
  const [active, setActive] = useState<string>("");
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <nav
      className={`fixed  left-0 top-0 z-50 max-h-16 w-full border-b border-n-6 bg-n-8  p-2  px-5  lg:bg-n-8/90 
      `}
    >
      {/* bg-n-8/90 */}
      <div className=' flex w-full max-w-7xl items-center justify-between'>
        <Link
          href='/'
          className='flex items-center gap-2 '
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <Image
            src={logo}
            alt='logo'
            width={40}
            height={45}
            className=' rounded-3xl object-contain'
          />
          <p className='cursor-pointer  text-[18px] font-bold text-white '>
            Julien Roselli
          </p>
        </Link>
        <ul className='hidden list-none flex-row gap-10 sm:flex'>
          {navLinks.map(({ id, name }: objectLink) => (
            <li
              key={id}
              className={`${
                active === name ? "text-white" : "text-secondary"
              } cursor-pointer text-[18px] font-medium hover:text-white`}
              onClick={() => setActive(name)}
            >
              <a href={`#${id}`}>{name}</a>
            </li>
          ))}
        </ul>
        <div className='flex flex-1 items-center justify-end sm:hidden '>
          <Image
            src={toggle ? close : menu}
            alt='menu'
            className=' object-contain'
            width={28}
            height={28}
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } black-gradient absolute right-0 top-20 z-10 mx-4 my-2 min-w-[140px] rounded-xl p-6`}
          >
            <ul className='flex  list-none flex-col gap-4'>
              {navLinks.map(({ id, name }: objectLink) => (
                <li
                  key={id}
                  className={`${
                    active === name ? "text-white" : "text-secondary"
                  } cursor-pointer text-[18px] font-medium hover:text-white`}
                  onClick={() => {
                    setActive(name);
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${id}`}>{name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
