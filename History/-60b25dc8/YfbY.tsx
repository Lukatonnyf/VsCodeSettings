"use client"
import { useEffect, useState } from "react"



const DateCurrent = () => {
  const [date, setDate] = useState('')

  useEffect(() => {
    const now = new Date();
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
