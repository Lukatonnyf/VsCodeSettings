import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

export async function GET() {
  const uri = process.env.MONGODB_URI;
  if (!uri) return NextResponse.json({ error: "MONGODB_URI undefined" });

  try {
    const client = await MongoClient.connect(uri);
    const dbName = new URL(uri).pathname.substring(1);
    const db = client.db(dbName);
    const collections = await db.collections();
    client.close();

    return NextResponse.json({
      message: "Conectado ao MongoDB com sucesso!",
      collections: collections.map(c => c.collectionName),
    });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
