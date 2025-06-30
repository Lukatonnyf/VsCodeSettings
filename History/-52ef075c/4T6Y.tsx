import { ReactNode } from "react";

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string | undefined;
}

const Button = (children, onClick, className = '' }: ButtonProps) => {
  return (
    <button className={`${className}   px-2 py-1 rounded-full w-[5dvw]`}>
      {children}
    </button>
  )
}

export default Button
