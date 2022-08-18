const { getRestaurantsReview, addReview } = require('../../lib/DB/DBExecutions');

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
        const { review } = req.body;
        const result = await addReview(review);
        if (result) {
            res.status(201).json({ message: "Review added" });
        } else {
            res.status(404).json({ message: "Review not added" });
        }
    }
}