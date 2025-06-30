"use client";

import React, { useLayoutEffect, useRef } from "react";
import { ReactNode } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

import Image from "next/image"; 
import FrontEnd from "./frontEnd";
import BackEnd from "./backEnd";
import { StaticImageData } from "next/image";


import Figma from "/public/figma.svg";
import LenguageHtml from "/public/html.svg"
import CSS from "/public/css3.svg";
import JavaScript from "/public/javascript.svg";
import TypeScript from "/public/typescript.svg";
import ReactJS from "/public/react.svg";
import TailwindCSS from "/public/tailwindcss.svg";


export interface PropsCards {
    id: number;
    imgSrc?: StaticImageData ;
    label: string;
    desc: string;
}




const skillItem: PropsCards[] = [
    { id: 1, imgSrc: LenguageHtml, label: "HTML", desc: "Design tool" },
    { id: 2, imgSrc: CSS, label: "CSS", desc: "User Interface" },
    { id: 3, imgSrc: JavaScript, label: "JavaScript", desc: "Interaction" },
    { id: 4, imgSrc: TypeScript, label: "TypeScript", desc: "Typing " },
    { id: 5, imgSrc: TailwindCSS, label: "TailwindCSS", desc: "User Interface" },
    { id: 6, imgSrc: ReactJS, label: "React", desc: "Framework" },

];


gsap.registerPlugin(ScrollTrigger);
export default function Card(){
    const boxRef = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
        if (boxRef.current) {
            gsap.from(boxRef.current, {
                opacity: 0,
                y: 0,
                x:10,
                duration: 2,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: boxRef.current,
                  start: "top 90%", // Quando 80% do vídeo entrar na tela
                  end: "top 50%",   // Até 50% do vídeo na tela
                  toggleActions: "play none none reverse", // Animação de entrada e saída
                },    
        });
        }
      }, []);

    return(
        <div ref={boxRef} className="w-full  justify-center flex items-centter" >
         <ul className="flex justify-center flex-col gap-5  min-w-full p-5 lg:flex-row lg:flex-wrap"> 
            {
                skillItem.map((skills) => (
                    <li key={skills.id} 
                    className="flex  justify-start items-center w-full h-[10dvh]
                     bg-gray-700 gap-3 p-3 rounded-2xl  border border-gray-500
                     sm:gap-5 lg:max-w-[40dvh] lg:max-h-[9dvh]">
                        <div className="max-w-[5dvh] bg-gray-500 p-2 rounded-2xl">
                            <Image 
                            src={skills.imgSrc || "/fallback-image.svg"} 
                            alt={skills.desc} 
                            className="h-[4dvh]"  />
                        </div>

                      <div className="flex flex-col gap-1">
                            <h1 className="text-gray-200 font-heading font-semibold sm:text-2xl xl:text-xl ">{skills.label}</h1>
                            <span className="text-gray-400 font-sans font-semibold sm:text-xl xl:text-sm">{skills.desc}</span>
                        </div>    

                    </li>

                ))
            }
 
 
        </ul>


    </div>
    )
}