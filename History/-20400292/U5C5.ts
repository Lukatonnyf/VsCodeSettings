import { useEffect, useState } from 'react'
import {jwtDecode} from 'jwt-decode'


interface TokenPayload {
  userId: string,
  email:string,
  exp: number
}
