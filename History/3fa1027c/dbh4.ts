// app/api/subscribe/route.ts
import { NextRequest, NextResponse } from "next/server";
import { MongoClient, Db } from 'mongodb'


let cachedDb: Db | null = null;


async function connectToDatabase(uri: string){
  if(cachedDb){
    return cachedDb
  }


  const client = await MongoClient.connect(uri)

  const {pathname} =  new URL(uri)
  const dbName = pathname?.substring(1)
  const db = client.db(dbName)

  cachedDb = db;

  return db;

}


export  async function POST(request: NextRequest) {
  const { name, email, password } = await request.json();


  const db = await connectToDatabase(process.env.)


  const collection = db.collection('subscribers')

  await collection.insertOne({
    name,
    email,
    subscribedAt: new Date(),
  })


  return NextResponse.json(
    {ok: true},
    {status: 201}
  )
}
