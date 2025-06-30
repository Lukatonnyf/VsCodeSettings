import { JSX } from "react";

interface ButtonProps {
  text: string,
  className?: string,
  innerRef: React.Ref<HTMLButtonElement>;
  onClick: React.onClick<HTMLButtonElement>
}
export default function Button({ text, className = '', innerRef }: ButtonProps): JSX.Element {
  return <button ref={innerRef} className={`text-center px-2 py-1  w-full rounded-lg text-sm
  lg:px-7 lg:py-1 transition-all duration-300 transform lg:w-[auto] lg:text-xs
  hover:scale-125  ${className}`}>
    {text}
  </button>;

}
