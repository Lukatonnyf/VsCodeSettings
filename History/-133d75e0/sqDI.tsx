'use client'


interface ButtonProps {
  url: string,
  description: string
}

export default function Btn({ url, description }: ButtonProps) {
  return (


    <button className="bg-gray-100 p-5 text-gray-800">
      {description}
    </button >


  )
}
