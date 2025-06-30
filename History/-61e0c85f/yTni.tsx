import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { useRef, useLayoutEffect } from 'react'
gsap.registerPlugin(ScrollToPlugin)

interface ButtonProps {
  text: string,
  className?: string,
  url?: string
}


export default function Button({ text, url, className = '' }: ButtonProps) {

  const btnRef = useRef<HTMLButtonElement>(null)

  useLayoutEffect(() => {
    if (btnRef.current) {
      gsap.to(btnRef.current, {
        delay: 0.8,
        opacity: 1,
        duration: 1.5,
        y: -20,
        ease: "none",
      })
    }
  }, [])

  const handleScroll = () => {
    const targetSection = document.getElementById('')
    if (targetSection) {
      gsap.to(window, { duration: 1.5, scrollTo: targetSection })
    }
  }


  return (
    <button
      onClick={handleScroll}
      ref={btnRef}
      type="submit"
      className={`px-2 py-1 max-w-full rounded-full  text-sm lg:px-7 lg:py-2 transition hover:scale-110 ${className}`}>
      {text}
    </button>
  )
};


