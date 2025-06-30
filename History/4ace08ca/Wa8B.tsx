"use client"
import Button from '@/ui/button';
import { useEffect, useRef, useState } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
export default function ListaDados({ className }: { className: string; }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [dados, setDados] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/collections')
      .then(res => res.json())
      .then(data => setDados(data))
      .catch(console.error);
  }, []);


  const cardsRef = useRef<(HTMLLIElement | null)[]>([])

  const handleCardRef = (el: HTMLLIElement | null, index: number) => {
    if (el) {
      cardsRef.current[index] = el
    }
  }
  useEffect(() => {
    if (dados.length === 0) return;

    cardsRef.current.forEach((cardsRef, index) => {
      if (cardsRef) {
        gsap.fromTo(
          cardsRef,
          { opacity: 0, y: 100 }, // Estado inicial
          {
            opacity: 1, // Finaliza com opacidade 1
            y: 0, // Finaliza na posição original
            delay: index * 0.3, // Delay para animar um card de cada vez
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
  }, [dados])



  return (
    <div className={`${className} flex h-full w-full  justify-center bg-red-4`}>
      <ul className='grid grid-cols-1 md:grid-cols-3 gap-5 p-5'>
        {
          dados.length > 0 ? (
            dados.map((item, index) => (
              <li
                ref={(el) => handleCardRef(el, index)}
                className='flex flex-col justify-between gap-2 md:max-w-[25vw] w-full
            min-h-[35dvh] border border-bordercomponents p-5 rounded-xl'
                key={item._id}>

                <p className='flex flex-row gap-2 font-semibold '>
                  User:
                  <span className='font-normal  '>{item.name}</span>
                </p>


                <p className='flex flex-col font-semibold '>
                  Feedback:
                  <span className='font-normal  '>{item.feedback}</span>
                </p>


                <p className='flex gap-2 font-semibold '>
                  Data:
                  <span className='font-normal'>{new Date(item.subscribedAt).toLocaleDateString()}</span>

                </p>

              </li>
            ))) : (
            <>
              <div className='col-span-full   flex flex-col justify-center items-center'>
                <div className='flex flex-col  justify-center items-center'>
                  <p className='font-semibold text-2xl'>Ainda não possuo Feedbacks :&#40;</p>
                  <Button
                    className='border border-bordercomponents px-5 py-2 mt-2 '
                    onClick={() => window.open('https://feedbacks-page-two.vercel.app/', "_blank")}>Deixe seu Feedback aqui</Button>
                </div>
              </div >
            </>
          )
        }
      </ul >


    </div >
  );
}
