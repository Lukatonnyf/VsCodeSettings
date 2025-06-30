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
       bg-gray-700 border border-gray-500  rounded-2xl lg:gap-0">
        <div className="flex justify-center items-startw-full ">
          <Image
            src="/icon.png"
            alt="foto tonny "
            className="object-cover rounded-full"
            width={300} // 
            height={200}
            layout="intrinsic" 
          />
        </div>

        <h1>Hello Word! </h1>
      </div>
    </div>
  )
}

// PARA ARRUMAR O ERRO DO VIDEO NAO APARECER, COLOCAR ELE NO YT, E PUXAR COM UMA API
// PARA O SITE (LEMBRETE!!)
