import { ObjectId } from 'mongodb';
import { executeConnection } from './mongoDBConnect';

export const creatNewRestaurant = async (restaurant) => {
    const db = await executeConnection();

    const result = await db.collection('restaurants').insertOne(restaurant);

    return result.insertedId;
}

export const getRestaurants = async () => {
    const db = await executeConnection();

    const resturants = db.collection('restaurants')

    const result = await resturants.find({}).toArray();

    return result;
}

export const getRestaurantsReview = async (id) => {
    const db = await executeConnection();

    const reviews = db.collection('REVIEWS');

    const result = await reviews.find({ restaurant_id: { $ref: 'RESTAURANTS', $id: ObjectId(id) } }).toArray();

    return result;
}

export const addReview = async (review) => {
    const db = await executeConnection();

    const reviews = db.collection('REVIEWS');

    const newReview = await reviews.insertOne(review);

    return newReview.insertedId;
}

export const getReviewer = async (id) => {
    const db = await executeConnection();

    const users = db.collection('USERS');

    const result = await users.find({ _id: ObjectId(id) }).toArray();

    return result;
}