import { JSX } from "react";

interface ButtonProps {
  text: string,
  className?: string,
  innerRef: React.Ref<HTMLButtonElement>;
}
export default function Button({ text, className = '', innerRef }: ButtonProps): JSX.Element {
  return <button ref={innerRef} className={`text-center px-2 py-1 max-w-full w-full rounded-lg text-sm md:text-md font-semibold
  lg:px-7 lg:py-2  transition-all duration-300 transform
               hover:scale  ${className}`}>
    {text}
  </button>;

}
