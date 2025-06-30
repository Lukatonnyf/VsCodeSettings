'use client'
import Image from 'next/image'
import type { StaticImageData } from 'next/image'


import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { gsap } from 'gsap'

gsap.registerPlugin(ScrollTrigger)
export default function VideoPlayer() {
  // const videoRef = useRef<HTMLVideoElement>(null)

  // useLayoutEffect(() => {
  //   if (videoRef.current) {
  //     gsap.from(videoRef.current, {
  //       opacity: 0,
  //       y: 50,
  //       duration: 1,
  //       ease: 'power2.out',
  //       scrollTrigger: {
  //         trigger: videoRef.current,
  //         start: 'top 80%', // Quando 80% do vídeo entrar na tela
  //         end: 'top 50%', // Até 50% do vídeo na tela
  //         toggleActions: 'play none none reverse', // Animação de entrada e saída
  //       },
  //     })
  //   }
  // }, [])

  return (
    <div
      id="target-section"
      className="flex flex-row flex-wrap  justify-center items-center  max-w-full mx-auto w-full   p-2 min-h-[50dvh]
      h-full xl:max-w-[170dvh] sm:gap-2 "
    >
      <div className="flex flex-col justify-center items-center  w-full gap-5 
       bg-gray-700 border border-gray-500 rounded-2xl md:flex-row lg:gap-0">

        <div className="flex justify-center items-start w-full  p-2 gap-5">
          <Image
            src="/icon.png"
            alt="foto tonny "
            className="object-cover rounded-full"
            width={300} // 
            height={200}
            layout="intrinsic" 
          />
        </div>

        <div
        className="flex flex-col justify-center items-start bg-gray-700 border border-gray-500 w-full p-2 gap-5
        rounded-2xl  text-gray-300 lg:gap-3 lg:text-sm md:max-w-[50dvh]"
      >
        <section className="text-gray-100 font-semibold font-heading  min-h-full h-full">
          <h1>Lukatonny Ferreira</h1>
          <p>breve resumo</p>
        </section>

        <div className="flex flex-col gap-1 text-sm">
          <p>
            Nascido e criado em São Paulo, sempre fui uma criança curiosa e
            ativa, experimentando diversas atividades ao longo da vida. Aos 8
            anos, comecei a tocar saxofone reto e, além da música, também
            pratiquei esportes como futsal e vôlei.
          </p>
          <p>
            Com o início da pandemia e o isolamento social, desenvolvi uma
            paixão pela tecnologia. Passava muito tempo envolvido com jogos
            eletrônicos e conteúdos digitais, o que despertou minha curiosidade
            sobre como tudo funcionava e qual era a visão de quem desenvolvia
            essas tecnologias. No entanto, essa curiosidade, inicialmente, não
            foi suficiente para me fazer ingressar na área.
          </p>
          <p>
            No início de 2023, decidi explorar o mundo do desenvolvimento apenas
            por curiosidade. com o incentivo de um amigo, comecei a me
            aprofundar no assunto. Porém, foi somente em meados de 2024 que
            resolvi focar realmente na área, buscando o máximo de conteúdo
            gratuito disponível o que explica a ausência de certificados formais
            no momento.
          </p>
          <p>
            Atualmente, planejo minha entrada no mercado de tecnologia. Estou
            ansioso para enfrentar novos desafios e conquistar oportunidades na
            área de desenvolvimento!
          </p>
        </div>
      </div>
      </div>
    </div>
  )
}

// PARA ARRUMAR O ERRO DO VIDEO NAO APARECER, COLOCAR ELE NO YT, E PUXAR COM UMA API
// PARA O SITE (LEMBRETE!!)
