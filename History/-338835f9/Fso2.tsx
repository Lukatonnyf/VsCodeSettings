"use client"

import Card from "@/ui/Cards";

import ThemeSwitcher from "@/providers/theme-switcher";
import { jwtDecode } from 'jwt-decode'


import { useRouter } from "next/navigation"
import { useState, useEffect } from "react";




type TokenPayload = {
  userId: string
  email: string
  exp: number // tempo de expiração
}


const MenuBar = () => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);




  const handleClick = () => {
    const token = localStorage.getItem('token')

    if (!token) {
      // Caso o token não exista, ou esteja inválido, o usuário vai pra página
      // de login
      return router.push('/login')
    }

    try {
      const decoded = jwtDecode<TokenPayload>(token)

      const agora = Date.now() / 1000 // => Pega o horário real, converte em
      // milissegundos, para comparar com o tempo do token, para validar se o
      // token está valido ou não
      if (decoded.exp < agora) {
        // Token expirado
        localStorage.removeItem('token')
        return router.push('/login')
      }

      // Usuário está logado → redirecionar
      router.push(`/profile/${decoded.userId}`)
    } catch {
      // Token inválido
      localStorage.removeItem('token')
      router.push('/login')
    }
  }



  return (
    <Card className="fixed top-17 right-6 w-[16rem] h-[22rem]] p-5 gap-5">
      <h1 className="font-bold text-xl">Menu</h1>

      <div className="flex flex-col gap-2 w-full">
        <div className="flex flex-row  gap-1 w-full ">
          <button
            onClick={handleClick}
            className="rounded-sm bg-tertiary w-full py-4  transition-all duration-400  hover:bg-background">Minha conta</button>
          <button className="rounded-sm bg-tertiary w-full py-4 transition-all duration-400   hover:bg-background">Eventos</button>
        </div>
        <div className="flex flex-row gap-1 w-full">
          <button className="rounded-sm  bg-tertiary w-full py-4 transition-all duration-400   hover:bg-background">Galeria</button>
          <button className="rounded-sm bg-tertiary w-full py-4 transition-all duration-400   hover:bg-background">Sair</button>
        </div>

        <h1>Acessibilidade</h1>
        <div className="bg-none">
          <ThemeSwitcher />
        </div>
      </div>
    </Card>
  )

}

export default MenuBar;
