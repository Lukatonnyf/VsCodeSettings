'use client';
import AsideCard from "./components/asideCard";
import Header from "./components/header";


import HomePage from "./components/home";



export default function Home() {
  return (
    <div className="w-full h-screen   bg-bg-primary ">
      <Header />

      <div className=" border  grid ">
        <AsideCard className="md:min-w-[300px] md:flex-1" />
        <HomePage className="flex-1 min-w-[300px] " />

      </div>
    </div >
  );
}
