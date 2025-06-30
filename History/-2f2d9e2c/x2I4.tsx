import Image from "next/image";
import degrade from "../../public/degrade.png"

export default function Home() {
  return (
    <div className="min-h-full pb-5 flex justify-center flex-col items-center relative">
      
 
      <div className=" w-full h-full flex justify-center">
        <Image src={degrade} className="absolute  border contain" alt="test"/>
      </div>
    </div>
  );
}
