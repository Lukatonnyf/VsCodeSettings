'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

const logos = [
  '/profile.jpeg',
  '/profile.jpeg',
  '/profile.jpeg',
  '/profile.jpeg',
  '/profile.jpeg',
  '/profile.jpeg',
];

export default function ImageCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null); // Ref para o contêiner interno
  const timelineRef = useRef<gsap.core.Tween | null>(null); // Para armazenar a animação GSAP para limpeza

  useEffect(() => {
    const carouselElement = carouselRef.current;
    if (!carouselElement) return; // Garante que o elemento existe

    // Calcula a largura total de um conjunto de logos, incluindo os espaçamentos
    const numLogos = logos.length; // 6 logos
    const imageWidth = 100; // Largura da imagem definida no Image component
    const gapWidth = 48; // Valor de gap-12 (3rem = 48px)

    // Largura total de um conjunto completo de logos (ex: 6 logos e 5 espaçamentos entre eles)
    const widthOfOneSet = (numLogos * imageWidth) + ((numLogos - 1) * gapWidth);

    // Define a posição inicial do contêiner (opcional, mas boa prática)
    gsap.set(carouselElement, { x: 0 });

    // Cria uma animação contínua
    timelineRef.current = gsap.to(carouselElement, {
      x: `-=${widthOfOneSet}`, // Move para a esquerda pela largura de um conjunto de logos
      duration: 10, // Ajuste a duração para controlar a velocidade da rolagem
      ease: 'none', // Animação linear para um movimento constante
      repeat: -1, // Repete infinitamente
      modifiers: {
        x: gsap.utils.wrap(0, widthOfOneSet), // Garante que a posição x se "enrole" de volta ao início
      },
    });

    // Função de limpeza para parar a animação quando o componente for desmontado
    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill(); // Interrompe e remove a animação GSAP
      }
    };
  }, []); // Array de dependências vazio para rodar apenas uma vez na montagem

  const fullList = [...logos, ...logos]; // Duplicado para criar o efeito de loop contínuo

  return (
    <div className="overflow-hidden bg-black py-8 max-w-9/12">
      <div className="flex w-max gap-12" ref={carouselRef}> {/* Aplica o ref ao div interno */}
        {fullList.map((src, idx) => (
          <div
            key={idx}
            className="logo-slide"
          >
            <Image
              src={src}
              alt={`profile ${idx}`}
              width={100}
              height={60}
              className="object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
