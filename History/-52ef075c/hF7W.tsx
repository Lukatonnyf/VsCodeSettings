import { ReactNode } from "react";

interface ButtonProps {
  ref: ReactNode;
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string | undefined;
}

const Button = ({ children, onClick, ref, className = '' }: ButtonProps) => {
  return (
    <button
      ref={ref}
      onClick={onClick}
      className={`${className}   px-2 py-1 rounded-full `}>
      {children}
    </button>
  )
}

export default Button
