import { Bell, PersonStanding } from "lucide-react"
import Input from "./input"


export default function Header() {
  return (
    <div className="bg-bg-secondcolor w-full
    flex justify-between items-center py-2 px-3">
      <div className="  w-1/2">
        <Input />
      </div>

      <div className="w-1/3  flex justify-center items-center ">
        <ul className="flex justify-center gap-2 w-full">
          <li className="bg-buttonscolor p-2 rounded-full text-white"><Bell /></li>
          <li className="bg-buttonscolor p-2 rounded-full text-white">
            <PersonStanding className="p-1 rounded-full bg-amber-50 text-black" /></li>
        </ul>
      </div>
    </div>
  )
}
