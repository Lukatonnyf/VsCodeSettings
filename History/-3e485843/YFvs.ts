import { MongoClient, Db } from 'mongodb'
import { NextRequest, NextResponse } from "next/server";

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

    // => Cria os campos para os textos
    const {name, email, feedback} = await request.json()
    console.log("dados recebidos: ",{ name, email, feedback})

    // => Checa se o campo está preencido ou não
    if(!name || !email || !feedback){
      return NextResponse.json({error: "Campos faltando"}, {status: 400})
    }

    const db = await feedbackToDatabase(process.env.MONGODB_URI!)
    const feedbacks = db.collection("feedbacks");

    const saveFeedback = await feedbacks.insertOne({
      name,
      email,
      feedback,
      subscribedAt: new Date()
    });

    console.log("feedback salvo: ", saveFeedback.insertedId)
    return NextResponse.json({ok: true}, {status:201})


  }catch(err){
    console.log("errooooo", err)
    return NextResponse.json({error: "erro interno no servidor talvzes"}, {status: 500})
  }

}


export async function GET() {
  try {
    const client = await connectToDatabase(process.env.MONGODB_URI!);
    const db = client.db();
    const collection = db.collection("feedbacks");
    const feedbacks = await collection.find().toArray();

    return NextResponse.json(feedbacks);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Erro ao buscar feedbacks" }, { status: 500 });
  }
}
