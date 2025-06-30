'use client'
import type { ButtonProps } from './button';

export default function ButtonSocialMedia({
  text,
  innerRef,
  onClick
}: ButtonProps) {
  return (
    <button
      ref={innerRef}
      onClick={onClick}
      className="flex  justify-center items-center
                  px-1 py-1 rounded-full
                  bg-btn-socialmedias text-gray-100
                  lg:px-1 lg:py-1 text-xs">
      {text}
    </button>
  );
}
