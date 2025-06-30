import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient, Db } from 'mongodb'

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


export async function POST(request: NextApiRequest) {
try{
  const {name, email, feedback} = await request.json()


}

}
