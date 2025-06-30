import MockuptDc from "./components/mockupDiscord"

export default function HomePage() {
  return (
    <div className="w-full min-h-[100dvh] px-5 flex items-baseline-last justify-center
     shadow-custom-purple-700 overflow-y-hidden">

      <div className='flex flex-col justify-center items-center w-full min-h-[70dvh] h-full p-5 rounded-t-4xl
       bg-vscode-border lg:flex-row border border-items-array max-w-[1240px] w-full'>
        <MockuptDc />
      </div>



    </div >
  )
}
