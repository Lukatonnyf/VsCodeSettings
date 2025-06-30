'use client'

import { useEffect, useState } from 'react'

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
    onAboutMeChangeAction(aboutMe)
  }, [aboutMe, onAboutMeChangeAction])
  return (

  )
}
