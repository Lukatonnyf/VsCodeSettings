
import HomePage from "./pages/(home)/Homepage";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" w-full min-h-screen  h-full bg-background ">
      {/* <HomePage /> */}
      <Image
        src='/ss.png'
        alt="test"
        width={1000}
        height={500}
      />
    </div>
  );
}
