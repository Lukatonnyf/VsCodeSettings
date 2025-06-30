'use client'


interface CardProps {
  url: string,
  description: string
  className?: string,
}

export default function Card({ url, description, className = '' }: CardProps) {
  return (


    <button className={`px-10 py-2 max-w-full rounded-full  text-sm lg:px-7 lg:py-2 transition hover:scale-110 ${className}`}>
      {description}
    </button >


  )
}
