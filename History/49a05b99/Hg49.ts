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

if(process.env.NODE_ENV === "development"){

  if(!global._mongoClientPromise){
    client = new MongoClient(uri, options)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
}else{
  client = new MongoClient(uri, options)
  clientPromise = client.connect()}
}
