import { ReactNode } from "react";

interface ButtonProps {
  props: string | ReactNode;
  className: string
}

const Button = ({ props, className = '' }: ButtonProps) => {
  return (
    <button className={`${className} px-2 py-1 rounded-full w-[5dvw]`}>
      {props}
    </button>
  )
}

export default Button
