'use client'

import { usePathname } from "next/navigation"


const AboutProject = () => {
  const pathname = usePathname()
  const id = pathname?.split('/').pop()

  if (!id) return <div>carregando...</div>

}
