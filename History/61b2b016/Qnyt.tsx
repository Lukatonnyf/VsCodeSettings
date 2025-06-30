export interface ButtonProps {
  text: string | React.ReactNode;
  innerRef: React.Ref<HTMLButtonElement>;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ text, innerRef, onClick }: ButtonProps) {
  return (
    <button ref={innerRef} onClick={onClick} className="text-center px-7 py-5  w-full rounded-lg text-sm
  lg:px-7 lg:py-1 transition-all duration-300 transform lg:w-[auto] lg:text-normal
  hover:scale-125 bg-btn">
      {text}
    </button>
  )
}
