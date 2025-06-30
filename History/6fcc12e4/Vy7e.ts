import { cookies } from "next/headers"
import jwt from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET || "segredo"

export function getUserFromToken() {
  const token = (await cookies()).get("token")?.value
  if (!token) return null

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as {
      userId: string
      email: string
    }

    return decoded
  } catch {
    return null
  }
}
