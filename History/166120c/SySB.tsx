import Button from "@/ui/button"

const Footer = () => {
  return (
    <div
      className="flex justify-center items-center w-full h-full py-10">
      <section className="flex flex-col  justify-center items-center
      border border-red-400 gap-5 p-5 w-full">
        <h1
          className="
          text-xl sm:text-3xl lg:text-4xl font-semibold
          bg-clip-text bg-gradient-to-r from-gray-200 via-[#a9a9a9] to-[#c0c0c0] text-transparent">
          Preparado para tirar o seu projeto do papel?
        </h1>

        <div className=" animate-rotate-border     rounded-lg
        bg-conic/[from_var(--border-angle)]
        from-background via-blue-400 to-background  from-80% via-90% to-100%
        p-px">
          <Button className="w-full px-5 py-3 rounded-lg bg-neutral-900
            text-text-color font-bold">
            Entrar em Contato
          </Button>
        </div>
      </section>
    </div>
  )
}


export default Footer
