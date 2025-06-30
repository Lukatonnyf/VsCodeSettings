'use client'


interface ButtonProps {
  url: string,
  description: string
  className?: string,
}

export default function Btn({ url, description }: ButtonProps) {
  return (


    <button className="bg-gray-100  text-gray-800 py-2 px-10 rounded-2xl ">
      {description}
    </button >


  )
}
