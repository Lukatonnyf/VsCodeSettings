'use client'

import { useEffect, useState } from 'react'

interface AsideVsInterfaceProps {
  onAboutMeChangeAction: (value: boolean) => void
  onMyHobbysChangeAction: (value: boolean) => void
  onVsMySocialMediasChangeAction: (value: boolean) => void
}
