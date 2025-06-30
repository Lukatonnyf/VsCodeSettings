'use client'
import type { StaticImageData } from 'next/image'
import { useRef, useLayoutEffect, useEffect } from 'react';
// import libs
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Geist_Mono, Sansita } from "next/font/google";

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
// const ArrayFragances: FragDestaqueMasc[] = [
//   {
//     id: 1,
//     title: "Bleu de Chanel",
//     description: "Elegante e atemporal, combina notas amadeiradas e cítricas para um aroma fresco, intenso e marcante. Perfeito para homens confiantes e sofisticados.",
//   },
//   {
//     id: 2,
//     title: "Bad Boy C.H",
//     description: "Intenso e ousado, combina notas de pimenta preta, bergamota, tonka e cacau. Um aroma marcante para homens confiantes e autênticos.",
//   },
//   {
//     id: 3,
//     title: "Phantom Pacor R",
//     description: "Moderno e ousado, mistura lavanda, limão e baunilha em uma fragrância futurista e energética. Ideal para quem quer se destacar com atitude e estilo.",
//   },
//   {
//     id: 4,
//     title: "Heroes 212",
//     description: "Fragrância fresca e marcante com notas de pêra, gengibre e musk. Ideal para quem vive com intensidade e estilo.",
//   },


// ];

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
    <div className="text-gray-50">
      teste
    </div>
  )
}
