import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


export default function Home() {
  return (
    <div className=" w-full h-screen  flex justify-center items-center
    text-[#a9a9a9]">

      <Card className="w-full max-w-sm
      text-[#a9a9a9]
      bg-transparent backdrop-blur-md
      border border-[#a9a9a9]">
        <CardHeader>
          <CardTitle>Deixe o seu Feedback abaixo</CardTitle>
          <CardDescription>
            Descreva a sua experiência com meu trabalho!
          </CardDescription>
        </CardHeader>

        {/* Conteudo */}
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" required />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            Login
          </Button>
          <Button variant="outline" className="w-full">
            Login with Google
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

// </div >

