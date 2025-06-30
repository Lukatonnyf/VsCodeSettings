"use client"
import Button from "@/ui/button"

const Footer = () => {

  const numeroWhatsApp = '5511934092531';
  const mensagem = 'Olá! Vi seu portfólio e me interessei pelo seu trabalho. Quero tirar meu projeto do papel e gostaria de conversar com você!';
  const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;
  return (
    <div
      className="flex justify-center items-center max-w-[1240px] w-full min-h-[40dvh] h-full py-10">
      <section className="flex flex-col  justify-center items-center
     gap-5 p-5 w-full relative">

        {/* Borda estilizada */}
        <div
          className="absolute top-0 left-0 w-full h-[2px]
          bg-gradient-to-r from-degradetext-to via-[#a9a9a9] to-degradetext-to ">
        </div>

        <h1
          className="
          text-xl sm:text-3xl lg:text-4xl font-semibold
          bg-clip-text bg-gradient-to-r from-gray-200 via-[#a9a9a9] to-[#c0c0c0] text-transparent">
          Preparado para tirar o seu projeto do Papel?
        </h1>

        <div className=" animate-rotate-border     rounded-lg
        bg-conic/[from_var(--border-angle)]
        from-background via-blue-400 to-background  from-80% via-90% to-100%
        p-px">
          <Button
            onClick={() => window.open(urlWhatsApp, '_blank')}
            className="w-full px-5 py-3 rounded-lg bg-neutral-900
            text-text-color font-bold
            duration-300 ease-in hover:scale-110 shadow-lg hover:shadow-blue-400">
            Entrar em Contato
          </Button>
        </div>
      </section>
    </div>
  )
}


export default Footer
