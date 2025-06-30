'use client'

import type { ButtonProps } from "./button"


export default function ButtonSocialMidia({ text, innerRef, onClick }: ButtonProps) {
  return (
    <button ref={innerRef} onClick={onClick}
      className="flex  justify-center items-center
                  px-2 py-2 rounded-full
                  bg-btn-socialmidias text-gray-100
                  lg:px-1 lg:py-1 text-xs">
      {text}
    </button>
  )
}
