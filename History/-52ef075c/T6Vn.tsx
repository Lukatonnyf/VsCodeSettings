import { ReactNode } from "react";

interface ButtonProps {

  className: string
}

const Button = ({ className = '' }: ButtonProps) => {
  return (
    <button className={`${className}   px-2 py-1 rounded-full w-[5dvw]`}>
      {children}
    </button>
  )
}

export default Button
