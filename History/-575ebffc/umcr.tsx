'use client'

import { ArrayProjects } from "@/app/components/carousel"
import { usePathname } from "next/navigation"


const AboutProject = () => {
  const pathname = usePathname()
  const id = pathname?.split('/').pop()

  if (!id) return <div>carregando...</div>

  const projeto = ArrayProjects.find(project => project.id === Number(id))

  if (!projeto) {
    return <div>projeto nao encontrado</div>
  }

  return (
    <div className="w-full min-h-screen h-full bg-background overflow-y-hidden">
      <section className="w-full h-screen px-5 flex flex-col justify-center items-center
      overflow-hidden">

        <div className="w-full flex flex-col justify-center items-center max-w-2xl
        gap-2 md:flex-row lg:max-w-4xl lg:gap-5">

          <div className="w-fuill">
            <div className="w-full justify-start flex flex-col items-start mb-2">
              <h1 className="font-semibold text-xl">Sobe o Projeto
                <span className="text-colortext font-normal"></span>
              </h1>


            </div>

          </div>

        </div>
      </section>
    </div>
  )
}
