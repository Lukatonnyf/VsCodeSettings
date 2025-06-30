"use client"
import { useEffect, useState } from "react"
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['400'] })

const formatador = new Intl.DateTimeFormat('pt-BR', {
  weekday: 'long',
  day: '2-digit',
  month: 'long',
  year: 'numeric',
});


const DateCurrent = () => {
  const [date, setDate] = useState('')

  useEffect(() => {
    const day = new get();
    const dateFormated = now.toLocaleDateString('pt-BR');
    setDate(dateFormated)
  }, [])

  return (
    <div>
      <p className={`dark:text-gray-400 text-[0.95rem] ${poppins.className} font-extalight`}>
        {date}</p >
    </div>
  )
}


export default DateCurrent;
