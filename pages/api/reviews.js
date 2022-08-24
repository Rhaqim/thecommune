const { getRestaurantsReview, addReview } = require('../../lib/DB/DBExecutions');
const Ajv = require('ajv');
const ajv = new Ajv();

export default async function handler(req, res) {
    if (req.method === "GET") {
        const { id } = req.query;
        const result = await getRestaurantsReview(id);
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ message: "No reviews found" });
        }
    } else if (req.method === "POST") {
        // validate the request body first
        const validate = ajv.compile(schema);
        const valid = validate(req.body);
        if (!valid) {
            res.status(400).json({ message: "Invalid request body" + validate.errors });
            return;
        }
        // change created_at to current date
        req.body.createdAt = new Date();
        req.body.updatedAt = new Date();

        const result = await addReview(req.body);
        if (result) {
            res.status(201).json({ message: "Review created" });
        }
        else {
            res.status(500).json({ message: "Something went wrong" });
        }

    }

}

// Validation Schema
const schema = {
    type: "object",
    properties: {
        reviewer: { type: "string" },
        review: { type: "string" },
        reviewRating: { type: "integer" },
        spent: { type: "integer" },
        reviewImages: { type: "array" },
        restaurant_id: { type: "string" },
        dislike: { type: "integer" },
        like: { type: "integer" },
        createdAt: { type: "string" },
        updatedAt: { type: "string" },
    },
    required: ["reviewer", "review", "restaurant_id", "dislike", "like", "createdAt", "updatedAt"],
    additionalProperties: false,
};