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

/** 🎯 Resumo
 * 
AsideVsInterfaceProps define as funções que o componente filho precisa receber.

O componente pai (AboutMe.tsx) mantém os estados (aboutMe, myHobbys, vsMySocialMedias) e passa funções setState para o componente filho.

O componente filho (AsideVsInterface) usa essas funções para atualizar o estado no pai quando um ícone é clicado.

Isso permite alternar entre as seções, garantindo que apenas uma delas apareça por vez.

Assim, evitamos que aboutMe, myHobbys e vsMySocialMedias sejam exibidos juntos. 🚀
 */

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