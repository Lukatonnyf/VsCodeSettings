import Card from './components/cardLenguages'
import CardProjects from './components/cardProjects'

export default function MySkills() {
  return (
    <div className=" flex flex-col justify-center items-center  max-w-full mx-auto w-full   min-h-[50dvh]  mt-1 xl:max-w-[170dvh]">
      <div className="flex flex-col justify-center items-center  w-full p-2 gap-5  lg:gap-0">
        <Card />
        <CardProjects />
      </div>
    </div>
  )
}
