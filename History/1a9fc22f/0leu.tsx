import Image from "next/image";
import Header from "./header";
import Activitys from "./components/activitys";


export default function Home() {
  return (
<div className=" w-full h-screen  border ">
    <Header/>
    <Activitys/>
</div>
  );
}
