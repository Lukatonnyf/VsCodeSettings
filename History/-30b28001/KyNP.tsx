"use client"
import { useEffect, useRef, useState } from "react"
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);
const FeedbackCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visible, setVisible] = useState(4)
  const totalItems = feedbacks.lenght

  const itemsRef = useRef<Array<HTMLDivElement | null>>([])
  const containerRef = useRef<HTMLDivElement>(null)


  // const nextFeedback = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex + visible >= totalItems ? 0 : prevIndex + 1)
  // }

  // const prevSlide = () => {
  //   setCurrentIndex((prevIndex) =>
  //   prevIndex === 0 ? Math.max(0,))
  // }

  useEffect(() => {
    if (containerRef.current && itemsRef.current[currentIndex]) {
      const container = containerRef.current;
      const item = itemsRef.current;

      if (item) {
        container.scrollTo({
          left: item.offsetLeft - 16;
          behavior: "smooth"
        })
      }
    }

  }, [currentIndex])

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

    // =>  Quando o Componente for desmontado, o Evento se desfaz
    return () => window.removeEventListener("resize", handleResize)
  }, [])


  return (
    <div>

    </div>
  )
}
