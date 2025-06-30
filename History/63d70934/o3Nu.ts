import {verifyAuth} from "@/utils/auth"
import { NextRequest, NextResponse } from "next/server"


const protectedRoutes = ["/api/users"];

export async function middleware(req: NextRequest){
  if(protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route))){
    const auth = await verifyAuth(req)
  }
}
