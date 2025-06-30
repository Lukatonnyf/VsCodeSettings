import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient, Db } from 'mongodb'

let cachedDb: Db | null = null;


async function feedbackToDatabase(uri: string) {
  if(cachedDb){
    return cachedDb
  }

  const client = await MongoClient.connect(uri)

}
