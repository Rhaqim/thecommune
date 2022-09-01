import { MongoClient } from 'mongodb';

const mongo_uri = process.env.NEXT_MONGODB_URI;
const DB = process.env.NEXT_MONGODB_DB;

console.log(`DB: ${DB}`);

if (!mongo_uri) {
    throw new Error('Missing MONGODB_URI');
}

export async function connectToDatabase() {
    let mongoClient;

    try {
        mongoClient = new MongoClient(mongo_uri);
        console.log('Connecting to MongoDB cluster...');
        await mongoClient.connect();
        console.log('Successfully connected to MongoDB Cluster!');

        return mongoClient;
    } catch (error) {
        console.error('Connection to MongoDB failed!', error);
        // process.exit();
    }

}

let cachedClient = null;
let cachedDB = null;

export async function executeConnection() {
    let mongoClient;
    let db;

    if (cachedClient) {
        mongoClient = cachedClient;
    } else {
        mongoClient = await connectToDatabase();
        cachedClient = mongoClient;
    }

    if (cachedDB) {
        db = cachedDB;
    } else {
        db = mongoClient.db(DB);
        cachedDB = db;
    }

    try {
        return db;
    } catch (error) {
        console.error('Connection to MongoDB Docker failed!', error);
        process.exit();
    }
}

// For Next Auth
const uri = process.env.NEXT_AUTH_MONGODB_URI
const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}

let client
let clientPromise

if (!process.env.MONGODB_URI) {
    throw new Error("Please add your Mongo URI to .env.local")
}

if (process.env.NODE_ENV === "development") {
    // In development mode, use a global variable so that the value
    // is preserved across module reloads caused by HMR (Hot Module Replacement).
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri, options)
        global._mongoClientPromise = client.connect()
    }
    clientPromise = global._mongoClientPromise
} else {
    // In production mode, it's best to not use a global variable.
    client = new MongoClient(uri, options)
    clientPromise = client.connect()
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise
