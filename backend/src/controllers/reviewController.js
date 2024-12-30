import pool from '../db.js'; // Import pool for database access

// Create a review
export async function createReview(req, res) {
    const { rating, user_id, field_id, review_text } = req.body;
    try {
        const result = await pool.query(
            "INSERT INTO reviews (rating, user_id, field_id, review_text) VALUES ($1, $2, $3, $4) RETURNING *",
            [rating, user_id, field_id, review_text]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// Update a review
export async function updateReview(req, res) {
    const { id } = req.params;
    const { rating, review_text } = req.body;
    try {
        const result = await pool.query(
            "UPDATE reviews SET rating = $1, review_text = $2 WHERE review_id = $3 RETURNING *",
            [rating, review_text, id]
        );
        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// Delete a review
export async function deleteReview(req, res) {
    const { id } = req.params;
    try {
        await pool.query("DELETE FROM reviews WHERE review_id = $1", [id]);
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// Get all reviews
export async function getReviews(req, res) {
    try {
        const result = await pool.query("SELECT * FROM reviews");
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// Get a specific review
export async function getReview(req, res) {
    const { id } = req.params;
    try {
        const result = await pool.query("SELECT * FROM reviews WHERE review_id = $1", [id]);
        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
