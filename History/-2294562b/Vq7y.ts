import clientPromise from '@/lib/mongodb';
import { MongoClient, Db } from 'mongodb'
import {  NextRequest, NextResponse } from "next/server";

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


export async function GET(req: NextRequest) {
  try {
  const client = await clientPromise;
  const db = await feedbackToDatabase(process.env.MONGODB_URI!)
  const collection = db.collection('feedbacks');

  const data = await collection.find({}).toArray();

  return NextResponse.json(data, { status: 200 });

  } catch (error) {
    return NextResponse.json({ message: 'erro ao buscar dados' }, { status: 500 });
  }
}
