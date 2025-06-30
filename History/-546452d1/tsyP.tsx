"use client"
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/all';

interface FeedbacksProps {
  id: string;
  name: string;
  feedback: string;
  created_at: string;
}

interface FeedbackListProps {
  feedbacks: FeedbacksProps[];
}
gsap.registerPlugin(ScrollTrigger);
const AdvancedCarousel: React.FC<FeedbackListProps> = ({ feedbacks }) => {

  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(3);
  const totalItems = feedbacks.length;
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + visible >= totalItems ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.max(0, totalItems - visible) : prevIndex - 1
    );
  };

  useEffect(() => {
    if (containerRef.current && itemRefs.current[currentIndex]) {
      const container = containerRef.current;
      const item = itemRefs.current[currentIndex];

      if (item) {
        container.scrollTo({
          left: item.offsetLeft - 16,
          behavior: "smooth"
        });
      }
    }
  }, [currentIndex]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisible(1);
      } else if (window.innerWidth < 1024) {
        setVisible(2);
      } else {
        setVisible(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    itemRefs.current = Array(totalItems).fill(null);
  }, [totalItems]);



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
            toggleActions: 'play none none reverse',
          }
        },
      )
    }
  }, [])

  // ANIMAÇÃO BOTAO DA DIREITA
  const buttonRightRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (buttonRightRef) {
      gsap.fromTo(buttonRightRef.current,
        { opacity: 0, scale: 0 },
        {
          opacity: 1, scale: 1, delay: 0.6,
          scrollTrigger: {
            trigger: buttonRightRef.current,
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play none none reverse',
          }
        },
      )
    }
  }, [])

  // ANIMAÇÃO BOTAO DA ESQUERDA
  const buttonLeftRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (buttonLeftRef) {
      gsap.fromTo(buttonLeftRef.current,
        { opacity: 0, scale: 0 },
        {
          opacity: 1, scale: 1,
          scrollTrigger: {
            trigger: buttonLeftRef.current,
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play none none reverse',
          }
        },
      )
    }
  }, [])


  return (
    <div
      id="feedback"
      className="relative w-full max-w-6xl mx-auto my-8 px-4 mb-5 lg:mb-20">
      {/* Botões de navegação */}
      <div className=" justify-between mb-4 hidden sm:flex">
        <button
          ref={buttonLeftRef}
          onClick={prevSlide}
          className="border border-[#121212] text-white  px-4 py-2 rounded-lg shadow lg:text-sm lg:py-1 lg:px-10"
        >
          Anterior
        </button>


        <button
          ref={buttonRightRef}
          onClick={nextSlide}
          className="border border-[#121212] text-white  px-4 py-2 rounded-lg shadow lg:text-sm lg:py-1 lg:px-10"
        >
          Próximo
        </button>
      </div>

      <section
        className="flex flex-row gap-1 overflow-x-auto whitespace-nowrap
        scrollbar-hide snap-x p-5 h-full "
        ref={containerRef}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >

        {feedbacks.length > 0 ? (
          feedbacks.map((feedback, index) => (
            <div
              key={feedback.id}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              className="flex flex-col justify-between items-start  border border-borderbd  mx-2
        rounded-xl  snap-start transition-all duration-300 transform
        hover:scale-105 shadow-lg gap-2 px-3 pb-2 "
            >
              <div className="flex flex-col w-[31dvh]  h-full
              py-5 gap-5 break-words overflow-hidden   ">
                <p className="flex flex-row  gap-2 text-gray-400 md:text-2xl lg:text-sm">
                  Usuário:
                  <span className="font-medium text-white ">{feedback.name}</span>
                </p>

                <p className="flex flex-col font-semibold gap-1 text-gray-400  md:text-2xl
             ">
                  Feedback:
                  <span
                    className="font-medium break-words whitespace-pre-wrap text-gray-200
                    md:text-xl md:font-normal lg:font-normal   lg:text-xl">
                    {feedback.feedback}</span>
                </p>
              </div>
              <p><span className="font-medium lg:text-sm">{new Date(feedback.created_at).toLocaleString()}</span></p>


            </div>
          ))
        ) : (
          <div className="text-center py-8 w-full "

          >Carregando...</div>
        )}
      </section >



    </div >
  );
};

export default AdvancedCarousel;
