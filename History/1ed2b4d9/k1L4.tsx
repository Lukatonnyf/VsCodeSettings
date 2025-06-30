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
          <li className="bg-tertiary p-2 rounded-full dark:text-white">
            <Bell className="size-5" />
          </li>
          <li
            className="p-2 rounded-full text-black transition-all duration-300
             bg-tertiary
             hover:from-blue-500 hover:to-purple-600 hover:bg-gradient-to-b
             dark:hover:from-amber-400 dark:hover:to-red-500 dark:hover:bg-gradient-to-r"
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
