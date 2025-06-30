import VsCodeInterface from "./ui/vscode";
import Project1Data from "@/data/project1_data";
import Cards from "@/ui/cards";
import Image from "next/image";
import '../../../../globals.css';





const Project2 = () => {
  return (
    <Cards className="w-full h-full flex flex-col lg:flex-row justify-center items-center
    border border-borderbd p-px gap-5 backdrop-blur-xs custom-scrollbar bg-black
    rounded-xl">

      <div className="w-full lg:w-1/2 h-full flex justify-center items-center  ">
        <VsCodeInterface codeData={Project1Data} />
      </div>

      <div className="w-full lg:w-1/2 h-full flex justify-center items-center">
        <p className="text-white">
          <Image
            src="/assets/mockup-fragancia.png"
            alt="Mockup do projeto Fragrância Divina"
            width={400}
            height={200}
            className="rounded-lg shadow-lg"
          />
        </p>
      </div>
    </Cards >
  );
};

export default Project2;

