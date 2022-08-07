import { MongoClient } from 'mongodb';

const mongo_uri = process.env.MONGODB_URI;

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
        console.log('Successfully connected to MongoDB Docker!');

        return mongoClient;
    } catch (error) {
        console.error('Connection to MongoDB Docker failed!', error);
        process.exit();
    }

}



