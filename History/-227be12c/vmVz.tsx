"use client";

import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal } from "react";
import { Database } from "lucide-react";
import { FaJava } from "react-icons/fa";
import { FaHtml5, FaCss3, FaReact } from "react-icons/fa";
import { FaCode } from 'react-icons/fa';



interface PropsCards {
    id: number;
    icon: ReactNode;
    title: string;
}


// Front-End ARRAY
const frontEnd: PropsCards[] = [
    {
        id: 1,
        icon: <><FaHtml5 /> <FaCss3 /></>,
        title: 'Html5 + Css3'
    },

    {
        id: 2,
        icon: <div>Icon</div>,  
        title: 'JavaScript ES6+'
    },

    {
        id: 3,
        icon: <FaReact/>,  
        title: 'ReactJs'
    },

    {
        id: 4,
        icon: <div>Icon</div>,  
        title: 'TypeScript'
    },


];


export default function FrontEnd(){
    return(
        {
            frontEnd.map((frontEnd: { id: Key | null | undefined; icon: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; title: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }) => (
                <li  className="flex flex-col justify-center items-center max-w-[20dvh] w-full h-[20dvh] p-5 rounded-2xl bg-gray-600 border border-gray-500 
                hover:bg-gray-500 shadow-lg hover:shadow-gray-300/50" key={frontEnd.id}>
                    <h1 className="text-gray-200">{frontEnd.icon}</h1>
                    <p className="text-gray-400">{frontEnd.title}</p>
                </li>
                ))
            }
    )
}