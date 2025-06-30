import VsCodeInterface from "./ui/vscode";
import Cards from "@/ui/cards";
import Image from "next/image";
import '../../../../globals.css';
import Button from "@/ui/button";
import Project3Data from "@/data/project3_data";





const Project3 = () => {
  return (
    <Cards className="w-full h-[57dvh] flex flex-col md:flex-row justify-center items-center
    border border-borderbd p-px gap-5 backdrop-blur-xs custom-scrollbar bg-[#eaadfd]
    rounded-xl backdrop-blur-md">

      <div className="w-full lg:w-1/2 h-full hidden md:flex justify-center items-center  ">
        <VsCodeInterface codeData={Project3Data} />

      </div>


      <div className="w-full lg:w-1/2 h-full flex justify-center items-center ">
        <p className="text-white">
          <Image
            src="/assets/mockup-romantic.png"
            alt="Mockup do projeto Fragrância Divina"
            width={400}
            height={200}
            className="rounded-lg shadow-lg"
          />
        </p>


      </div>


      <Button
        onClick={() => window.open('https://romantic-developer.vercel.app/', '_blank')}
        className="absolute bottom-5 right-5 z-10
        bg-background px-5 py-3  flex items-center justify-center
        border  border-borderbd" >
        Ver Projeto
      </Button>
    </Cards >
  );
};

export default Project3;

