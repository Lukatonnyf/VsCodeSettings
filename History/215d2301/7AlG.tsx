import { JSX } from "react";

interface ButtonProps {
  text: string,
  className?: string,
  innerRef: React.Ref<HTMLButtonElement>;
}
export default function Button({ text, className = '', innerRef }: ButtonProps): JSX.Element {
  return <button ref={innerRef} className={`px-2 py-1 max-w-full h-full rounded-lg text-sm md:text-md font-semibold
  lg:px-7 lg:py-2   ${className}`}>
    {text}
  </button>;

}
