'use client';
import AsideCard from "./components/asideCard";
import Header from "./components/header";


import HomePage from "./components/home";



export default function Home() {
  return (
    <div className="w-full h-screen   bg-bg-primary ">
      <Header />

      <div className=" border   ">
        <AsideCard className={``} />
        <HomePage />

      </div>
    </div >
  );
}
