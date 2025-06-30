import {jwtVerify} from "jose";
import { NextRequest, NextResponse } from "next/server";

const SECRET_KEY = new TextEncoder().encode(
  process.env.JWT_SECRET || "chave-secreta"
);

export async function verifyAuth(request: NextRequest){
  const authHeader = request.headers.get("authorization");

  if(!authHeader || !authHeader.startsWith("Bearer")){
    return NextResponse.json(
      {message: "Não autorizado! token ausente"},
      {status: 401}
    );
  }

  const token = authHeader.split(" ")[1]

  try{
    const {payload} = await jwtVerify(token, SECRET_KEY);
    return payload;
  }catch(error){
    console.error("Erro ao verificar token: ", error);
    return NextResponse.json({message: "Token inválido"},
      {status: 401}
    )
  }
}
