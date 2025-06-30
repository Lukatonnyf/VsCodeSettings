interface ButtonProps {
  text: string | React.ReactNode;
  className?: string;
  innerRef: React.Ref<HTMLButtonElement>;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ text, className = '', innerRef, onClick }: ButtonProps) {
  return (
    <button ref={innerRef} onClick={onClick} className={`text-center px-2 py-3  rounded-lg text-sm
  lg:px-7 lg:py-1 transition-all duration-300 transform lg:w-[auto] lg:text-normal
  hover:scale-125 bg-btn ${className}`}>
      {text}
    </button>
  )
}
