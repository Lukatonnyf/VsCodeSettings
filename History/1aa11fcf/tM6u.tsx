'use client'

import { useEffect, useState } from 'react'

interface FragDestaqueButton {
  onFragMascChangeAction: (value: boolean) => void
  onFragFemChangeAction: (value: boolean) => void
}

export default function setComponentsDestaque({
  onAboutMeChangeAction,
  onMyHobbysChangeAction,
  onVsMySocialMediasChangeAction,
}: FragDestaqueButton)
