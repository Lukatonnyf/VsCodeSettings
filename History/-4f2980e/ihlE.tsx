
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
  },


]

export default function AsideCard({ className }: AsideCardProps) {
  return (

    <aside className={` ${className} hidden  relative z-20 bg-secondary md:flex w-[16.666vw] min-h-screen
     h-full  border-r  border-r-border`}>
      <header className="p-5">

      </header>


      <ul>
        {
          ArrayMenu.map((item, i) => (
            <li key={i}>
              <p>{item.name}</p>
            </li>
          ))
        }

      </ul>

    </aside>
  )

}


