import VsCodeInterface from "./ui/vscode";
import Project1Data from "@/data/project1_data";
import Cards from "@/ui/cards";
import Image from "next/image";
import '../../../../globals.css';
import Project2Data from "@/data/project2_data";
import Button from "@/ui/button";





const Project2 = () => {
  return (
    <Cards className="w-full h-[57dvh] flex flex-col md:flex-row justify-center items-center
    border border-borderbd p-px gap-5 backdrop-blur-xs custom-scrollbar bg-[#FFFFFF]
    rounded-xl ">

      <div className="w-full lg:w-1/2 h-full hidden md:flex justify-center items-center  ">
        <VsCodeInterface codeData={Project2Data} />

      </div>


      <div className="w-full lg:w-1/2 h-full flex justify-center items-center ">
        <p className="text-white">
          <Image
            src="/assets/mockupt-plannet.png"
            alt="Mockup do projeto Fragrância Divina"
            width={400}
            height={200}
            className="rounded-lg shadow-lg"
          />
        </p>


      </div>


      <Button
        onClick={() => window.open('https://plan-net.vercel.app/', '_blank')}
        className="absolute bottom-5 right-5 z-10
        bg-background px-5 py-3  flex items-center justify-center
        border  border-borderbd" >
        Ver Projeto
      </Button>
    </Cards >
  );
};

export default Project2;

