import Feedback from "./components/feedbacks"

const Experiencia = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[100dvh] max-w-[1240px]  w-full overflow-y-hidden">
      <h1>Feedbacks</h1>
      <Feedback className="overflow-y-auto min-h-0" />
    </div>
  )
}


export default Experiencia
