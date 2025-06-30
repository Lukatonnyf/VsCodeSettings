import ThemeSwitcher from "@/providers/theme-switcher";
import { Bell, PersonStanding } from "lucide-react";


export default function Header() {
  return (
    <div className="bg-bg-secondary w-full relative z-10
    flex justify-between items-center py-4 px-3 border-b border-b-border sm:px-10">


      <ThemeSwitcher />


      <div className="w-1/3  flex justify-end items-center ">
        <ul className="flex justify-end  items-end gap-2 ">
          <li className="bg-bg-tertiary w-full p-2 h-full rounded-full text-white">
            <Bell className="size-4" /></li>
          <li className="bg-bg-tertiary w-full p-2 h-full rounded-full text-white" >
            <PersonStanding className="p-1 rounded-full bg-amber-50 text-black  size-4" /></li>
        </ul>
      </div>
    </div>

  );
}
