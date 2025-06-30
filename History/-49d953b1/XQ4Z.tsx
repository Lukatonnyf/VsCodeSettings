import MockuptDc from "./components/mockupDiscord"

export default function HomePage() {
  return (
    <div className="w-full min-h-[100dvh] p-5 flex justify-center items-center
     shadow-custom-purple-700">

      <div className='flex flex-col justify-center items-center w-full min-h-[70dvh] h-full p-5 rounded-t-4xl  lg:flex-row'>
        <MockuptDc />
      </div>



    </div >
  )
}
