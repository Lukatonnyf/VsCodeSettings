import Button from "@/ui/button"

const Footer = () => {
  return (
    <div
      className="flex justify-center items-center w-full h-full py-10">
      <section className="flex flex-row flex-wrap justify-center items-center
      border border-red-400 gap-5 p-5 w-full">
        <h1>Preparado para tirar o seu projeto do papel?</h1>
        <div className=" animate-rotate-border     rounded-lg
        bg-conic/[from_var(--border-angle)]
        from-background via-blue-400 to-background  from-80% via-90% to-100%
        p-px">
          <Button className="w-full px-5 py-3 rounded-lg bg-neutral-900
            text-text-color">
            Entrar em Contato
          </Button>
        </div>
      </section>
    </div>
  )
}


export default Footer
