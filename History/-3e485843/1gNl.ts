import { MongoClient, Db } from 'mongodb'
import { NextResponse } from "next/server";

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


export async function POST(request: NextRequest) {
try{
  const {name, email, feedback} = await request.json()
  console.log("dados recebidos: ",{ name, email, feedback})
  if(!name || !email || !feedback){
    return NextResponse
  }


}

}
