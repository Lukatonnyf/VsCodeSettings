// app/api/register/route.ts
import { NextRequest, NextResponse } from "next/server";
import { MongoClient, Db, MongoError } from 'mongodb'; // Import MongoError for specific error handling

let cachedDb: Db | null = null;

async function connectToDatabase(uri: string): Promise<Db> {
  console.log("Attempting to connect to database..."); // Log connection attempt
  if (cachedDb) {
    console.log("Using cached database connection.");
    return cachedDb;
  }

  try {
    // Explicitly set connection options if needed, e.g., timeout
    // const client = await MongoClient.connect(uri, { serverSelectionTimeoutMS: 5000 });
    const client = await MongoClient.connect(uri);

    // Extract dbName safely
    let dbName: string | undefined;
    try {
        const parsedUrl = new URL(uri);
        dbName = parsedUrl.pathname?.substring(1);
    } catch (e) {
        console.error("Error parsing MONGODB_URI:", e);
        throw new Error("Invalid MONGODB_URI format.");
    }

    if (!dbName) {
        console.error("Database name could not be extracted from MONGODB_URI.");
        throw new Error("Database name missing in MONGODB_URI.");
    }

    console.log(`Connecting to database: ${dbName}`);
    const db = client.db(dbName);
    // Optional: Ping the database to confirm connection before caching
    // await db.command({ ping: 1 });
    // console.log("Database ping successful.");
    cachedDb = db;
    console.log("Database connection successful and cached.");
    return db;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    // Clear cache on connection error
    cachedDb = null;
    // Rethrow the error to be caught by the handler
    throw new Error(`Failed to connect to database: ${error instanceof Error ? error.message : String(error)}`);
  }
}

export async function POST(request: NextRequest) {
  console.log("POST /api/register received"); // Log request start

  let name: string;
  let email: string;

  try {
    const body = await request.json();
    name = body.name;
    email = body.email;

    if (!name || !email) {
      console.log("Missing name or email in request body");
      return NextResponse.json({ message: "Missing name or email" }, { status: 400 });
    }
    console.log(`Registering user: ${name}, ${email}`);

  } catch (error) {
    console.error("Error parsing request JSON:", error);
    return NextResponse.json({ message: "Invalid request body" }, { status: 400 });
  }

  const mongoUri = process.env.MONGODB_URI;
  if (!mongoUri) {
    console.error("MONGODB_URI environment variable is not set.");
    return NextResponse.json({ message: "Server configuration error: MONGODB_URI missing." }, { status: 500 });
  }
  // Avoid logging the full URI in production due to credentials
  // console.log("Using MONGODB_URI ending with:", mongoUri.slice(-20));

  try {
    const db = await connectToDatabase(mongoUri);
    // Ensure the collection name 'register' is exactly as intended in your DB
    const collection = db.collection('register');

    console.log(`Inserting document into '${collection.collectionName}' collection...`);
    const insertResult = await collection.insertOne({
      name,
      email,
      subscribedAt: new Date(),
    });
    console.log("Document inserted successfully. Result:", insertResult);

    return NextResponse.json({ ok: true, insertedId: insertResult.insertedId }, { status: 201 });

  } catch (error) {
    console.error("Error during database operation in POST /api/register:", error);

    // Provide more specific feedback if possible
    let errorMessage = "Internal Server Error during registration.";
    if (error instanceof MongoError) {
        errorMessage = `Database error: ${error.message}`;
        // Check for specific error codes, e.g., authentication failure
        if (error.code === 18 || error.hasErrorLabel('AuthenticationFailed')) {
             errorMessage = "Database authentication failed. Please check credentials in MONGODB_URI.";
        } else if (error.message.includes('querySrv ENOTFOUND') || error.message.includes('queryTxt ENOTFOUND')) {
             errorMessage = "DNS resolution error for MongoDB Atlas cluster. Check network/DNS settings or Atlas cluster status.";
        } else if (error.message.includes('connect ECONNREFUSED')) {
             errorMessage = "Connection refused by database server. Check if the server is running and accessible (IP Whitelist in Atlas?).";
        } else if (error.message.includes('server selection timed out')) {
             errorMessage = "Connection timed out. Check network connectivity, firewall rules, and IP Whitelist in Atlas.";
        }
    } else if (error instanceof Error) {
        // Use the message from connectToDatabase or other errors
        errorMessage = error.message;
    }

    // Return the detailed error message (consider simplifying for production clients)
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  // This endpoint helps verify MONGODB_URI loading and basic connectivity
  console.log("GET /api/register received");
  const mongoUri = process.env.MONGODB_URI;

  if (!mongoUri) {
    console.error("GET /api/register: MONGODB_URI environment variable is not set.");
    return NextResponse.json({
        message: "Server configuration error: MONGODB_URI missing.",
        mongodb_uri_loaded: false
    }, { status: 500 });
  }

  console.log("GET /api/register: MONGODB_URI is loaded.");

  try {
    // Attempt a connection test without fetching data
    const db = await connectToDatabase(mongoUri);
    await db.command({ ping: 1 });
    console.log("GET /api/register: Database ping successful.");
    return NextResponse.json({
        message: "Connection test successful.",
        mongodb_uri_loaded: true,
        database_connection: "OK"
    });
  } catch (error) {
    console.error("GET /api/register: Database connection test failed:", error);
    let errorMessage = "Database connection test failed.";
     if (error instanceof Error) {
        errorMessage = error.message;
    }
    return NextResponse.json({
        message: errorMessage,
        mongodb_uri_loaded: true,
        database_connection: "Failed"
    }, { status: 500 });
  }
}

