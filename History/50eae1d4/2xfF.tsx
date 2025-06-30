"use client"; 

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

interface Props {
    text: string,
}

export default function Btn({text}: Props){
const btnRef = useRef<HTMLButtonElement>(null)

    useLayoutEffect(() => {
        if (btnRef.current) {
          gsap.to(btnRef.current,{
            delay:0.5,
            opacity:1,
            duration:1.5,
            y:-20,

        });
        }
      }, []);

      const handleScroll = () => {
        const targetSection = document.getElementById(targetSectionId);
      
    if (targetSection) {
        // Smooth scroll to the target section
        targetSection.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
    };
  
    

    return (
        <button ref={btnRef}  type="submit"
         onClick={handleScroll}
        className="mt-1 py-3 p-2 w-[20dvh] text-gray-100 bg-btn rounded-2xl opacity-0  " >
            {text}
        </button>
    )
}