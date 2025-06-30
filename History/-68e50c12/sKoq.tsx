"use client"; 

import { useState } from "react";


import VsAboutMe from "./subpages/vsFilesAboutMe"
import VsMyHobbys from "./subpages/vsSearchMyHobbys";
import AsideVsInterface from "./components/asideVsInterFace";
import VsMySocialMedias from "./subpages/vsMySocialMedias";


export default function AboutMe(){
    const [aboutMe, setAboutMe] = useState(false);
    const [myHobbys, setMyHobbys] = useState(false)
    const [mySocialMedias, setMySocialMedias] = useState(false);

/** 🎯 Resumo Deste componente
 * 1- Este component Mantém os estados (aboutMe, myHobbys, vsMySocialMedias) e
 passa as funções setState para o componente filho, no caso o => AsideVsInterface 
 */

    return(
    <div className="w-full min-h-[80dvh] h-full p-5">
        <section className="flex flex-row w-full min-h-[80dvh] h-full bg-vscode-background rounded-sm ">
         
  
        <AsideVsInterface  onAboutMeChangeAction={setAboutMe} 
          onMyHobbysChangeAction={setMyHobbys} onVsMySocialMediasChangeAction={setMySocialMedias} /> 
         
    
                <main className="border w-full">
                    {aboutMe && <VsAboutMe />}
                    {myHobbys && <VsMyHobbys/>}
                    {mySocialMedias && <VsMySocialMedias/>}
                </main>
    
         </section>    
    </div>
    )
}