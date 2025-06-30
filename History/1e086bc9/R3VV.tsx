"use client"

import { Button } from "@/components/ui/button";
import { CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FormWrapper } from "@/providers/formWrapper";
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

        router.push('https://lukatonnysferreiraportifolio.vercel.app/')
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('erro Axios', error.response?.data || error.message)
      } else {
        console.error('erro ao enviar dados:', error)
      }
    }

  }


  return (
    <FormWrapper<FormValues>
      defaultValues={{ name: "", email: "", feedback: "" }}
      onSubmit={handleSubmit}
      className="w-full max-w-sm flex flex-col
      gap-5 rounded-xl  py-6 shadow-sm
      text-[#a9a9a9]
    bg-white/3  backdrop-blur-lg
       border border-bordercomponents"
    >
      {(methods) => (
        <>
          <CardHeader>
            <CardTitle>Deixe o seu Feedback abaixo</CardTitle>
            <CardDescription>
              Descreva a sua experiência com meu trabalho!
            </CardDescription>
          </CardHeader>

          {/* Conteudo */}
          <CardContent>
            <section onSubmit={methods.handleSubmit(handleSubmit)}>
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
                    {...methods.register("name")}
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
                    {...methods.register("email")}
                  />
                </div>

                {/* TEXTAREA FEEDBACK */}
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="feedback">Feedback</Label>
                  </div>
                  <Textarea
                    id="feedback"
                    required
                    placeholder="Escreva seu Feedback aqui!"
                    className="resize-none
                       border border-bordercomponents outline-none"
                    {...methods.register("feedback")}
                  />
                </div>
              </div>
              {/* FOOTER */}
              <CardFooter className="flex-col gap-3 mt-5">
                <Button type="submit" className="w-full">
                  Enviar Feedback
                </Button>

                {/* CRIAR O COMPONENTE DE FEEDBACKS */}
                <Button variant="outline" className="w-full">
                  Ver Feedbacks
                </Button>
              </CardFooter>
            </section>
          </CardContent>
        </>
      )}
    </FormWrapper>
  )
}
