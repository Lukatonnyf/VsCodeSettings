interface ProjectProps {
  btn: string
}

const MyProjects: ProjectProps[] = [
  {
    btn: 'https://lukatonnyferreiraportifolio.vercel.app/',
  },
]


export default function Footer({ btn }: ProjectProps) {
  const irProjeto = (url: string) => {
    window.open(url, '_blank')
  }

  return (
    <div className="flex justify-center items-center w-full h-[5dvh] p-2  ">
      <h1 className="flex flex-row justify-center gap-1 items-center text-center  font-heading  text-sm text-gray-200">
        Copyright © 2025
        <a href="https://lukatonnyferreiraportifolio.vercel.app/"
          className="text-purple"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-purple">Lukatonny Ferreira </span>
        </a>

      </h1>
    </div>
  )
}
