import Btn from "./components/button";

export default function HomePage(){


    return(
        <div className="w-full min-h-[100dvh]  flex justify-center items-center flex-col"> 

                <div className="flex flex-col justify-center items-center text-gray-200 p-5 gap-1 w-full">
                    <h1 className="flex justify-center text-center  font-heading font-semibold text-xl w-full  sm:text-4xl">Welcome to my portfolio!</h1>
                    <h2 className="font-heading">Lukatonny web <span className="text-purple">developer</span></h2>
                    {/* <p className=" flex flex-col text-center text-gray-400 text-xs">
                    Contact me using the button below and learn more about my services and prices.</p> */}
                </div>

                <Btn text="Learn More..."/>
                

        </div>
    )
}