import {MongoClient, Db} from 'mongodb'

const uri = process.env.MONGODB_URI!
const options = {}

let client
let clientPromise: Promise<MongoClient>


declare global {
  var _mongoClientPromise: Promise<MongoClient>
}

if(!process.env.MONGODB_URI){
  throw new Error("Por favor defina a variável de ambiente MONGO_URI no .env.local")
}

