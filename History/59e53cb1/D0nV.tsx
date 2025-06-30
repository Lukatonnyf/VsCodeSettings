import { Bell, PersonStanding } from "lucide-react"
// import Input from "./input"


export default function Header() {
  return (
    <div className="bg-bg-secondary w-full
    flex justify-between items-center py-2 px-3 border-b border-b-border ">
      <div className="  w-1/2">
        {/* <Input /> */}
      </div>

      <div className="w-1/3  flex justify-center items-center ">
        <ul className="flex justify-center gap-2 ">
          <li className="bg-bg-tertiary w-full h-full rounded-full text-white"><Bell /></li>
          <li className="bg-bg-tertiary w-full  h-full rounded-full text-white ">
            <PersonStanding className="p-1 rounded-full bg-amber-50 text-black  size-4" /></li>
        </ul>
      </div>
    </div>
  )
}
