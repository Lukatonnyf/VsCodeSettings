"use client";
 

import { useEffect, useState } from "react";
import { VscFiles, VscSearch, VscGitMerge, VscDebugAlt , VscExtensions, VscAccount, VscSettingsGear   } from "react-icons/vsc";

import Image from "next/image"; 
import type { StaticImageData } from "next/image";

import NextJsImage from "/public/nextjs.svg"
import ReactJsImage from "/public/react.svg"
import TypescrptTs from "/public/typescript.svg"
import { ChevronDown } from "lucide-react";


interface AsideVsInterfaceProps {
    onAboutMeChangeAction: (value: boolean) => void;
    onMyHobbysChangeAction: (value: boolean) => void;
    onVsMySocialMediasChangeAction: (value: boolean) => void;
}
 
interface LanguagesUsed{
  id: number,
  iconLenguage?: StaticImageData,
  lenguage: string,
}

export default function AsideVsInterface({ onAboutMeChangeAction, onMyHobbysChangeAction, onVsMySocialMediasChangeAction }: AsideVsInterfaceProps ){
  const LenguageUsedArray: LanguagesUsed[] =[
    {
      id:1,
      iconLenguage: NextJsImage,
      lenguage:"Next.js"
    },
    {
      id:2,
      iconLenguage: ReactJsImage,
      lenguage:"React.jsx"
    },
    {
      id:3,
      iconLenguage: TypescrptTs,
      lenguage:"Typescrpt.ts"
    }
   ]    
  /** 🎯 Resumo Deste Componente
     *1 - ( AsideVsInterfaceProps )
     => Esse interface define as funções que esse component precisa receber do 
     component ( AboutMe ).

     *2 - Esse component utiliza as funções para atualizar o estado do ( AboutMe )
     quando um ícone é clicado.

     *3 - Isso permite alternar entre as seções, garantindo que apenas uma delas apareça
     por vez.

     *4 - Sempre que aboutMe mudar (true ou false), o efeito será acionado.
     - Ele chama a função onAboutMeChangeAction(aboutMe), que foi recebida como prop do componente pai.
     - Isso notifica o pai para atualizar o estado de aboutMe.

     *5 - 🔍 Por que usar useEffect para isso?
     - Sem useEffect, a atualização do estado só aconteceria dentro do componente filho (AsideVsInterface), sem refletir no pai (AboutMe).
     - Isso impediria que o componente correto fosse exibido.
     - Usamos três useEffect separados porque cada um trata de um estado diferente (aboutMe, myHobbs e mySocialMedias).
     - Se não tivéssemos useEffect, o setState do pai não seria acionado automaticamente, e a 
       interface não atualizaria corretamente. 🚀


     */
    
    const [aboutMe, setAboutMe] = useState(true);
    const [myHobbs, setMyHobbs] = useState(false);
    const [mySocialMedias, setMySocialMedias] = useState(false);

    useEffect(() => {
        onAboutMeChangeAction(aboutMe);
      }, [aboutMe, onAboutMeChangeAction]);
    
      useEffect(() => {
        onMyHobbysChangeAction(myHobbs);
      }, [myHobbs, onMyHobbysChangeAction]);

      useEffect(() => {
        onVsMySocialMediasChangeAction(mySocialMedias);
      }, [mySocialMedias, onVsMySocialMediasChangeAction]);


      function test(){
        
      }


    return(
           <aside className="  max-w-full min-h-full flex  flex-row bg-vscode-asidebackground  border border-gray-500 lg:w-[40dvh] ">
             <section className="flex flex-col justify-between  w-[6dvh] ">
                <div className="flex flex-col w-full h-full  text-vscode-items-color p-2 gap-3">
                   <VscFiles className="size-7"
                       onClick={() => {
                           setAboutMe(!aboutMe);
                           setMyHobbs(false);
                           setMySocialMedias(false);
                       }}
                    />

                   <VscSearch className="size-7"
                     onClick={() => {
                       setMyHobbs(!myHobbs);
                       setAboutMe(false);
                       setMySocialMedias(false);
                      }}
                    />

                   <VscGitMerge className="size-7"
                     onClick={() => {
                       setMySocialMedias(!mySocialMedias);
                       setMyHobbs(false);
                       setAboutMe(false);
                     }}
                   />  

                   <VscDebugAlt className="size-7"/>
                   <VscExtensions className="size-7"/>
                 </div>
        
        
                        
                <div className="flex flex-col w-full text-vscode-items-color p-2 gap-4 ">
                  <VscAccount className="size-7" />
                  <VscSettingsGear className="size-7" />
                </div>
               </section>
        

              <section className="hidden w-full border lg:flex flex-col ">
                  <div className="flex flex-row justify-between w-full max-h-[5dvh] items-center text-vscode-items-color p-2">
                      <h1 className=" flex items-center gap-1 font-heading font-semibold ">
                        Explorer</h1>
                      <p>...</p>
                  </div>

                  <div className="w-full h-full ">
                    <ul className="flex  flex-col pl-1 ">
                      {
                      LenguageUsedArray.map((lenguages) => (
                        <li key={lenguages.id} className="flex flex-row items-center gap-1 text-numbers-vscode">
                          <Image 
                            src={lenguages.iconLenguage || "/fallback-image.svg"} 
                            alt="teste" 
                            className="size-4  " 
                           />                                        
                          <h1>{lenguages.lenguage}</h1>
                        </li>
                       ))
                      }   
                      </ul>
                  </div>
             </section>  
           </aside>       
    )
}