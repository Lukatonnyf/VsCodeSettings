'use client'

import { useState } from 'react'

import VsAboutMe from './subpages/vsFilesAboutMe'
import MyCertificates from './subpages/myCertificates'
import AsideVsInterface from './components/asideVsInterFace'
import VsMySocialMedias from './subpages/vsMySocialMedias'

export default function AboutMe() {
  const [aboutMe, setAboutMe] = useState(false)
  const [myHobbys, setMyHobbys] = useState(false)
  const [mySocialMedias, setMySocialMedias] = useState(false)

  /** 🎯 Resumo Deste componente
 * 1- Este component Mantém os estados (aboutMe, myHobbys, vsMySocialMedias) e
 passa as funções setState para o componente filho, no caso o => AsideVsInterface 
 */

  return (
    <div className="w-full min-h-[80dvh] h-full p-5 ">
      <section className="flex flex-row w-full min-h-[80dvh] h-full bg-vscode-background rounded-sm ">
        <AsideVsInterface
          onAboutMeChangeAction={setAboutMe}
          onMyHobbysChangeAction={setMyHobbys}
          onVsMySocialMediasChangeAction={setMySocialMedias}
        />

        <main className="border border-vscode-border w-full ">
         {/* Exibindo uma mensagem de default quando nenhum componente for selecionado */}
        {(!aboutMe && !myHobbys && !mySocialMedias) && (
          <div className="text-center text-gray-500">
            <p>Selecione uma opção para ver o conteúdo</p>
          </div>
        )}

          {aboutMe && <VsAboutMe />}
          {myHobbys && <MyCertificates />}
          {mySocialMedias && <VsMySocialMedias />}
        </main>
      </section>
    </div>
  )
}
