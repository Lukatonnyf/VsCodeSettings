'use client'


interface ButtonProps {
  url: string,
  description: string
}

export default function Btn({ url, description }: ButtonProps) {
  return (


    <button className="bg-gray-100 py-2 px-10 text-gray-800">
      {description}
    </button >


  )
}
