import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";


export async function GET() {

  try{
    const client = await clientPromise;
    const db = client.db("feedbacks")
    const feedbacks = await db.collection("feedbacks").find().toArray()


    return NextResponse.json(feedbacks);
  }catch(error) {
    console.error(error)
    return NextResponse.json({error: "erro ao buscar dados:"}, {status: 500})

  }


}
