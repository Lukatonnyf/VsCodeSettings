'use client';

import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Btn from './components/button';

export default function HomePage() {
  const text = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (text.current) {
      gsap.to(text.current, {
        delay: 1,
        opacity: 1,
        duration: 1.5,
        ease: "none", 
      });
    }
  }, []);

  return (
    <div className="w-full min-h-[100dvh] flex justify-center items-center flex-col">
      <div
        className="flex flex-col justify-center items-center text-gray-200 p-5 gap-1 
        w-full opacity-0"
        ref={text}
      >
        <h1 className="flex justify-center text-center font-heading font-semibold text-xl w-full sm:text-4xl">
          Welcome to my portfolio!
        </h1>
        <h2 className="font-heading">
          Lukatonny web <span className="text-purple">developer</span>
        </h2>
      </div>

      <Btn text="Learn More..." />
    </div>
  );
}
