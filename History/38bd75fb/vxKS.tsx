interface ProjectProps {
  id: number,
  btn: string
}

const MyProjects: ProjectProps[] = [
  {
    id: 1,
    btn: 'http://steamredesigne-lukatonnydev.surge.sh/',
  },
]


export default function Footer() {
  const irProjeto = (url: string) => {
    window.open(url, '_blank')
  }

  return (
    <div className="flex justify-center items-center w-full h-[5dvh] p-2  ">
      <h1 className="flex flex-row justify-center gap-1 items-center text-center  font-heading  text-sm text-gray-200">
        Copyright © 2025
        <span className="text-purple">Lukatonny Ferreira </span>
        <button
          type="button"
          className="mt-1 py-2 p-2 w-[20dvh] text-gray-100 bg-btn rounded-2xl  font-sans
            text-sm transition hover:bg-btn-hover md:text-1xl lg:text-sm"
          onClick={() => irProjeto(project.btn)}
        >
          Ver Projeto
        </button>
      </h1>
    </div>
  )
}
