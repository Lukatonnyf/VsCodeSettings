"use client"
import { useEffect, useState } from "react"



const DateCurrent = () => {
  const [date, setDate] = useState('')

  useEffect(() => {
    const now = new Date();
    const dateFormated = now.toLocaleDateString('pt-BR');
    setDate(dateFormated)
  }, [])
}

export default DateCurrent()
