"use client";
import { useState } from "react";

interface ButtonProps {
  buttons?: {
    className: string | undefined;
    text: React.ReactNode | string;
    onClick?: () => void;
  }[];
  className?: string;
}

const Button = ({ buttons = [] }: ButtonProps) => {
  const [onMouse, setOnMouse] = useState<number | null>(null);
  return (


    <button
      key={i}
      onClick={btn.onClick}
      className={`${[btn.className]}  text-start text-sm font-medium  rounded-3xl
              py-3 px-7 bg-tertyary
              sm:py-3 sm:px-5  sm:flex sm:justify-center sm:items-center sm:text-sm
              transition-all duration-300 hover:-translate-y-[2px]
              ${onMouse === i ? 'shadow-lg' : ''}`}
      onMouseEnter={() => setOnMouse(i)}
      onMouseLeave={() => setOnMouse(null)}>

    </button>

}
    </div >
  )
}
