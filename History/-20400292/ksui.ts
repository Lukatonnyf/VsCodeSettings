import { useEffect, useState } from 'react'
import {jwtDecode} from 'jwt-decode'


interface TokenPayload {
  userId: string,
  email:string,
  exp: number
}

export function useAuth(){
  const [user, setUser] = useState<TokenPayload | null>(null)

  useEffect(() => {
    const token  = localStorage.getItem('token')
    if(!token) return
  })
}
