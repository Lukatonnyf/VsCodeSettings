"use client"

import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { useRouter } from "next/navigation";

interface FormValues {
  name: string,
  email: string,
  feedback: string
}



export default function FeedbackFormPage() {
  const router = useRouter()

  const handleSubmit = async (data: FormValues) => {
    console.log("dados q serão enviados para a API: ", data)

    try {
      const response = await axios.post('/api/feedback', data)
      console.log("resposta da API: ", response.data, { text: "foifoi" })


      if (response.data.ok) {
        router.push()
      }
    }

  }


  return (
    <Card className="w-full max-w-sm
      text-[#a9a9a9]
    bg-white/3  backdrop-blur-lg
      border border-bordercomponents">
      <CardHeader>
        <CardTitle>Deixe o seu Feedback abaixo</CardTitle>
        <CardDescription>
          Descreva a sua experiência com meu trabalho!
        </CardDescription>
        <CardAction>
          <Button variant="link">Sign Up</Button>
        </CardAction>
      </CardHeader>

      {/* Conteudo */}
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            {/* INPUT NAME */}
            <div className="grid gap-2">
              <Label htmlFor="text">Nome</Label>
              <Input
                id="text"
                type="text"
                placeholder="Digite seu Nome"
                className=" border border-bordercomponents outline-none  "
                required
              />
            </div>

            {/* INPUT EMAIL ( OPICIONAL ) */}
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                className=" border border-bordercomponents  outline-none"
                placeholder="m@example.com"
                required
              />
            </div>

            {/* TEXTAREA FEEDBACK */}
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="feedback">Feedback</Label>
              </div>
              <Textarea id="feedback"
                required
                placeholder="Escreva seu Feedback aqui!"
                className="resize-none
                   border border-bordercomponents outline-none" />
            </div>
          </div>
        </form>
      </CardContent>

      {/* FOOTER */}
      <CardFooter className="flex-col gap-3">
        <Button type="submit" className="w-full">
          Enviar Feedback
        </Button>
        <Button variant="outline" className="w-full">
          Ver Feedbacks
        </Button>

      </CardFooter>
    </Card>
  )
}
