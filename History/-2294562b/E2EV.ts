import { MongoClient, Db } from 'mongodb'
import { NextRequest, NextResponse } from "next/server";

let cachedDb: Db | null = null;


async function feedbackToDatabase(uri: string) {
  if(cachedDb){
    return cachedDb
  }

  const client = await MongoClient.connect(uri)
  const {pathname} = new URL(uri)
  const dbName = pathname?.substring(1)
  const db = client.db(dbName)

  cachedDb = db
  return db;

}


export async function GET() {
  try {
    const db = await feedbackToDatabase(process.env.MONGODB_URI!);
    const collection = db.collection("feedbacks");
    const feedbacks = await collection.find().toArray();

    return NextResponse.json(feedbacks);
  } catch (err) {
    console.error(err);s
    return NextResponse.json({ error: "Erro ao buscar feedbacks" }, { status: 500 });
  }
}
