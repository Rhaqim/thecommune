const { updateReviewLikeandDislike } = require('../../lib/DB/DBExecutions');
const Ajv = require('ajv');
const ajv = new Ajv();

export default async function handler(req, res) {
    if (req.method === "POST") {
        // validate the request body first
        const validate = ajv.compile(schema);
        const valid = validate(req.body);
        if (!valid) {
            res.status(400).json({ message: "Invalid request body" + validate.errors });
            return;
        }
        const result = await updateReviewLikeandDislike(req.body);
        if (result) {
            res.status(201).json({ message: "Review like and dislike updated" });
        } else {
            res.status(404).json({ message: "Review like and dislike not updated" });
        }
    } else {
        res.status(403).json({ message: "Invalid request method" });
    }
}

// Validation Schema
const schema = {
    type: "object",
    properties: {
        id: { type: "integer" },
        like: { type: "integer" },
        dislike: { type: "integer" },
    },
    required: ["id", "like", "dislike"],
    additionalProperties: false,
};