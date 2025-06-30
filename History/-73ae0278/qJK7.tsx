"use client";

import { ReactNode } from "react";
import { Database } from "lucide-react";
import { FaJava } from "react-icons/fa";
import { FaCode } from 'react-icons/fa';
import { PropsCards } from "./cardLenguages";

// Back-End ARRAY
const backEnd: PropsCards[] = [
    {
        id: 1,
        icon: <FaCode />,  
        title: 'cSharp'
    },

    {
        id: 2,
        icon: <FaJava />,  
        title: 'Java'
    },

    {
        id: 3,
        icon: <Database  />,  
        title: 'MySqlWorkBanch'
    },
];


export default function BackEnd(){
    return(
        <ul className="flex flex-col  flex-wrap gap-5 lg:flex-row">
                {
                    backEnd.map((backEnd) => (
                        <li   className="flex  flex-col justify-center items-center max-w-[20dvh] w-full h-[20dvh] p-5 rounded-2xl bg-gray-600 border border-gray-500 
                        hover:bg-gray-500 shadow-lg hover:shadow-gray-300/50 gap-2" key={backEnd.id}>
                            <h1 className="flex justify-center items-center text-gray-200 size-10 text-3xl  w-full">{backEnd.icon}</h1>
                            <p className="text-gray-400 text-center">{backEnd.title}</p>
                        </li>
                    ))
                }
        </ul>
    )
}