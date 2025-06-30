'use client'

import { useEffect, useState } from 'react'
import FragDestaqueMasc from './fragDestaqueMasc'

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
    onFragMascChangeAction(FragDestaqueMasc)
  }, [FragDestaqueMasc, onFragMascChangeAction])
  return (

  )
}
