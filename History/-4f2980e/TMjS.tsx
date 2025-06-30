"use client"
import { useState } from "react";

interface AsideCardProps {
  className?: string;
}

interface Menus {
  id: number,
  name: string,
  url: string
}

const ArrayMenu: Menus[] = [
  {
    id: 1,
    name: "Inicio",
    url: ""
  },
  {
    id: 2,
    name: "Calendário",
    url: ""
  },
  {
    id: 3,
    name: "Novo Evento",
    url: ""
  },
  {
    id: 4,
    name: "Notificações",
    url: ""
  },
  {
    id: 5,
    name: "Configurações",
    url: ""
  }
]

export default function AsideCard({ className }: AsideCardProps) {
  const [isActiveItem, setIsActiveItem] = useState(1)

  return (


    <aside className={` ${className} hidden  relative z-20 bg-secondary md:flex flex-col w-[16.666vw] min-h-screen
     h-full  border-r  border-r-border`}>
      <header className="p-5 border-b h-16">
        CommunitEventy
      </header>


      <ul className="px-5 py-5  flex flex-col gap-5 h-full '">
        {
          ArrayMenu.map((item, i) => (
            <li
              onClick={() => setIsActiveItem(item.id)}
              className={`
                text-xl
                px-3 py-2 rounded-lg
                hover:bg-secondary hover:text-primary
                cursor-pointer ${item.id === isActiveItem
                  ? "bg-gradient-45 text-white"
                  : "text - gray - 800"
                }`}
              key={i}>
              <p>{item.name}</p>
            </li>
          ))
        }

      </ul>

    </aside >
  )

}


