"use client"
import { Bell, PersonStanding } from "lucide-react"
import { useEffect, useState, useRef } from "react"
import useDarkMode from "../hooks/useDarkmode";




export default function Header() {
  const { isDark, toggleDarkMode } = useDarkMode();

  const [show, setShow] = useState(false)
  const testRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (show) {
      setShow(!show)
    }
    // You can perform actions with testRef.current here if needed

  }, [show])


  return (
    <div className="bg-bg-secondary w-full relative z-10
    flex justify-between items-center py-4 px-3 border-b border-b-border sm:px-10">
      <div className="  w-1/2">
        {/* <Input /> */}
      </div>

      <div
        className={show ? "hidden" : "flex"}
        ref={testRef}
      >mostrooaa</div>

      <button
        onClick={toggleDarkMode}
        className="px-4 py-2 bg-gray-200 dark:dark:bg-black text-black dark:text-white rounded"
      > {isDark ? '☀️ Claro' : '🌙 Escuro'}</button>
      <div className="w-1/3  flex justify-end items-center ">
        <ul className="flex justify-end  items-end gap-2 ">
          <li className="bg-bg-tertiary w-full p-2 h-full rounded-full text-white">
            <Bell className="size-4" /></li>
          <li className="bg-bg-tertiary w-full p-2 h-full rounded-full text-white" onClick={() => { }}>
            <PersonStanding className="p-1 rounded-full bg-amber-50 text-black  size-4" /></li>
        </ul>
      </div>
    </div>
  )
}
