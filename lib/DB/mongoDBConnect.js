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
        console.log('Connecting to MongoDB Docker cluster...');
        await mongoClient.connect();
        console.log('Successfully connected to MongoDB Cluster!');

        return mongoClient;
    } catch (error) {
        console.error('Connection to MongoDB Docker failed!', error);
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