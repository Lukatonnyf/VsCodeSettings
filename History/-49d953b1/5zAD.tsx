export default function HomePage() {
  return (
    <div className=" w-full min-h-[100dvh] p-5 flex justify-center items-center
    shadow-custom-purple-700"
    >
      <div className='flex flex-col justify-center items-center w-full min-h-[70dvh] h-full p-5
        bg-gradient-to-b from-[#1D1D1D] to-[#0F0F0F] rounded-t-4xl  lg:flex-row
        opacity-0'
      >
        <section
          className="w-full  flex flex-col justify-between items-start text-gray-200 p-5 gap-5
                opacity-00 lg:p-10 lg:gap-15">
          <div className='flex flex-col -space-y-2 p-0 '>
            <h1 className="flex font-medium text-lg w-full sm:text-4xl gap-2">
              Crie seu
              <span className='text-textopaco'> planejamento</span>
            </h1>

            <h2 className="font-light text-sm text-gray-400 sm:text-xl">
              e organize sua
              <span className="text-textopaco"> rotina</span>
            </h2>
          </div>

          <div className='flex flex-row gap-2 lg:gap-5'>

          </div>
        </section>

        <div className='flex justify-center items-center flex-col
                 w-full max-h-full'>


        </div>
      </div>

    </div>
  )
}
