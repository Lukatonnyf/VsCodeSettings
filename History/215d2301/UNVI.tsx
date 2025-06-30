import { JSX } from "react";

interface ButtonProps {
  text: string,
  className?: string,
  innerRef: React.Ref<HTMLButtonElement>;
}
export default function Button({ text, className = '', innerRef }: ButtonProps): JSX.Element {
  return <button ref={innerRef} className={`text-center px-2 py-1 max-w-full  rounded-lg text-sm md:text-md font-semibold
 transition hover:scale-110 w-full   ${className}`}>
    {text}
  </button>;

}
