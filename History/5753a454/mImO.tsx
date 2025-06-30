"use client"
import Feedback from "./components/feedbacks"
import Button from '@/ui/button';

const Experiencia = () => {
  return (
    <div className="flex flex-col justify-center items-center
    h-[100dvh] max-w-[1240px]  w-full overflow-y-hidden">
      <div className=" flex flex-col justify-center items-center mb-5">
        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl bg-clip-text bg-gradient-to-r from-gray-200 via-degradetext-via to-degradetext-to text-transparent">Feedbacks</h1>
        <Button
          className='border border-bordercomponents px-2 py-2 mt-2 text-sm'
          onClick={() => window.open('https://feedbacks-page-two.vercel.app/', "_blank")}>Deixe seu Feedback aqui</Button>
      </div>

      <Feedback className="overflow-y-auto min-h-0" />
    </div>
  )
}


export default Experiencia
