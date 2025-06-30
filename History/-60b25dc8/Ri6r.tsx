"use client"
import { useEffect, useState } from "react"



const DateCurrent = () => {
  const [date, setDate] = useState('')

  useEffect(() => {
    const now = new Date();
    const dateFormated = now.toLocalDateString('pt-BR')
  }, [])
}

export default DateCurrent()
