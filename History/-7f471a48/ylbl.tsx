import { useState } from "react";

// Atualização para usar onSubmitAction (renomeado)
interface FeedbackFormProps {
  onSubmitAction: (name: string, feedback: string) => void;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  innerRef: React.Ref<HTMLFormElement>;
}



export default function FormFeedback({ onSubmitAction, setShow, innerRef }: FeedbackFormProps) {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");

  // Função para lidar com o envio do formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();  // Impede o comportamento padrão do formulário
    onSubmitAction(name, feedback);  // Chama a função de ação
    setName("");  // Limpa o campo de nome
    setFeedback("");  // Limpa o campo de feedback
  };






  return (
    <form onSubmit={handleSubmit} ref={innerRef}
      className="fixed flex flex-col  w-2/3 h-[auto] top-50 z-10 p-5 rounded-xl
      lg:w-1/2 text-gray-300 gap-2 bg-background border-borderbd border"  >
      <label className="flex justify-between">Descreva Sua experiencia
        <button className="w-[5dvh] text-gray-100" onClick={() => setShow(false)}>X</button>
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
        onClick={() => setShow(false)}
        className="mt-10 cursor-pointer w-full
        bg-gradient-to-r from-[#ffd700] to-[#b47e00] rounded text-black"
      />
    </form>
  );
}

