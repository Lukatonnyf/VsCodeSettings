"use client"
import { useEffect, useRef, useState } from "react"
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/all';


interface FeedbacksProps {
  id: string | number;
  name: string;
  feedback: string;
  created_at: string;
}

interface FeedbackListProps {
  feedbacks: FeedbacksProps[];
}

gsap.registerPlugin(ScrollTrigger);
const FeedbackCarousel: React.FC<FeedbackListProps> = ({ feedbacks }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visible, setVisible] = useState(4)
  const totalItems = feedbacks.lenght

  const itemsRef = useRef<Array<HTMLDivElement | null>>([])
  const containerRef = useRef<HTMLDivElement>(null)


  // => useEffect que define o scroll de cada item
  useEffect(() => {
    if (containerRef.current && itemsRef.current[currentIndex]) {
      const container = containerRef.current;
      const item = itemsRef.current;

      if (item) {
        // => Cria um Scroll para a Direita de 16px
        container.scrollTo({
          left: item.offsetLeft - 16;
          behavior: "smooth"
        })
      }
    }

  }, [currentIndex])


  // => useEffect que seta os items Visíveis
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisible(2)
      } else if (window.innerWidth < 1024) {
        setVisible(3)
      } else {
        setVisible(4)
      }
    }

    // => Chama o Evento uma vez, checando o tamanho da tela
    handleResize()
    window.addEventListener('resize', handleResize)

    // => Quando o Componente for desmontado, o Evento se desfaz
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // => useEffect da Animação dos items
  useEffect(() => {
    if (containerRef) {
      gsap.fromTo(containerRef.current,
        { opacity: 0, scale: 0 },
        {
          opacity: 1, scale: 1, delay: 0.9,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play none none reverse'
          }

        }
      )
    }
  }, [])




  return (
    <div
      className="relative max-w-6xl mx-auto my-8 px-4 mb-5 lg:mb-20">
      <section
        className="flex flex-row gap-1 overflow-x-auto whitespace-nowrap
        scrollbar-hide snap-x p-5 h-full"
        ref={containerRef}
        style={{ scrollbarWidth: "none", msOverflowStyle: 'none' }}
      >
        {
          feedbacks.length > 0 ? (
            feedbacks.map((feedback, index) => (
              <div>
                teste
              </div>
            ))
          )
        }

      </section>

    </div>
  )
}
