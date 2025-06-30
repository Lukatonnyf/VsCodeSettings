import { useState } from "react";

// Atualização para usar onSubmitAction (renomeado)
interface FeedbackFormProps {
  onSubmitAction: (name: string, feedback: string) => void;
}

export default function FormFeedback({ onSubmitAction }: FeedbackFormProps) {
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
    {
      showForm && (

      )
    }
  );
}
