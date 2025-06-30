"use client"
import { useEffect, useState } from "react"



const Date = () => {
  const [date, setDate] = useState('')

  useEffect(() => {
    const agora = new Date();

  }, [])
}

export default Date()
