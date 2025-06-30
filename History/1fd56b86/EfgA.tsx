'use client'
import type { StaticImageData } from 'next/image'
import { useRef, useLayoutEffect, useEffect } from 'react';
// import libs
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { Geist_Mono, Sansita } from "next/font/google";
// import images
import BleuChanel from '../../../../public/bleuchanel-destaq.png'
import BadBoy from '../../../../public/badboy-destaq.png'
import Phantom from '../../../../public/phantom-destaq.png'
import Heroes212 from '../../../../public/heroes212-destaq.png'


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
interface FragancesDestaque {
  id: number;
  title: string;
  description: string;
  img?: StaticImageData;
}

// Array de dados de fragrâncias
const ArrayFragances: FragancesDestaque[] = [
  {
    id: 1,
    title: "Bleu de Chanel",
    description: "Elegante e atemporal, combina notas amadeiradas e cítricas para um aroma fresco, intenso e marcante. Perfeito para homens confiantes e sofisticados.",
    img: BleuChanel
  },
  {
    id: 2,
    title: "Bad Boy C.H",
    description: "Intenso e ousado, combina notas de pimenta preta, bergamota, tonka e cacau. Um aroma marcante para homens confiantes e autênticos.",
    img: BadBoy
  },
  {
    id: 3,
    title: "Phantom Pacor R",
    description: "Moderno e ousado, mistura lavanda, limão e baunilha em uma fragrância futurista e energética. Ideal para quem quer se destacar com atitude e estilo.",
    img: Phantom
  },
  {
    id: 4,
    title: "Heroes 212",
    description: "Fragrância fresca e marcante com notas de pêra, gengibre e musk. Ideal para quem vive com intensidade e estilo.",
    img: Heroes212
  },


];

gsap.registerPlugin(ScrollTrigger);
export default function FragDestaques() {
  const cards = useRef<(HTMLDivElement | null)[]>([]);
  const handleCardRef = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      cards.current[index] = el; // Atribuindo a referência ao índice correto
    }
  };

  useEffect(() => {
    cards.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 100 }, // Estado inicial
          {
            opacity: 1, // Finaliza com opacidade 1
            y: 0, // Finaliza na posição original
            delay: index * 0.2, // Delay para animar um card de cada vez
            scrollTrigger: {
              trigger: card, // O card será o trigger para a animação
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
    h-full p-5 text-white  bg-gradient-to-b from-background via-black
    to-[#121212]">
      <h1 className="text-2xl font-bold mb-4">Destaques de Fragâncias</h1>

      <div className="w-full flex justify-center items-center p-5">
        <div className="flex items-center justify-center flex-wrap  gap-y-5
       border-red-500   "

        >
          {ArrayFragances.length > 0 ? (
            ArrayFragances.map((frag, index) => (
              <div
                ref={(el) => handleCardRef(el, index)}
                key={frag.id}
                className="flex flex-col justify-center items-center border
                border-borderbd text-white px-6 py-4 mx-2 rounded-xl
                max-w-[33dvh] w-full basis-auto max-h-full h-full sm:h-[60dvh]
                snap-start bg-black transition-all duration-300 transform
                hover:scale-105 shadow-lg gap-y-5"
              >
                <Image
                  src={frag.img || '/fallback-image.svg'}
                  alt="Image Perfume"
                  priority
                  className="object-cover rounded-xl  w-2/2  "
                  width={300}
                  height={200}
                />

                <article className='flex flex-col justify-center text-start gap-1 lg:h-[20dvh] border'>
                  <p className="flex flex-row text-lg gap-2md:text-2xl lg:text-sm">
                    <span className={`${geistMono.variable} text-white`}>{frag.title}</span>
                  </p>

                  <p className="flex flex-col font-semibold gap-1 lg:text-sm">
                    <span
                      className={`${sansita.variable} font-light text-md break-words whitespace-pre-wrap text-gray-200 lg:text-xs`}>
                      {frag.description}</span>
                  </p>
                </article>
              </div>
            ))
          ) : (
            <div className="text-center py-8">Carregando...</div>
          )}
        </div>
      </div>
    </div >
  )
}
