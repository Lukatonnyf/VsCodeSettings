'use client';
import { CardEvents } from "./components/cards";
import Header from "./components/header";

import { ArrowRight } from "lucide-react";
import HomePage from "./components/home";



export default function Home() {
  return (
    <div className="w-full h-screen   bg-bg-primary ">
      <Header />

      <div className=" border   ">
        <HomePage />

      </div>
    </div >
  );
}
