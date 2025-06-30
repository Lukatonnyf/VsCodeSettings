'use client'

import { useEffect, useState } from 'react'
import { VscFiles } from 'react-icons/vsc'


interface FragDestaqueButton {
  onFragMascChangeAction: (value: boolean) => void
  onFragFemChangeAction: (value: boolean) => void
}

export default function setComponentsDestaque({
  onFragMascChangeAction,
  onFragFemChangeAction
}: FragDestaqueButton) {

  const [fragMasc, setFragMasc] = useState(true)
  const [fragFem, setFragFem] = useState(true)

  useEffect(() => {
    onFragMascChangeAction(fragMasc)
  }, [fragMasc, onFragMascChangeAction])

  useEffect(() => {
    onFragMascChangeAction(fragFem)
  }, [fragFem, onFragMascChangeAction])
  return (
    <aside
      className="max-w-full min-h-full flex flex-row bg-vscode-asidebackground
  border border-gray-500 lg:w-[40dvh] "
    >
      <section className="flex flex-col justify-between border border-vscode-background   w-[6dvh] ">
        <div className="flex flex-col w-full h-full text-vscode-items-color p-2 gap-4">
          <VscFiles
            className="size-7"
            onClick={() => {
              setAboutMe(!aboutMe)
              setMyHobbs(false)
              setMySocialMedias(false)
            }}
          />

          <VscSearch
            className="size-7"
            onClick={() => {
              setMyHobbs(!myHobbs)
              setAboutMe(false)
              setMySocialMedias(false)
            }}
          />

          <VscGitMerge
            className="size-7"
            onClick={() => {
              setMySocialMedias(!mySocialMedias)
              setMyHobbs(false)
              setAboutMe(false)
            }}
          />
        </div>


      </section>
    </aside>

  )
}
