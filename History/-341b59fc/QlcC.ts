import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";


export async function GET() {

  try{
    const client = await clientPromise;
    const db = client.db("feedbacks")
  }


}
