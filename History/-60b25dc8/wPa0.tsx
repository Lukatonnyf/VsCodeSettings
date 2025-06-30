"use client"
import { useEffect, useState } from "react"



const Date = () => {
  const [date, setDate] = useState('')

  useEffect(() => {
    const now = new Date();
    const dateFormated = now.toLocalDateString('pt-BR')
  }, [])
}

export default Date()
