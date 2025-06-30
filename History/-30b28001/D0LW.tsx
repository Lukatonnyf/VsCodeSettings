"use client"
import { useEffect, useRef, useState } from "react"

const FeedbackCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visible, setVisible] = useState(3)
  const totalItems = feedbacks.lenght

  const itemsRef = useRef<Array<HTMLDivElement | null>>([])
  const containerRef = useRef<HTMLDivElement>(null)


  // const nextFeedback = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex + visible >= totalItems ? 0 : prevIndex + 1)
  // }

  // const prevSlide = () => {
  //   setCurrentIndex((prevIndex) =>
  //   prevIndex === 0 ? Math.max(0,))
  // }

  useEffect(() => {
    if (containerRef.current && itemsRef.current[currentIndex])

  }, [currentIndex])


  return (
    <div>

    </div>
  )
}
