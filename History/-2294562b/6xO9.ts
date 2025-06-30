import clientPromise from '@/lib/mongodb';
import { MongoClient, Db } from 'mongodb'
import {  NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db('feedbacks');
    const collection = db.collection('feedbacks');

    const data = await collection.find({}).toArray();

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'erro ao buscar dados' }, { status: 500 });
  }
}
