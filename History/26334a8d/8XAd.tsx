
import Image from 'next/image';




export default function Header() {
  return (
    <div className=" z-30 max-h-[4dvh]
     w-full  py-10 px-5  text-white h-full
     flex justify-between items-center border-b border-borderbd bg-black
     sm:px-10 md:px-20 ">

      <div className="text-2xl font-semibold lg:text-3xl ">
        <Image
          src='/logopng.png'
          alt="Image Perfume"
          priority
          className="object-cover rounded-xl  w-1/2
          drop-shadow-xl/25 "
          width={100}
          height={50}
        />
      </div>
    </div >
  )
}
