import type { ButtonProps } from './button';

export default function ButtonSocialMedia({
  text,
  className = '',
  innerRef,
  onClick
}: ButtonProps) {
  return (
    <button
      ref={innerRef}
      onClick={onClick}
      className={`${className}        className="flex  justify-center items-center
                  px-2 py-2 rounded-full
                  bg-btn-socialmedias text-gray-100
                  lg:text-sm`}
    >
      {text}
    </button>
  );
}
