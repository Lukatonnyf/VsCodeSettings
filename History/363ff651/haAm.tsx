export interface ButtonProps {
  text: string | React.ReactNode;
  innerRef: React.Ref<HTMLButtonElement>;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ text, innerRef, onClick }: ButtonProps) {
  return (
    <button ref={innerRef} onClick={onClick}
      className="text-center px-7 py-4 w-full rounded-lg text-sm transition-all
      duration-300 tranform lg:text-base lg:py-5 hover:scale-125 bg-btn">
      {text}
    </button>
  )
}
