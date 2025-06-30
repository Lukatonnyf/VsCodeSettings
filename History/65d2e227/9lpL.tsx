
"use client"
// Importe o FormFeedback
import Link from 'next/link'
import Carousel from "../components/carousel";  // Importe o Carousel

import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { v4 as uuidv4 } from 'uuid';





interface Feedback {
  id: string;
  name: string;
  feedback: string;
  created_at: string;
}


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




  return (
    <div className="flex flex-col items-center w-full min-h-[70dvh] h-full p-5
     text-white
      bg-gradient-to-t from-black
       to-background
     ">

      <div className="w-full flex flex-col justify-center items-center
    text-2xl font-bold mb-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Feedbacks Recebidos</h2>



        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-gradient-to-r from-[#d9ad26] to-[#bf930d] hover:bg-blue-700 text-white px-4 py-2
          text-sm rounded-lg shadow md:text-lg">
          Adicionar Feedback
        </button>
      </div>
      {
        showForm &&
        (
          <FormFeedback onSubmitAction={handleNewFeedback} />
        )

      }


      <Carousel feedbacks={feedbacks} />

      {/* <Carousel /> */}
    </div >
  );
}


