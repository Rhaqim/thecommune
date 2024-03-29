import { ObjectId } from 'mongodb';
import { executeConnection } from './mongoDBConnect';

const collection = 'RESTAURANTS';

let response = {};

export const creatNewRestaurant = async (restaurant) => {
    const db = await executeConnection();

    const result = await db.collection(collection).insertOne(restaurant);

    return result.insertedId;
}

export const getRestaurants = async () => {
    const db = await executeConnection();

    const resturants = db.collection(collection)

    const result = await resturants.find({}, { projection: { title: 1, images: 1, description: 1, rating: 1, address: 1, slug: 1 } }).toArray();

    return result;
}

export const getRestaurantById = async (id) => {
    const db = await executeConnection();

    const resturants = db.collection(collection)

    const result = await resturants.findOne({ _id: ObjectId(id) });

    return result;
}

export const getRestaurantsReview = async (id) => {
    const db = await executeConnection();

    const reviews = db.collection('REVIEWS');

    const result = await reviews.aggregate([
        {
            $match:
            {
                restaurant_id:
                {
                    $ref: "RESTAURANTS",
                    $id: ObjectId(id)
                }
            }
        },
        {
            $lookup:
            {
                from: "users",
                localField: 'reviewer.$id',
                foreignField: "_id",
                as: "user"
            }
        },
        {
            $project:
            {
                _id: 1,
                reviewer: 1,
                user: {
                    name: 1
                },
                reviewImages: 1,
                reviewRating: 1,
                review: 1,
                like: 1,
                dislike: 1,
                createdAt: 1,
                updatedAt: 1
            }
        },
        {
            $unwind: "$user"
        },
    ]).toArray();

    return result;
}

export const addReview = async (review) => {
    const db = await executeConnection();

    const reviews = db.collection('REVIEWS');

    const reviewer = { $ref: 'users', $id: ObjectId(review.reviewer) };
    const restaurant = { $ref: collection, $id: ObjectId(review.restaurant_id) };

    const newReview = await reviews.insertOne({ ...review, reviewer, restaurant_id: restaurant });

    return newReview.insertedId;
}

export const getReviewer = async (id) => {
    const db = await executeConnection();

    const users = db.collection('users');

    const result = await users.findOne({ email: id }, { projection: { name: 1, email: 1 } });

    return result;
}

export const updateReviewLikeandDislike = async (id, like, dislike) => {
    const db = await executeConnection();

    const reviews = db.collection('REVIEWS');

    const updatedAt = new Date();

    const result = await reviews.updateOne({ _id: ObjectId(id) }, { $set: { like: like, dislike: dislike, updatedAt: updatedAt } });

    return result;
}

// Users 

export const createUser = async (user) => {
    const db = await executeConnection();

    if (await checkIfUsernameExists(user.username)) {
        response = {
            error: true,
            message: 'Username already exists'
        }
        return response;
    }

    if (await checkIfEmailExists(user.email)) {
        response = {
            error: true,
            message: 'Email already exists'
        }
        return response;
    }

    const result = await db.collection('users').insertOne(user);

    return response = {
        error: false,
        message: 'User created successfully',
        data: result.insertedId
    }
}

const checkIfUsernameExists = async (username) => {
    const db = await executeConnection();

    const result = await db.collection('users').findOne({ username });

    return result;

}

const checkIfEmailExists = async (email) => {
    const db = await executeConnection();

    const result = await db.collection('users').findOne({ email });

    return result;

}

export const getAllRestaurantsRecordsPerPage = async (page, limit) => {
    const db = await executeConnection();

    const restaurants = db.collection(collection);

    const result = await restaurants.find({},
        {
            projection:
            {
                title: 1,
                images: 1,
                description: 1,
                rating: 1,
                address: 1,
                slug: 1
            }
        })
        .skip(
            (
                page - 1
            ) * limit)
        .limit(limit).toArray();

    return result;
}