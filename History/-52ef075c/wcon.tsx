import { ReactNode } from "react";

interface ButtonProps {
  props: string | ReactNode;
  className: string
}

const button = ({ props, className = '' }: ButtonProps) => {
  return (
    <button className={`${className} px-2 py-3 rounded-full`}>
      {props}
    </button>
  )
}

export default button
