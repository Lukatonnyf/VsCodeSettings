import { Bell, PersonStanding } from "lucide-react"
import Input from "./input"


export default function Header() {
  return (
    <div className="bg-bg-secondcolor w-full h-[8dvh]
    flex justify-between items-center px-3">
      <div className="w-full border">
        <Input />
      </div>

      <div className="max-w-full w-full  flex justify-center items-center border">
        <ul className="flex justify-center gap-2 w-full">
          <li><Bell /></li>
          <li><PersonStanding /> </li>
        </ul>
      </div>
    </div>
  )
}
