import Btn from "./button";

export default function MockuptDc() {
  return (
    <div className="w-full min-h-[70dvh] h-full bg-blue rounded-t-3xl">

      <div className="flex flex-row justify-center items-center gap-5 p-5 w-full h-full ">
        <Btn description="Entre em Nosso Servidor" url={""} className="bg-gray-100 text-gray-700" />
        <Btn description="TEST" url={""} className="bg-btn-hover text-gray-200" />
      </div>


    </div>
  )
}
