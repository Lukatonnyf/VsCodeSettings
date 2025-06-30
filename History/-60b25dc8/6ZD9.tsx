"use client"
import { useEffect, useState } from "react"



const DateCurrent = () => {
  const [date, setDate] = useState('')

  useEffect(() => {
    const now = new Date();
    const dateFormated = now.toLocaleDateString('pt-BR');
  }, [])
}

export default DateCurrent()
