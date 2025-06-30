'use client'
import Image from 'next/image';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ReactNode, useEffect, useRef, useState } from "react";
import { StaticImageData } from "next/image";

gsap.registerPlugin(ScrollTrigger);

interface TimelineProps {
  id: number,
  title: string,
  description: string,
  icon?: ReactNode[] | string,
  img?: StaticImageData,
}

const ArrayTimelineMaker: TimelineProps[] = [

  {
    id: 1,
    title: "Curadoria",
    description: "Selecionamos cuidadosamente apenas perfumes de alta qualidade das melhores marcas nacionais e internacionais.",
    icon: "✨",
  },
  {
    id: 2,
    title: "Variedade",
    description: "Oferecemos uma ampla gama de fragrâncias para todos os gostos, estilos e ocasiões especiais.",
    icon: "🎨",
  },
  {
    id: 3,
    title: "Qualidade",
    description: "Buscamos a sofisticação em cada detalhe, desde a formulação até a apresentação final.",
    icon: "💎",
  },

  {
    id: 4,
    title: "Confiança",
    description: "Construímos relacionamentos duradouros baseados na transparência e satisfação do cliente.",
    icon: "🤝",
  },



]

export default function AboutAbner() {
  const cardsRef = useRef<(HTMLLIElement | null)[]>([])
  const descriptionAbnerRef = useRef<HTMLDivElement>(null)


  const handleCardRef = (el: HTMLLIElement | null, index: number) => {
    if (el) {
      cardsRef.current[index] = el;
    }
  }

  useEffect(() => {
    cardsRef.current.forEach((cardsRef, index) => {
      if (cardsRef) {
        gsap.fromTo(
          cardsRef,
          { opacity: 0, y: 100 }, // Estado inicial
          {
            opacity: 1, // Finaliza com opacidade 1
            y: 0, // Finaliza na posição original
            delay: index * 0.2, // Delay para animar um card de cada vez
            scrollTrigger: {
              trigger: cardsRef, // O card será o trigger para a animação
              start: "top bottom", // <-- começa a animar assim que o elemento encostar na parte inferior da viewport
              end: "top 30%",
              toggleActions: "play none none reverse",
            },
            duration: 0.5, // Duração da animação
          }
        );
      }
    })
  }, [])

  useEffect(() => {
    if (descriptionAbnerRef) {
      gsap.fromTo(
        descriptionAbnerRef,
        { opacity: 0, y: 100 }, // Estado inicial
        {
          opacity: 1, // Finaliza com opacidade 1
          y: 0, // Finaliza na posição original
          delay: 0.5, // Delay para animar um card de cada vez
          scrollTrigger: {
            start: "top 80%",
            end: "top 30%",
            toggleActions: "play none none reverse",
          },
          duration: 0.5, // Duração da animação
        }
      );
    }
  }, [])


  return (
    <div className="flex flex-col justify-center items-center
     w-full min-h-screen text-white p-5
     bg-gradient-to-t from-black to-[#121212]">

      <section
        className={`flex flex-col-reverse justify-center items-center w-full
        h-full lg:flex-row overflow-hidden gap-5 md:gap-0
        rounded-xl `}
      >
        <div className="py-3 px-2 w-full h-full  lg:ml-2 lg:rounded-2xl">
          <main className="flex flex-col gap-3 lg:gap-5">
            <div className='w-full'>
              <ul >
                {
                  ArrayTimelineMaker.map((item, i) => (
                    <li key={i}
                      ref={(el) => handleCardRef(el, i)}
                      className="relative flex gap-6 pb-5" >
                      <div className={`before:absolute before:left-[5.5px] before:h-full
                          before:w-[1px] before:bg-borderbd
                       ${i === ArrayTimelineMaker.length - 1 ?
                          "before:bg-gradient-to-b before:from-bd-activitys before:to-black"
                          : ""}
                          `}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" className="bi bi-circle-fill fill-borderbd">
                          <circle cx="6" cy="6" r="6" />
                        </svg>
                      </div>
                      <div className="w-full p-5 text-sm  textgray-600 border border-borderbd rounded-2xl  shadow-shadowcard ">
                        <p className='text-2xl flex  items-center gap-2  lg:flex-col-reverse lg:gap-0 '>{item.title}
                          <span className='text-2xl flex  lg:mt-3'>{item.icon}</span>
                        </p>
                        <p className=" lg:text-center  xs:text-base text-xs sm:text-sm mt-2 lg:mt-5">{item.description}</p>
                      </div>
                    </li>
                  ))
                }

              </ul>
            </div>
          </main>
        </div>

        <div className='lg:ml-5 mb-7 md:mb-0 w-full h-full flex flex-col lg:gap-5  justify-center items-center
         p-5'>

          <div
            ref={descriptionAbnerRef}
            className=' border border-borderbd rounded-2xl p-5 shadow-shadowcard'>
            <header className='flex flex-col justify-center items-center  text-center '>
              <Image
                src="/abner.png"
                alt="Image Perfume"
                className="object-cover rounded-full w-40 border border-amber-400
                shadow-shdamber"
                width={300}
                height={200}


              />

              <div className='mt-5 '>
                <h1 className='text-3xl font-semibold  '>Abner Lincon</h1>
                <p className='text-gray-200'>Fundador</p>
              </div>
            </header>

            <div>
              <p className='text-sm sm:text-base text-gray-300'>
                Apaixonado por fragrâncias desde sempre, Abner Lincon decidiu transformar seu amor pelos perfumes em um negócio
                própio. Com conhecimento adiquirido através de cursos especializados e experiência como consumidor exigente, ele
                fundou a Fragrância Divina para compartilhar sua paixão e oferecer perfumes de qualidade com atendimento personalizado.
                Cada produto é cuidadosamente selecionado para proporcionar experiências olfativas únicas e memoráveis.
              </p>
            </div>


          </div>


          <div
            ref={descriptionAbnerRef}
            className='border border-borderbd rounded-2xl p-5 shadow-shadowcard'>
            <header className='flex flex-col justify-start   text-start '>
              <Image
                src="/abner.png"
                alt="Image Perfume"
                className="object-cover rounded-full w-30 border border-amber-400  "
                width={400}
                height={200}
              />

              <div className='mt-5 mb-10'>
                <h1 className='text-3xl font-semibold '> Nossa Origem</h1>
              </div>
            </header>

            <div>
              <p className='text-sm sm:text-base text-gray-300'>
                A Fragância Divina nasceu em 2024 do sonho de democratizar o acesso a perfumes de alta qualidade.
                Nossa loja surgiu da paixão genuína por fragrâncias e da vontade de oferecer uma experiência diferenciada
                no mundo dos perfumes. Mesmo sendo uma empresa jovem, já conquistamos a confiança de nossos clientes através
                da curadoria cuidadosa de produtos e do atendimento personalizado. Cada perfume em nosso catálogo é selecionado pensando em quem valoriza a elegância, a autenticidade e a qualidade.
              </p>
            </div>


          </div>
        </div>


      </section >
    </div >
  )
}


{/* <div className="border-b border-borderbd w-full">
              <h1 className={`text-sm lg:text-lg ${!isLoaded ? 'opacity-100' : ''}`} ref={text1Ref}>Fragância Divina</h1>
              <p className={`text-sm text-gray-300 ${!isLoaded ? 'opacity-100' : ''}`} ref={text2Ref}>Abner Lincon</p>
            </div>

            <div>

            </div>*/}
