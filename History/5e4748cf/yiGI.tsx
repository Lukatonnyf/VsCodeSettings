import Btn from "./button";

export default function MockuptDc() {
  return (
    <div className="w-full min-h-[70dvh] h-full bg-blue rounded-t-3xl">

      <div>
        <Btn description="TEST" url={""} className="bg-blue text-white" />
        <Btn description="TEST" url={""} className="bg-bgn-hover text-white" />
      </div>


    </div>
  )
}
