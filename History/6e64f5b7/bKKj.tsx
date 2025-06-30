import type { ButtonProps } from './button'

export default function ButtonSocialMedia({ text, className = '', innerRef, onClick }: ButtonProps) {
  return (
    <button ref={innerRef} onClick={onClick}
      className={`${className} text-center text-sm
  lg:px-7 lg:py-1 transition-all duration-300 transform lg:text-normal
  hover:scale-125 bg-btn`}>
      {text}
    </button>
  )
}
