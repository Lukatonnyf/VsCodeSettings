
"use client"
// Importe o FormFeedback
import Carousel from "../components/carousel";  // Importe o Carousel

import { useEffect, useRef, useState } from "react";
import { api } from "../../services/api";
import { v4 as uuidv4 } from 'uuid';
import FormFeedback from './formFeedback';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/all';




interface Feedback {
  id: string;
  name: string;
  feedback: string;
  created_at: string;
}

gsap.registerPlugin(ScrollTrigger);
export default function FeedbackItemProps() {
  const [showForm, setShowForm] = useState(false)
  // Referências para o container e os itens
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  useEffect(() => {
    loadFeedbacks()
  }, [])

  async function loadFeedbacks() {
    try {
      const response = await api.get("/feedbacks");
      setFeedbacks(response.data);
    } catch (error) {
      console.error("Erro ao carregar feedbacks", error);
    }
  }
  const handleNewFeedback = (name: string, feedback: string) => {
    const newFeedback: Feedback = {
      id: uuidv4(), // ou algum outro id único
      name,
      feedback,
      created_at: new Date().toISOString(),
    };
    setFeedbacks(prev => [...prev, newFeedback]);
  };


  const titleRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (titleRef) {
      gsap.fromTo(titleRef.current,
        { opacity: 0, scale: 0, y: 70 },
        {
          opacity: 1, scale: 1, y: 0, duration: 1, delay: 0.5,
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play none none reverse',
          }
        },
      )
    }
  }, [])

  const buttonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (buttonRef) {
      gsap.fromTo(buttonRef.current,
        { opacity: 0, scale: 0, y: 70 },
        {
          opacity: 1, scale: 1, y: 0, duration: 1, delay: 0.5,
          scrollTrigger: {
            trigger: buttonRef.current,
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play none none reverse',
          }
        },
      )
    }
  }, [])



  return (
    <div className="flex flex-col items-center w-full min-h-[70dvh] h-full p-5
     text-white
      bg-gradient-to-t from-black
  to-[#121212]
     ">

      <div
        className="w-full flex flex-col justify-center items-center
    text-2xl font-bold mb-4">

        <h2 ref={titleRef} className="text-2xl font-bold mb-6 text-center">Feedbacks Recebidos</h2>



        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-gradient-to-t from-[#0a0a0a] to-[#121212] border-2  border-[#121212] text-white px-4 py-2
          text-sm rounded-lg shadow md:text-lg lg:text-sm lg:px-7  lg:py-2 ">
          Adicionar Feedback
        </button>
      </div>
      {
        showForm &&
        (
          <FormFeedback onSubmitAction={handleNewFeedback} show={showForm} setShow={setShowForm} />
        )

      }


      <Carousel feedbacks={feedbacks} />

      {/* <Carousel /> */}
    </div >
  );
}


