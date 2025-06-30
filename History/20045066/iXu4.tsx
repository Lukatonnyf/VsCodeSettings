import Image from "next/image";

import test from "/public/degrade.png"
export default function Home() {
  return (
    <div className="w-full-screen h-full-screen  relative">

      <div className="border min-w-full h-full-screen absolute bg-danger">
        <Image src={test} alt="test" />
      </div>
    </div>
  );
}
