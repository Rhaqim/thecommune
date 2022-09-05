const { getReviewer, createUser } = require('../../lib/DB/DBExecutions');
const Ajv = require('ajv');
const ajv = new Ajv();

export default async function handler(req, res) {
    if (req.method === "GET") {
        const { email } = req.query;
        const result = await getReviewer(email);
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ message: "No Reveiwer with that ID found" });
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
        req.body.role = "user";
        req.body.createdAt = new Date();
        req.body.updatedAt = new Date();

        const result = await createUser(req.body);
        if (result) {
            res.status(201).json(result);
        }
        else {
            res.status(500).json(result);
        }

    }
}

// Validation Schema
const schema = {
    type: "object",
    properties: {
        fullname: { type: "string" },
        username: { type: "string" },
        avatar: { type: "object" },
        email: { type: "string" },
        password: { type: "string" },
        socials: { type: "object" },
        role: { type: "string" },
        createdAt: { type: "string" },
        updatedAt: { type: "string" },
    },
    required: ["username", "email", "password"],
    additionalProperties: false,
};