import { useState } from "react";

// Atualização para usar onSubmitAction (renomeado)
interface FeedbackFormProps {
  onSubmitAction: (name: string, feedback: string) => void;
}

interface Props {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function FormFeedback({ onSubmitAction }: FeedbackFormProps, { show }: Props) {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [showForm, setShowForm] = useState(false)

  // Função para lidar com o envio do formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();  // Impede o comportamento padrão do formulário
    onSubmitAction(name, feedback);  // Chama a função de ação
    setName("");  // Limpa o campo de nome
    setFeedback("");  // Limpa o campo de feedback
  };



  return (
    <form onSubmit={handleSubmit} className="absolute flex flex-col
    w-2/3 h-[50dvh] z-10 p-5 rounded-xl lg:w-1/2
     text-gray-300 gap-2
    bg-background"  >
      <label className="flex justify-between">Descreva Sua experiencia
        <span className="text-gray-100" >X</span>
      </label>

      <label className="font-medium text-white">Nome</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Digite seu Nome e sobrenome"
        className="border border-borderbd p-2 rounded w-full mb-2"
        required
      />

      <label className="font-medium text-white">Feedback</label>
      <input
        type="text"
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        placeholder="Escreva seu Feedback"
        className="border border-borderbd p-2 rounded w-full mb-2"
      />

      <input
        type="submit"
        value="Enviar Feedback"
        className="mt-10 cursor-pointer w-full
        bg-gradient-to-r from-[#ffd700] to-[#b47e00] rounded text-black"
      />
    </form>
  );
}
