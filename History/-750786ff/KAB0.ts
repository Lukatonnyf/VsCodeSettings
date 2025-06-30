import jwt from "jsonwebtoken"
import { NextRequest, NextResponse } from "next/server"

const SECRET_KEY = process.env.JWT_SECRET || "chave secreta"

export async function POST(req: NextRequest){
  const {username} = await req.json()

  if(!username){
    return NextResponse.json(
      {message: "Usuário não informado!"},
      {status:400}
    )
  }

  const token: jwt.sign({username}, SECRET_KEY, {expiresIn: "1h"})

  const responde = NextResponse.json({message: "Login bem-sucedido"});
  responde.cookies.set("token", token,{
    httpOnly:true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/"
  })
}
