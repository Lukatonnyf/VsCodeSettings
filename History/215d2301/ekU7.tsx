import { JSX } from "react";

interface ButtonProps {
  text: string,
  className?: string,
  innerRef: React.Ref<HTMLButtonElement>;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
export default function Button({ text, className = '', innerRef, onClick }: ButtonProps): JSX.Element {
  return <button ref={innerRef} onClick={onClick} className={`text-center px-2 py-1  w-full rounded-lg text-sm
  lg:px-7 lg:py-1 transition-all duration-300 transform lg:w-[auto] lg:text-normal
  hover:scale-125  ${className}`}>
    {text}
  </button>;

}
