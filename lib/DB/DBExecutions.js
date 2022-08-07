import { ObjectId } from 'mongodb';
import { connectToDatabase } from './mongoDBConnect';

const DB = process.env.DB;

let cachedClient = null;
let cachedDB = null;

export async function executeConnection() {
    let mongoClient;

    if (cachedClient) {
        mongoClient = cachedClient;
    } else {
        mongoClient = await connectToDatabase();
        cachedClient = mongoClient;
    }

    try {
        mongoClient = await connectToDatabase();
        const db = mongoClient.db(DB);
        const collection = db.collection('the_commune_test');
        const result = await collection.find({}).toArray();
        return result;
    } finally {
        await mongoClient.close();
    }
}

export const creatNewRestaurant = async (restaurant) => {
    let mongoClient;

    if (cachedClient) {
        mongoClient = cachedClient;
    } else {
        mongoClient = await connectToDatabase();
        cachedClient = mongoClient;
    }

    try {
        mongoClient = await connectToDatabase();
        const db = mongoClient.db(DB);
        const restaurants = db.collection('the_commune_test');

        const newRestaurant = await restaurants.insertOne(restaurant);

        return newRestaurant;
    } finally {
        await mongoClient.close();
    }
}


export const getRestaurants = async () => {
    let mongoClient;
    
    if (cachedClient) {
        mongoClient = cachedClient;
    } else {
        mongoClient = await connectToDatabase();
        cachedClient = mongoClient;
    }
    
    try {
        mongoClient = await connectToDatabase();
        const db = mongoClient.db(DB);
        const restaurants = db.collection('RESTAURANTS');
        
        const result = await restaurants.find({}).toArray();
        
        return result;
    } finally {
        await mongoClient.close();
    }
}

export const getRestaurantsReview = async (id) => {
    let mongoClient;

    if (cachedClient) {
        mongoClient = cachedClient;
    } else {
        mongoClient = await connectToDatabase();
        cachedClient = mongoClient;
    }
    
    try {
        mongoClient = await connectToDatabase();
        const db = mongoClient.db(DB);
        const reviews = db.collection('REVIEWS');
        
        const result = await reviews.find({ restaurant_id: { $ref: 'RESTAURANTS', $id: ObjectId(id) } }).toArray();
        
        return result;
    } finally {
        await mongoClient.close();
    }
}
export const addReview = async (review) => {
    let mongoClient;

    if (cachedClient) {
        mongoClient = cachedClient;
    } else {
        mongoClient = await connectToDatabase();
        cachedClient = mongoClient;
    }
    
    try {
        mongoClient = await connectToDatabase();
        const db = mongoClient.db(DB);
        const reviews = db.collection('REVIEWS');
        
        const newReview = await reviews.insertOne(review);
        
        return newReview;
    } finally {
        await mongoClient.close();
    }
}

export const userInfo = async (id) => {
    let mongoClient;

    if (cachedClient) {
        mongoClient = cachedClient;
    } else {
        mongoClient = await connectToDatabase();
        cachedClient = mongoClient;
    }
    
    try {
        mongoClient = await connectToDatabase();
        const db = mongoClient.db(DB);
        const users = db.collection('USERS');
        
        const result = await users.find({ _id: ObjectId(id) }).toArray();
        
        return result;
    } finally {
        await mongoClient.close();
    }
}