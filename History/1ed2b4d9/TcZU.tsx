"use client"
import { Bell, PersonStanding } from "lucide-react";
import { useState } from "react";
import MenuBar from "./components/menuBar";



export default function Header() {
  const [showMenuBar, setShowMenuBar] = useState(false);

  function shoMenuFunction() {
    setShowMenuBar(!showMenuBar)
  }

  return (
    <div className="bg-secondary w-full fixed z-10 dark:bg-secondary
  flex justify-between items-center h-16 px-3 border-b border-b-border sm:px-10">


      <div className="ml-auto flex justify-end items-center">
        <ul className="flex gap-2 items-center">
          <li className="p-2 rounded-full   bg-tertiary
               transition-all duration-500 delay-200
             hover:bg-[linear-gradient(45deg,var(--color-gradient-start),var(--color-gradient-middle),var(--color-gradient-end))]">
            <Bell className="size-5" />
          </li>
          <li
            className="relative p-2 rounded-full text-black
             transition-all duration-500 delay-500
             bg-tertiary
             hover:bg-opacity-0 hover:text-white
             hover:after:opacity-100
             after:content-[''] after:absolute after:inset-0 after:rounded-full
             after:bg-[linear-gradient(45deg,var(--color-gradient-start),var(--color-gradient-middle),var(--color-gradient-end))]
             after:opacity-0 after:transition-all after:duration-500 after:delay-500"
          >
            <PersonStanding
              className="p-1 rounded-full text-amber-50 size-5 bg-black dark:text-black dark:bg-white"
              onClick={shoMenuFunction}
            />
          </li>


        </ul>



        {showMenuBar && <MenuBar />}
      </div>
    </div >

  );
}
