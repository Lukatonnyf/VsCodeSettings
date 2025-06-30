import {verifyAuth} from "@/utils/auth"
import { NextRequest, NextResponse } from "next/server"


const protectedRoutes = ["/api/users"]
