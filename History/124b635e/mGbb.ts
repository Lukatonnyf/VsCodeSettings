import { NextRequest, NextResponse } from "next/server";
import { MongoClient, Db } from 'mongodb';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

let cachedDb: Db | null = null;

async function connectToDatabase(uri: string){
  if(cachedDb)
    return cachedDb

  const client = await MongoClient.connect(uri)
  const {pathname} = new URL(uri)
  const dbName = pathname?.substring(1)
  const db = client.db(dbName)
  cachedDb = db
  return db
}

const JWT_SECRET = process.env.JWT_SECRET


