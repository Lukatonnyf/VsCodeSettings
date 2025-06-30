import MockuptDc from "./components/mockupDiscord"
import Image from "next/image"
export default function HomePage() {
  return (
    <div className="w-full min-h-[100dvh] px-5 flex items-baseline-last justify-center
     shadow-custom-purple-700 overflow-y-hidden">

      <div className='flex flex-col justify-center items-center w-full min-h-[70dvh] h-full p-5
      lg:flex-row max-w-[1240px] relative z-10 border border-borderbd rounded-xl'>
        <Image
          src='/ss.png'
          alt="test "
          priority
          fill
          className="object-cover object-left-bottom lg:object-center -z-10 absolute rounded-xl   "

        />
      </div>



    </div >
  )
}
