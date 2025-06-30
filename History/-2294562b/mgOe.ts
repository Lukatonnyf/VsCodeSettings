import clientPromise from '@/lib/mongodb';
import { MongoClient, Db } from 'mongodb'
import {  NextRequest, NextResponse } from "next/server";


export default async function handler(req: NextRequest, res: NextResponse){

  try{
    const client = await clientPromise
    const db = client.db('feedbacks')
    const collection = db.collection('feedbacks')

    const data = await collection.find({}).toArray()

    res.status(200).json(data)
  }
}
