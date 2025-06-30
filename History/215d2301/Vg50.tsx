import { JSX } from "react";

interface ButtonProps {
  text: string,
  className?: string,
  innerRef: React.Ref<HTMLButtonElement>;
}
export default function Button({ text, className = '', innerRef }: ButtonProps): JSX.Element {
  return <button ref={innerRef} className={`text-center px-2 py-1 max-w-full h-[4dvh] rounded-lg text-sm md:text-md font-semibold
  lg:px-7 lg:py-2  transition hover:scale-110   ${className}`}>
    {text}
  </button>;

}
