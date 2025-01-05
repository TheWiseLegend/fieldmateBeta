import pool from '../db.js'; // Import pool for database access

// Create an amenity
export async function createAmentity(req, res) {
  const { amenity_name } = req.body;
  try {
    const result = await pool.query('INSERT INTO amenities (amenity_name) VALUES ($1) RETURNING *', [amenity_name]);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Update an amenity
export async function updateAmenity(req, res) {
  const { id } = req.params;
  const { amenity_name } = req.body;
  try {
    const result = await pool.query('UPDATE amenities SET amenity_name = $1 WHERE amenity_id = $2 RETURNING *', [
      amenity_name,
      id
    ]);
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Delete an amenity
export async function deleteAmenity(req, res) {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM amenities WHERE amenity_id = $1', [id]);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
