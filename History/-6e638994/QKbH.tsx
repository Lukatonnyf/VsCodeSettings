"use client"
import Image from "next/image"
import Button from "@/ui/button"
import gsap from "gsap";

import "../../../globals.css";
import { useEffect, useRef } from "react";

interface ButtonsProps {
  id: number
  text: string
}

const ButtonsArray: ButtonsProps[] = [
  {
    id: 1,
    text: "Discord"
  },
  {
    id: 2,
    text: "GitHub"
  },
  {
    id: 3,
    text: "Linkedin"
  }
]


const Presentation = () => {
  const ButtonsRef = useRef<(HTMLDivElement | null)[]>([])

  const handleCardRef = (el: HTMLDivElement | null, i: number) => {
    if (el) {
      ButtonsRef.current[i] = el
    }
  }

  useEffect(() => {
    ButtonsRef.current.forEach((ButtonsRef, i) => {
      if (ButtonsRef) {
        gsap.fromTo(ButtonsRef,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, delay: i * 0.2 }
        )
      }
    })
  }, [])

  return (
    <div className=" w-full   flex  justify-center items-center min-h-[50dvh] h-full ">
      <section className=" flex flex-col items-center w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 py-10 gap-6 sm:gap-10">

        <main className="flex flex-col justify-center items-center max-w-[1240px]  w-full gap-2 sm:gap-5 text-text-color text-center px-5">
          <div className="flex justify-center items-center ">
            <Image
              src="/profile.jpeg"
              alt="Profile Image"
              className="rounded-full"
              width={150}
              height={100}
            />
          </div>


          <h1 className="text-xl sm:text-3xl lg:text-4xl font-semibold">
            Olá, Eu sou Lukatonny
            <span className="bg-clip-text bg-gradient-to-r from-gray-200 via-degradetext-via to-degradetext-to text-transparent"> Souza Ferreira.</span>
          </h1>

          <p className="text-sm sm:text-base lg:text-lg">
            FrontEnd Developer<br />
            <span>JavaScript | ReactJs | NextJs | Tailwind | TypeScript</span>
          </p>

          <p className="max-w-2xl text-xs sm:text-base lg:text-lg xl:text-base text-pretty">
            No início de 2023, decidi explorar o mundo do desenvolvimento apenas
            por curiosidade. Com o incentivo de um amigo, comecei a me aprofundar
            no assunto. Porém, foi somente em meados de 2024 que resolvi focar
            realmente na área, buscando o máximo de conteúdo gratuito disponível —
            o que explica a ausência de certificados formais no momento.
          </p>
        </main>

        <section className=" w-full  px-5 flex flex-wrap justify-center items-center gap-3 sm:gap-5 text-black">

          {ButtonsArray.map((item, i) =>
          (
            <div
              ref={(el) => handleCardRef(el, i)}
              key={item.id}
              className=" animate-rotate-      rounded-lg
          bg-conic/[from_var(--border-angle)]
          from-background via-blue-400 to-background from-80% via-90% to-100%
          p-px">
              <Button className="w-full px-5 py-3 rounded-lg bg-neutral-900
            text-text-color hover:">{item.text}</Button>
            </div>
          ))
          }






        </section>

      </section >

    </div >
  )

}

export default Presentation
// #393939
