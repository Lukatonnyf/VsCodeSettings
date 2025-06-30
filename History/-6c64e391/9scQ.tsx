
import Image from 'next/image';




export default function Header() {
  return (
    <div className=" z-30 max-h-[4dvh]
     w-full  py-10 px-5  text-white h-full
     flex justify-between items-center border-b border-borderbd bg-black
     sm:px-10 md:px-20 ">
      <div className="text-2xl font-semibold lg:text-3xl">
        <Image
          src='/logodosite.png'
          alt="Image Perfume"
          priority={true}
          className="object-cover rounded-xl  w-1/2
            drop-shadow-[15px_5px_4px_rgba(218,165,32)] "
          width={100}
          height={50}
        />
      </div>
    </div >
  )
}
