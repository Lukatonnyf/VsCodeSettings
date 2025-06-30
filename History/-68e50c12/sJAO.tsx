'use client'

import { useState } from 'react'
import Image from 'next/image'
import test from '/public/react.svg'

import VsAboutMe from './subpages/vsFilesAboutMe'
import MyCertificates from './subpages/myCertificates'
import AsideVsInterface from './components/asideVsInterFace'
import VsMySocialMedias from './subpages/vsMySocialMedias'
import GithubInfo from './components/GithubInfo';


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
          {!aboutMe && !myHobbys && !mySocialMedias && (
            <div className="flex justify-center items-center w-full h-full p-2 text-gray-500">
              <div
                className="max-w-full w-full max-h-[30dvh] h-full flex flex-col justify-between 
                items-start  p-2 pb-5 border border-gray-500 bg-gray-600 gap-2 rounded-2xl
                 sm:w-[40dvh] sm:h-[42dvh] transition  sm:hover:scale-105 relative"
              >
                <Image className="absolute -top-5 left-[40%]" src={test} alt="test" />

                <GithubInfo />
              </div>
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
