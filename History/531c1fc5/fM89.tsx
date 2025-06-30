import Image from "next/image";

import test from "/public/degrade.png"
export default function Home() {
  return (
    <div className="w-full-screen bg-danger h-full-screen bg-blue relative">

      <div className="border min-w-full h-full-screen absolute bg-danger">
        <Image src={test} alt="test" />
      </div>
    </div>
  );
}
