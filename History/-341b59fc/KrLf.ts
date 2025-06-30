import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";


export async function GET() {

  try{
    const client = await clientPromise;
    const db = client.db("feedbacks")
    const feedbacks = await db.collection("feedbacks").find().toArray()

  }


}
