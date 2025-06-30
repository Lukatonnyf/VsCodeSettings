import Btn from "./button";
import Image from "next/image";


export default function MockuptDc() {
  return (
    <div className="relative w-full min-h-[70dvh] h-full z-10 rounded-t-3xl">
      <Image
        src='/ss.png'
        alt="test "
        priority
        fill
        className="object-cover object-center -z-10 absolute"

      />
      <div className="flex flex-col justify-center items-center gap-5 p-5 w-full h-full lg:flex-row">
        <Btn description="Entre em Nosso Servidor" url={""} className="bg-gray-100 text-gray-700" />
        <Btn description="Conheça Todos os nossos Canais" url={""} className="bg-btn-hover text-gray-200" />
      </div>

      <div className="flex flex-col justify-center items-center w-full min-h-full bg-danger ">


      </div>
    </div>
  )
}
