'use client'
import type { StaticImageData } from 'next/image'
import { useRef, useLayoutEffect, useEffect, useState } from 'react';
import FragDestaqueF from './fragDestaqueF';
import FragDestaqueMasc from './fragDestaqueMasc';
import SetComponentsDestaque from './setComponentsDestaq';

// import libs
// import Image from 'next/image';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
// import { Geist_Mono, Sansita } from "next/font/google";
// // import images
// import BleuChanel from '../../../../public/bleuchanel-destaq.png'
// import BadBoy from '../../../../public/badboy-destaq.png'
// import Phantom from '../../../../public/phantom-destaq.png'
// import Heroes212 from '../../../../public/heroes212-destaq.png'


// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
//   weight: "900"
// });

// const sansita = Sansita({
//   variable: "--font-sansita",
//   subsets: ["latin"],
//   weight: '800'
// });

// // Interface para os itens de fragrância
// interface FragancesDestaque {
//   id: number;
//   title: string;
//   description: string;
//   img?: StaticImageData;
// }

// // Array de dados de fragrâncias
// const ArrayFragances: FragancesDestaque[] = [
//   {
//     id: 1,
//     title: "Bleu de Chanel",
//     description: "Elegante e atemporal, combina notas amadeiradas e cítricas para um aroma fresco, intenso e marcante. Perfeito para homens confiantes e sofisticados.",
//     img: BleuChanel
//   },
//   {
//     id: 2,
//     title: "Bad Boy C.H",
//     description: "Intenso e ousado, combina notas de pimenta preta, bergamota, tonka e cacau. Um aroma marcante para homens confiantes e autênticos.",
//     img: BadBoy
//   },
//   {
//     id: 3,
//     title: "Phantom Pacor R",
//     description: "Moderno e ousado, mistura lavanda, limão e baunilha em uma fragrância futurista e energética. Ideal para quem quer se destacar com atitude e estilo.",
//     img: Phantom
//   },
//   {
//     id: 4,
//     title: "Heroes 212",
//     description: "Fragrância fresca e marcante com notas de pêra, gengibre e musk. Ideal para quem vive com intensidade e estilo.",
//     img: Heroes212
//   },


// ];

// gsap.registerPlugin(ScrollTrigger);
export default function FragDestaques() {
  // const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  // const handleCardRef = (el: HTMLDivElement | null, index: number) => {
  //   if (el) {
  //     cardsRef.current[index] = el; // Atribuindo a referência ao índice correto
  //   }
  // };

  // useEffect(() => {
  //   cardsRef.current.forEach((cardsRef, index) => {
  //     if (cardsRef) {
  //       gsap.fromTo(
  //         cardsRef,
  //         { opacity: 0, y: 100 }, // Estado inicial
  //         {
  //           opacity: 1, // Finaliza com opacidade 1
  //           y: 0, // Finaliza na posição original
  //           delay: index * 0.2, // Delay para animar um card de cada vez
  //           scrollTrigger: {
  //             trigger: cardsRef, // O card será o trigger para a animação
  //             start: "top 80%",
  //             end: "top 30%",
  //             toggleActions: "play none none reverse",
  //           },
  //           duration: 0.5, // Duração da animação
  //         }
  //       );
  //     }
  //   });
  // }, []);

  // const titleRef = useRef<HTMLHeadingElement>(null);
  // useLayoutEffect(() => {
  //   if (titleRef) {
  //     gsap.fromTo(titleRef.current, {
  //       opacity: 0,
  //       y: 50,
  //       duration: 1,

  //     }, {
  //       y: 0,
  //       opacity: 1,
  //       ease: 'power2.out',
  //       scrollTrigger: {
  //         trigger: titleRef.current,
  //         start: 'top 80%',
  //         end: 'top 50%',
  //         toggleActions: 'play none none reverse',
  //       },
  //     })
  //   }
  // }, [])



  const [fragMasc, setFragMasc] = useState(true)
  const [fragFem, setFragFem] = useState(true)


  return (
    <div className="flex flex-col gap-5 items-center w-full min-h-[70dvh]
    h-full p-5 text-white  bg-gradient-to-b from-background via-black
    to-[#121212]" id='fragdestaques'>
      <SetComponentsDestaque
        onFragMascChangeAction
        onFragFemChangeAction
    }
      />


    </div >
  )
}
