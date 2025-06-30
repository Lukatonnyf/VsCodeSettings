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
}
