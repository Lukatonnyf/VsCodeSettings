import Image from "next/image";
import degrade from "../../public/degrade.png"

export default function Home() {
  return (
    <div className="min-h-full pb-5 flex justify-center flex-col items-center relative">
      
 
      <div className="absolute  border w-full h-full">
        <Image src={degrade} alt="test"/>
      </div>
    </div>
  );
}
