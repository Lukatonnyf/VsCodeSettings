'use client'
import type { StaticImageData } from 'next/image'
import { useRef, useEffect } from 'react';
// import libs
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Geist_Mono, Sansita } from "next/font/google";

// import images
import myWay from '../../../../public/myway-fem.png'
import GoodGilr from '../../../../public/goodgilr-fem.png'
import Scandal from '../../../../public/scandal-perfum.png'

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: "900"
});

const sansita = Sansita({
  variable: "--font-sansita",
  subsets: ["latin"],
  weight: '800'
});

// Interface para os itens de fragrância
interface FragDestaqueMasc {
  id: number;
  title: string;
  description: string;
  img?: StaticImageData;
}

// Array de dados de fragrâncias
const ArrayFragances: FragDestaqueMasc[] = [
  {
    id: 1,
    title: "My Way",
    description: "Moderno e delicado, My Way une notas florais e frutadas em uma fragrância leve, sofisticada e inesquecível. Perfeito para mulheres autênticas que vivem a vida do seu jeito, com elegância e liberdade.",
    img: myWay
  },
  {
    id: 2,
    title: "Good Girl",
    description: "Elegante e envolvente, Good Girl combina notas florais e orientais para um aroma marcante, sofisticado e feminino. Ideal para mulheres seguras, sensuais e cheias de personalidade.",
    img: GoodGilr
  },
  {
    id: 3,
    title: "Scandal",
    description: "Elegante e atemporal, Scandal combina notas amadeiradas e cítricas, criando um aroma fresco, intenso e marcante. Ideal para homens confiantes e sofisticados.",
    img: Scandal
  },



];

gsap.registerPlugin(ScrollTrigger);

export default function FragDestaqueF() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const handleCardRef = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      cardsRef.current[index] = el; // Atribuindo a referência ao índice correto
    }
  };

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
              start: "top 80%",
              end: "top 30%",
              toggleActions: "play none none reverse",
            },
            duration: 0.5, // Duração da animação
          }
        );
      }
    });
  }, []);



  return (
    <div className="flex flex-col gap-5 items-center w-full min-h-[70dvh]
    h-full p-5 text-white">

      <div className="w-full flex justify-center items-center p-5">
        <div className="flex items-center justify-center flex-wrap  gap-y-5">
          {
            ArrayFragances.map((frag, index) => (
              <div
                ref={(el) => handleCardRef(el, index)}
                key={frag.id}
                className="flex flex-col justify-center items-center border
                border-borderbd text-white px-6 py-4 mx-2 rounded-xl
                max-w-[33dvh] w-full basis-auto max-h-full h-full sm:h-[60dvh]
                snap-start bg-black transition-all duration-300 transform
                 shadow-lg gap-y-5

                 hover:border-amber-400"
              >
                <Image
                  src={frag.img || '/fallback-image.svg'}
                  alt="Image Perfume"
                  className="object-cover rounded-xl  w-2/2  "
                  width={300}
                  height={200}
                />

                <article className='flex flex-col justify-center text-start gap-1 lg:h-[20dvh] '>
                  <p className="flex flex-row text-lg gap-2md:text-2xl lg:text-2xl">
                    <span className={`${geistMono.variable} text-white `}>{frag.title}</span>
                  </p>

                  <p className="flex flex-col font-semibold gap-1 lg:text-sm">
                    <span
                      className={`${sansita.variable} font-light text-md break-words
                       whitespace-pre-wrap text-gray-200 `}>
                      {frag.description}</span>
                  </p>
                </article>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
