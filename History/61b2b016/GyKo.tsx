interface ButtonProps {
  text: string;
  innerRef: React.Ref<HTMLButtonElement>;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ text, innerRef, onClick }: ButtonProps) {
  return (
    <button ref={innerRef} onClick={onClick} className="text-center px-2 py-1  w-full rounded-lg text-sm
  lg:px-7 lg:py-1 transition-all duration-300 transform lg:w-[auto] lg:text-normal
  hover:scale-125  ">
      {text}
    </button>
  )
}
