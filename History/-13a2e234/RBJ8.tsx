"use client"

import Image from 'next/image';
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap"
import { useEffect, useRef } from 'react';
import Button from '@/ui/button';
gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const elementsRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (headerRef.current) {

      gsap.set(elementsRef.current, {
        y: 0,
        borderWidth: 0,
        borderColor: "#373639",
        borderRadius: 0,
      });

      gsap.to(
        elementsRef.current,
        {
          y: 10,
          borderWidth: 1,
          borderRadius: "100px",
          scrollTrigger: {
            trigger: elementsRef.current,
            start: "top top",
            scrub: true
          }
        }
      )

    }
  }, [])
  return (
    <div ref={headerRef}
      id="site-header"
      className="  fixed z-50 transform w-full h-[10dvh] flex justify-center px-5  text-white  ">
      <div
        ref={elementsRef}
        className="max-w-[1140px] w-full  h-full  flex   px-10  justify-between
        align-center items-center backdrop-blur-xs bg-red-200">

        <span>LT</span>

        <div className='hidden md:flex gap-5 '>
          <Button className="border border-borderbd px-3" >Entrar em Contato</Button>
          <Button className="border border-borderbd px-3" >Meu Linktree </Button>

        </div>
      </div>
    </div>
  )
}


export default Header
