"use client"

import yotube from "/public/yotube.svg"
import instagram from "/public/instagramlogo.svg";
import tiktok from "/public/tiktok.svg";
import linkedin from "/public/linkedin.svg";
import discord from "/public/discord.svg";
import github from "/public/github.svg"
import  Image, { type StaticImageData } from "next/image"
import { ArrowDown } from "lucide-react";


interface ProjectProps {
    id: number;
    img?: StaticImageData;
    text: string;
    btn: string;
}

export default function VsMySocialMedias(){
    const lineNumbers = [];
    for(let i = 1; i <= 7; i++){
        lineNumbers.push(<li className="flex  justify-end text-numbers-vscode" key={i}>{i}</li>)
    }

    const socialMedias: ProjectProps[] = [
        {
            id: 1,
            img: yotube,
            text:"Follow Me in instagram!",
            btn: "http://steamredesigne-lukatonnydev.surge.sh/"
        },
        {
            id: 2,
            img: instagram,
            text:"Follow Me in instagram!",
            btn: "http://steamredesigne-lukatonnydev.surge.sh/"
        },
        {
            id:3,
            img: tiktok,
            text:"Follow me on Titok",
            btn: "https://calcindicemassamuscular.surge.sh/"
        },
        {
            id:4,
            img: linkedin,
            text:"My linkedin",
            btn: "https://duvidorecusar.surge.sh/"
        },
        {
            id:5,
            img: github,
            text:"My Projects",
            btn: "https://duvidorecusar.surge.sh/"
        },
        {
            id:6,
            img: discord,
            text:"Join my discord",
            btn: "https://calcindicemassamuscular.surge.sh/"
        }
    ]


    const irSocialMedias = (url: string) => {
        window.open(url, "_blank");
    };

    return(
      <div className="w-full h-full"> 
        <div className="flex flex-row p-5 gap-5">
            <span>
                <ul className="flex flex-col gap-2">
                    {lineNumbers} 
                </ul>
            </span>
          

            <ul className="w-full min-h-full flex flex-col items-start gap-2">
                <h1 className=" flex  flex-row items-center gap-2 text-gray-200 font-heading text-md">My social medias Links <ArrowDown className="size-4"/></h1>
               {
                 socialMedias.map((social) => (
                    <li key={social.id} className="flex flex-row items-center  gap-3 text-gray-300">  
                      <Image 
                       src={social.img || "/fallback-image.svg"} 
                       alt={social.text} 
                       className="size-6  " 
                    />                 
                    <button type="button" onClick={() => irSocialMedias(social.btn)}>{social.text}</button>
                </li>      
                ))}  
            </ul>
        </div>
       </div>
    )
}