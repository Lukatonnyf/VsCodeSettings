'use client '
interface ButtonProps {
  text: string | React.ReactNode;
  className?: string;
  innerRef: React.Ref<HTMLButtonElement>;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ text, className = '', innerRef, onClick }: ButtonProps) {
  return (
    <button ref={innerRef} onClick={onClick}
      className={`${className} text-center text-sm
  lg:px-7 lg:py-1 transition-all duration-300 transform lg:text-normal
  hover:scale-125 bg-btn`}>
      {text}
    </button>
  )
}

export default function ButtonSocialMedia({ text, className = '', innerRef, onClick }: ButtonProps) {
  return (
    <ButtonSocialMedia text={<IoLogoInstagram className="text-base" />}
      className="flex  jusInstagramIconify-center items-center
                        px-2 py-2 rounded-full
                      bg-btn-socialmedias text-gray-100
                        lg:text-sm"
      innerRef={null} />

  )
}
