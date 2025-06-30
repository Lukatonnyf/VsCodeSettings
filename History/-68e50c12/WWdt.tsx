"use client"; 

import { useState } from "react";


import VsAboutMe from "./subpages/vsFilesAboutMe"
import VsMyHobbys from "./subpages/vsSearchMyHobbys";
import AsideVsInterface from "./components/asideVsInterFace";


export default function AboutMe(){
    const [aboutMe, setAboutMe] = useState(false);
    const [myHobbys, setMyHobbys] = useState(false)

    return(
    <div className="w-full min-h-[80dvh] h-full bg-blue p-5">
        <section className="flex flex-row w-full min-h-[80dvh] h-full bg-vscode-background rounded-sm ">
         
  
        <AsideVsInterface onAboutMeChange={setAboutMe} 
          onMyHobbysChange={setMyHobbys}  /> 
         
    
                <main className="border border-gray-100 w-full">
                    {aboutMe && <VsAboutMe />}
                </main>
    
         </section>    
    </div>
    )
}