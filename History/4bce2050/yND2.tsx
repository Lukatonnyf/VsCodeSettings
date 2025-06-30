import CardLogin from "./components/cardCadastrar"
export default function LoginPage() {
  return (
    <div className="w-full min-h-[100dvh] p-5 flex justify-center items-center
    shadow-custom-purple-700">
      <div className='flex flex-col justify-center items-center w-full min-h-[90dvh] h-full p-5
        bg-gradient-to-t from-[#1D1D1D] to-[#0F0F0F] rounded-b-4xl  lg:flex-row'
      >
        <CardLogin />


      </div>
    </div>
  )
}
