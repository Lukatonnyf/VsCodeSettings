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


    return(
    <div className="w-full min-h-[80dvh] h-full bg-blue p-5">
        <section className="flex flex-row w-full min-h-[80dvh] h-full bg-vscode-background rounded-sm ">
         
  
        <AsideVsInterface onAboutMeChangeAction={setAboutMe} 
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