'use client'
import { useRef, useState, useLayoutEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { Sansita } from 'next/font/google';

import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollToPlugin)




const sansita = Sansita({
  variable: "--font-sansita",
  subsets: ["latin"],
  weight: '800'
});


interface HeaderComponents {
  id: number,
  title: string,
  url?: string
}

const ArrayItemsHeader: HeaderComponents[] = [
  {
    id: 1,
    title: "Home"
  },
  {
    id: 2,
    title: "Fragâncias"
  },
  {
    id: 3,
    title: "Exclusivos"
  },
  {
    id: 4,
    title: "Contacts"
  }


]


export default function Header() {

  const [selected, setSelected] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);





  const menuMobileRef = useRef<HTMLUListElement>(null);
  const menuItemRef = useRef<HTMLLIElement>(null);

  useLayoutEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        menuMobileRef.current,
        {
          opacity: 0,
          x: 30,
        },
        {

          x: 0,
          opacity: 1,
          duration: 2,
          ease: 'power2.out',
          delay: 0.5,
        }
      );
    }

  }, [isOpen]);

  const handleScroll = (id: number) => {
    const fraqDestaque = document.getElementById('products')
    const feedBack = document.getElementById('feedback')

    if (fraqDestaque) {
      gsap.to(window, { duration: 1.5, scrollTo: fraqDestaque })
    } else if (feedBack) {
      gsap.to(window, { duration: 1.5, scrollTo: feedBack })
    }
  }


  return (
    <div className=" z-30 max-h-[4dvh]
     w-full  py-10 px-5  text-white h-full
     flex justify-between items-center border-b border-borderbd bg-black
     sm:px-10 md:px-20  lg:py-6 ">


      <div className="text-2xl font-semibold lg:text-3xl ">
        <Image
          src='/logo1.png'
          alt="Image Perfume"
          priority
          className="object-cover rounded-xl  w-1/2  "
          width={50}
          height={50}
        />
      </div>

      <div className='relative w-full flex justify-end '>
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? <X className="w-6 h-6" /> :
            <Menu className="w-6 h-6" />}
        </button>
        {!isOpen ? (
          <ul className="hidden md:flex gap-2 py-5
          justify-center items-center ">
            {ArrayItemsHeader.map(item => (
              <li
                onClick={() => { setSelected(item.id); handleScroll(item.id); }} className={`${sansita.variable}
                ${selected === item.id ? 'text-[#a9a9a9] ' : 'text-[#444444]'}
              text-sm tracking-wide transition ease-out transform duration-500
              hover:border-b-1 border-b-[#555555] hover:text-[#a9a9a9]
              hover:scale-110 cursor-pointer `}
                key={item.id}>
                {item.title}</li>
            ))}
          </ul>
        ) : (
          <ul
            ref={menuMobileRef}
            className="absolute z-1 gap-2 py-5 flex w-full
          flex-col justify-center items-center bg-background opacity-0
          border border-borderbd rounded-2xl top-14 right-5  ">
            {ArrayItemsHeader.map(item => (
              <li
                ref={menuItemRef}
                className='w-full flex justify-center ' key={item.id}>
                <span className='flex w-[20dvh] justify-start '>
                  {item.title}</span>
              </li>
            ))}
          </ul>
        )}

      </div>


    </div >
  )
}
