const { getRestaurantById } = require('../../lib/DB/DBExecutions');

export default async function handler(req, res) {
    if (req.method === "GET") {
        const { id } = req.query;
        const result = await getRestaurantById(id);
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ message: "No restaurants found" });
        }
    } else {
        res.status(403).json({ message: "Method not allowed" });
    }
}