'use client'
import Image from "next/image"

// IMPORT LIBS
import gsap from "gsap"
import { useRef, useLayoutEffect } from "react"
import Button from "./components/button"

export default function HomePage() {
  const perfume = useRef<HTMLDivElement>(null)
  const text1 = useRef<HTMLDivElement>(null)
  const text2 = useRef<HTMLDivElement>(null)
  const text3 = useRef<HTMLDivElement>(null)

  const btnFraganciasRef = useRef<HTMLButtonElement>(null);
  const btnDescobrirRef = useRef<HTMLButtonElement>(null);


  // Animação do perfume
  useLayoutEffect(() => {
    if (perfume.current) {
      gsap.fromTo(
        perfume.current,
        {
          opacity: 0,
          // scale: 0,
        }, {
        // scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: 'power2.out',
        delay: 1,
      })
    }
  }, [])

  // Animação dos Textos
  useLayoutEffect(() => {
    gsap.fromTo(
      text1.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, ease: 'power2.out', delay: 1.5 }
    );

    gsap.fromTo(
      text2.current,
      { opacity: 0, x: -50, },
      { opacity: 1, x: 0, duration: 1, ease: 'power2.out', delay: 1.9 }
    );

    gsap.fromTo(
      text3.current,
      { opacity: 0, y: 50, },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out', delay: 2.2 }
    );
  }, []);

  // Animação dos Bottões
  useLayoutEffect(() => {
    gsap.fromTo(
      btnDescobrirRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "none", delay: 2.4 }
    );

    gsap.fromTo(
      btnFraganciasRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "none", delay: 2.3 }
    );
  }, []);

  const numeroWhatsApp = '5511912345678'; // Número no formato internacional
  const mensagem = 'Olá, gostaria de saber mais informações!'; // Mensagem pré-pronta
  const mensagemCodificada = encodeURIComponent(mensagem);

  return (
    <div className="relative z-0 w-full min-h-[90dvh] sm:min-h-[95dvh] lg:min-h-[100dvh] h-full flex flex-col
      justify-center items-center bg-gradient-to-b from-black
       to-background ">
      {/* CONTAINER GERAL */}
      <div className='flex flex-col-reverse justify-center items-center w-full
      h-full p-5 lg:flex-row overflow-hidden'>
        {/* CONTAINER DOS TEXTS E BUTTONS */}
        <section className="w-full flex flex-col
        justify-center items-center text-gray-200 p-5 gap-5 lg:p-10 lg:gap-15
        md:justify-center md:items-center">

          {/* TEXTOS E BUTTONS */}
          <div className="flex flex-col gap-6 max-w-xl">
            <span className='flex flex-col'>
              <h1 className="font-bold text-3xl sm:text-4xl lg:text-4xl" ref={text1}>Fragâncias Divinas</h1>
              <h2 className="font-semibold text-xl sm:text-2xl lg:text-2xl" ref={text2}>Essência da Elegância</h2>

              <span className='flex flex-col p-0 mt- text-sm md:text-sm lg:text-xs' ref={text3}>
                Perfumes que não apenas marcam, mas eternizam momentos.
              </span>

            </span>

            <div className="flex flex-col items-center gap-5 w-full  lg:flex-row">
              <Button innerRef={btnFraganciasRef} text={'Descobrir mais'}
                className="bg-white text-black   " />

              <a href="" className="hover:scale-100">
                <Button innerRef={btnDescobrirRef} text={'Entrar em Contato'}
                  className="text-white  transition   " />
              </a>
            </div>


          </div>
        </section>

        {/* CONTAINER IMAGE */}
        <div className=' -z-20  flex justify-center items-center flex-col
       w-full min-w-[10dvh]  ' ref={perfume}>

          <Image
            src="/perfum.png"
            alt="Perfume"
            priority
            className="object-contain object-center w-[45vw] sm:w-[auto] h-auto max-h-[60vh] sm:max-h-[500px]"
            width={150}
            height={500}
          />

        </div>
      </div >
    </div >
  )
}





