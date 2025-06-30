import React, { forwardRef } from "react";

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string | undefined;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, onClick, className = '' }, ref) => {
    return (
      <button
        ref={ref}
        onClick={onClick}
        className={`${className}   px-2 py-1 rounded-full `}>
        {children}
      </button>
    )
  }
)

export default Button
