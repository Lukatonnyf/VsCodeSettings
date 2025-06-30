"use client"

import { ScrollTrigger } from "gsap/all";
import gsap from "gsap"
import { useEffect, useRef } from 'react';
import Button from '@/ui/button';
gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const elementsRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)

  const numeroWhatsApp = '5511934092531';
  const mensagem = 'Olá! Vi seu portfólio e me interessei pelo seu trabalho. Quero tirar meu projeto do papel e gostaria de conversar com você!';
  const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;

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
      className="  fixed z-50 transform w-full h-[10dvh] flex justify-center px-5  text-white  ">
      <div
        ref={elementsRef}
        className=" max-w-[1140px] w-full  h-full  flex   px-10  justify-between items-center backdrop-blur-xs">
        LT
        <div className='hidden md:flex gap-5 '>
          <Button className="border border-borderbd px-3 bg-background duration-300 ease-in hover:scale-110 "
            onClick={() => window.open(urlWhatsApp, '_blank')}>Entrar em Contato</Button>
          <Button
            onClick={() => window.open('https://link-tree-eta-three.vercel.app/aboutProject/1', '_blank')}
            className="border border-borderbd px-3 bg-background duration-300 ease-in hover:scale-110 " >Meu Linktree </Button>

        </div>
      </div>
    </div>
  )
}


export default Header
