"use client";
import { useState } from "react";

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string | undefined;

  // buttons?: {
  //   className: string | undefined;
  //   text: React.ReactNode | string;
  //   onClick?: () => void;
  // }[];
  // className?: string;
}

const Button = ({ children, onClick, className = '' }: ButtonProps) => {
  const [onMouse, setOnMouse] = useState<number | null>(null);
  return (

    <button
      onClick={onClick}
      className={`${[className]}  text-start text-sm font-medium  rounded-3xl
       py-3 px-7 bg-secondary
              sm:py-3 sm:px-5  sm:flex sm:justify-center sm:items-center sm:text-sm
              transition-all duration-300 hover:-translate-y-[2px]
           `}
    //     ${onMouse === i ? 'shadow-lg' : ''}
    // onMouseEnter={() => setOnMouse(i)}
    // onMouseLeave={() => setOnMouse(null)}>
    >
      {children}
    </button>


  )
}

export default Button;
