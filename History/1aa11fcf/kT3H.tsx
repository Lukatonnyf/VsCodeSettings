'use client'

import {
  useEffect,
  useRef, useState
} from 'react'
import { gsap } from 'gsap';

interface FragDestaqueButton {
  onFragMascChangeAction: (value: boolean) => void
  onFragFemChangeAction: (value: boolean) => void
}

export default function SetComponentsDestaque({
  onFragMascChangeAction,
  onFragFemChangeAction
}: FragDestaqueButton) {

  const [fragMasc, setFragMasc] = useState(true)
  const [fragFem, setFragFem] = useState(true)

  useEffect(() => {
    onFragMascChangeAction(fragMasc)
  }, [fragMasc, onFragMascChangeAction])

  useEffect(() => {
    onFragFemChangeAction(fragFem)
  }, [fragFem, onFragMascChangeAction])

  const titleRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    if (titleRef) {
      gsap.fromTo(titleRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,

      }, {
        y: 0,
        opacity: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          end: 'top 50%',
          toggleActions: 'play none none reverse',
        },
      })
    }
  }, [])

  return (
    <aside
      className="max-w-full min-h-full flex flex-row bg-vscode-asidebackground
   lg:w-[40dvh] "
    >
      <section className="flex flex-col justify-between border border-vscode-background   w-full  px-5">
        <h1 className="text-2xl font-bold mb-4 text-gray-200" ref={titleRef}>Fragâncias em Destaque</h1>
        <div className="flex flex-col w-full h-full text-vscode-items-color p-2 gap-4">
          <button
            className="size-7 text-gray-50"
            onClick={() => {
              setFragMasc(!fragMasc)
              setFragFem(false)
            }}
          >Masculinas</button>

          <button
            className="size-7 text-gray-50"
            onClick={() => {
              setFragFem(!fragFem)
              setFragMasc(false)
            }}
          >Femininas</button>

        </div>


      </section>
    </aside>

  )
}
