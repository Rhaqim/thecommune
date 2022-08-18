const { getRestaurants, creatNewRestaurant } = require('../../lib/DB/DBExecutions');

export default async function handler(req, res) {
    if (req.method === "GET") {
        const result = await getRestaurants();
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ message: "No restaurants found" });
        }
    } else if (req.method === "POST") {
        const { review } = req.body;
        const result = await creatNewRestaurant(review);
        if (result) {
            res.status(201).json({ message: "Restaurant added" });
        } else {
            res.status(404).json({ message: "Restaurant not added" });
        }
    }
}