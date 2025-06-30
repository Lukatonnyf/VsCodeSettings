'use client'

import { ArrayProjects } from "@/app/components/carousel"
import { usePathname } from "next/navigation"


const AboutProject = () => {
  const pathname = usePathname()
  const id = pathname?.split('/').pop()

  if (!id) return <div>carregando...</div>

  const projeto = ArrayProjects.find(project => project.id === Number(id))

}
