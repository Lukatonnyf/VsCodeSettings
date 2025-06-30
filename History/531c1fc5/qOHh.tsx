import Image from "next/image";

import test from "/public/degrade.png"
export default function Home() {
  return (
    <div className="min-w-full min-h-full bg-danger relative">

      <div className="w-full h-full absolute z-10 bottom-0 bg-danger">
        <Image src={test} alt="test" />
      </div>
    </div>
  );
}
