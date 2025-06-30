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
        <section>
          <h1 className="w-full text-white  text-2xl  flex justify-between  mt-10">Proximos Eventos
            <span className=" flex items-center gap-1  text-sm  text-text-secondary">Ver Todos <ArrowRight className="size-5" /></span>
          </h1>

          <CardEvents />
        </section>

      </div>
    </div >
  );
}
