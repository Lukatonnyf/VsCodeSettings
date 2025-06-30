'use client';
import { useRef, useEffect } from "react";
// import { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IoIosPlanet } from "react-icons/io";



// interface Menu {
//   id: number,
//   text: string,
//   url?: string,
// }

// const MenuItems: Menu[] = [
//   {
//     id: 1,
//     text: "Página Principal",
//   },
//   {
//     id: 2,
//     text: "Criar Tarefa",
//   },
//   {
//     id: 3,
//     text: "Desenvolvedores",
//   }

// ]




// gsap.registerPlugin(ScrollTrigger);
export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null);
  //animação do card geral
  useLayoutEffect(() => {
    if (card.current) {
      gsap.fromTo(
        card.current,
        {
          opacity: 0,
          y: 100, // posição inicial (100px à esquerda)
        }, {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power2.out',
        delay: 1,
      })
    }
  }, [])


  return (
    <header ref={headerRef}
      className="fixed z-10 flex justify-start items-center transition-all duration-300
        w-full h-[10dvh] p-10 rounded-b-full ">
      <section className="flex w-full justify-start">

        <div className="w-full flex flex-row  items-center gap-1">
          <IoIosPlanet className='text-purple-400 text-5xl' />
          <h1 className="text-white">Plan.net</h1>
        </div>
      </section>
    </header>
  )
}
