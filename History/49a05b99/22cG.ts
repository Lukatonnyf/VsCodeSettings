import {MongoClient, Db} from 'mongodb'

let cachedDb: Db | null = null

export async function connectToDatabase(uri: string){
  if(cachedDb){
    return cachedDb
  }

  const client = await MongoClient.connect(uri)
}
