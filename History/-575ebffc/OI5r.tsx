'use client'

import { ArrayProjects } from "@/app/components/carousel"
import { usePathname } from "next/navigation"
import Image from "next/image"


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

          <div className="w-full">
            <div className="w-full justify-start flex flex-col items-start mb-2">
              <h1 className="font-semibold text-xl">Sobe o Projeto</h1>
              <h2>
                <span className="text-colortext font-normal">
                  <a href={projeto.link} target="_blank"
                    className="border-b border-b-gray-400">
                    Link
                  </a>
                </span>
              </h2>
            </div>

            <Image
              src={projeto.img}
              alt={`Projeto ${projeto.id}`}
              width={150}
              height={100}
              className="object-contain object-center max-w-[100dvw]
              w-full md:w-[30dvw]"
            />
          </div>


          <div className="flex flex-col gap-2 justify-start mt-4">
            <p className="text-sm flex flex-col font-semibold">
              Descrição:
              <span className="font-normal text-sm ">
                {projeto.description || "Descrição não disponível"}
              </span>
            </p>

            <h1 className="mt-4 font-semibold">Tecnologias Utilizadas</h1>
            <div className="flex gap-2">
              {projeto.lenguage.length > 0 ? (
                projeto.lenguage.map((tech, index) => (
                  <p key={`tech-${index}`}
                    className="text-2xl">{tech}</p>
                ))
              ) : (
                <p>carregando lingagens...</p>
              )

              }
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutProject
