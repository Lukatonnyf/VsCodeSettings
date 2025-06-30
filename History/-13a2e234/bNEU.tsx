"use client"

import { ScrollTrigger } from "gsap/all";
import gsap from "gsap"
import { useEffect, useRef } from 'react';
import Button from '@/ui/button';
gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (headerRef.current) {

      gsap.set(headerRef.current, {
        y: -5,
        borderWidth: 0,
        borderColor: "#a9a9a9",
        borderRadius: 0,
      });

      gsap.to(
        headerRef.current,
        {
          y: 10,
          borderWidth: 1,
          borderRadius: "100px",
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            scrub: true
          }
        }
      )

    }
  }, [])
  return (
    <div ref={headerRef}
      className="  fixed transform w-full h-[10dvh] flex justify-center  px-10 text-white  ">
      <div className=" max-w-[1140px] w-full  h-full  flex   border-amber-50 border justify-between items-center  ">
        LT
        <div className='hidden lg:flex gap-5 '>
          <Button className="border border-borderbd px-3" >Entrar em Contato</Button>
          <Button className="border border-borderbd px-3" >Meu Linktree </Button>

        </div>
      </div>
    </div>
  )
}


export default Header
