const { getAllRestaurantsRecordsPerPage } = require('../../lib/DB/DBExecutions');

export default async function handler(req, res) {
    if (req.method === "GET") {
        const { page, perPage } = req.query;
        const result = await getAllRestaurantsRecordsPerPage(page, perPage);
        if (result) {
            res.status(200).json(result);
        }
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}