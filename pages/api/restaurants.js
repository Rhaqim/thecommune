const { getRestaurants, creatNewRestaurant } = require('../../lib/DB/DBExecutions');
const Ajv = require('ajv');
const ajv = new Ajv();

export default async function handler(req, res) {
    if (req.method === "GET") {
        const result = await getRestaurants();
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ message: "No restaurants found" });
        }
    } else if (req.method === "POST") {
        // validate the request body first
        const validate = ajv.compile(schema);
        const valid = validate(req.body);
        if (!valid) {
            res.status(400).json({ message: "Invalid request body" + validate.errors });
            return;
        }
        // create new restaurant
        const data = res.body
        data.createdAt = new Date();
        data.updatedAt = new Date();
        // const result = await creatNewRestaurant(data);
        // if (result) {
        //     res.status(201).json({ message: "Restaurant created" });
        // } else {
        //     res.status(500).json({ message: "Something went wrong" });
        // }

    }
}

// Validation Schema
const schema = {
    type: "object",
    properties: {
        title: {type : "string"},
        description: {type : "string"},
        slug: {type : "string"},
        address: {type : "string"},
        phone: {type : "string"},
        email: {type : "string"},
        website: {type : "string"},
        images: {type: "array"},
        latitude: {type : "string"},
        longitude: {type : "string"},
        rating: {type : "integer"},
        openingTime: {type: "array"},
        currency: {type : "string"},
        avgPrice: {type : "integer"},
        categories: {type: "array"},
        tags: {type: "array"},
        createdAt: {type: "string"},
        updatedAt: {type: "string"},
    },
    required: ["title", "description", "slug", "address", "phone", "email", "website", "images", "latitude", "longitude", "rating", "openingTime", "currency", "avgPrice", "categories", "tags", "createdAt", "updatedAt"],
    additionalProperties: false,
};