import { NextRequest, NextResponse } from "next/server";
import { MongoClient, Db } from 'mongodb';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

let cachedDb: Db || null ;

