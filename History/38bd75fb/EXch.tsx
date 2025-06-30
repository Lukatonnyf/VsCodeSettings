import Image from "next/image"
export default function Developer() {

  return (
    <div className=" w-full min-h-[50dvh] p-5 flex justify-center items-center
    shadow-custom-purple-700">
      <section
        className="w-full flex flex-col justify-between items-start text-gray-200 p-5 gap-5
        border border-vscode-border rounded-xl  lg:p-10 lg:gap-15 lg:flex-row ">
        <Image
          src="/icon.png"
          alt="foto tonny "
          className="object-cover "
          width={300} //
          height={200}
          layout="intrinsic"
        />
        < div className='flex flex-col p-2  w-full h-full'  >
          <div className="font-light text-sm text-gray-400 sm:text-xl gap-5">
            <h1 className="text-gray-200 flex font-medium text-lg w-full sm:text-4xl gap-2">
              Lukatonny
              <span className='text-textopaco'> Desenvolvedor</span>
            </h1>
            <h2 className="text-sm">criador e desenvolvedor
              <span className="text-textopaco"> do projeto</span> </h2>
            <p className="text-sm">
              Olá! eu sou o Desenvolvedor e criador desse projeto, meu intuito
              é te ajudar da melhor forma a organizar suas tarefas de forma prática,
              fácil e rápida!
            </p>
          </div>
        </div >
      </section >

      <section className="w-full">

      </section>
    </div >
  )
}
