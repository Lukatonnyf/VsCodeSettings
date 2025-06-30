'use client'

import type { ButtonProps } from "./button"


export default function ButtonSocialMidia({ text, innerRef, onClick }: ButtonProps) {
  return (
    <button ref={innerRef} onClick={onClick}>

    </button>
  )
}
