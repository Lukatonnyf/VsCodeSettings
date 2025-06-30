import React, { forwardRef, ReactNode } from "react";

interface ButtonProps {
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button({ children, onClick, className = '' }, ref) {
    return (
      <button
        ref={ref}
        onClick={onClick}
        className={`${className} px-2 py-1 rounded-full
        `}
      >
        {children}
      </button>
    );
  }
);



export default Button;
