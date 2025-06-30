import jwt from "jsonwebtoken"
import { NextRequest, NextResponse } from "next/server"

const SECRET_KEY = process.env.JWT_SECRET || "chave secreta"
