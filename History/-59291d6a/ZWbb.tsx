import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";


export default function Home() {
  return (
    <div className=" w-full h-screen  flex justify-center items-center
    text-[#a9a9a9]">

      <Card className="w-full max-w-sm
      text-[#a9a9a9]
      bg-transparent backdrop-blur-md
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
                  required
                />
              </div>

              {/* INPUT EMAIL ( OPICIONAL ) */}
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"

                  placeholder="m@example.com"
                  required
                />
              </div>

              {/* TEXTAREA FEEDBACK */}
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="feedback">Feedback</Label>
                </div>
                <Textarea id="feedback" required

                  placeholder="Escreva seu Feedback aqui!"
                  className="resize-none bg-background-inputs" />
              </div>
            </div>
          </form>
        </CardContent>

        {/* FOOTER */}
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            Enviar Feedback
          </Button>
          <Button variant="outline" className="w-full">
            Ver Feedbacks
          </Button>

        </CardFooter>
      </Card>
    </div>
  )
}

// </div >

