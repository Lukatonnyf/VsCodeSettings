'use client'


interface ButtonProps {
  url: string,
  description: string
}

export default function Button({ url, description }: ButtonProps) {
  return (


    <button>
      {description}
    </button >


  )
}
