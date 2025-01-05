import db from '../db.js'; // Import pool for database access

// Get matches
export async function getLFG(req, res) {
  /** @type {{ filter: { address: string }, limit: number | undefined }}  */
  const { filter = {}, limit } = req.query;

  const queryParams = [];
  let query = `
SELECT 
l.lfg_id,
l.required_players,
l.status,
f.price,
b.start_datetime,
b.duration,
u.name
FROM 
Bookings b
JOIN 
Fields f ON b.field_id = f.field_id
JOIN 
LFG l ON b.lfg_id = l.lfg_id
JOIN 
Users u ON b.user_id = u.user_id
WHERE 
l.status = 'open'
AND l.required_players > 0
`;

  if (filter.address) {
    query += ` AND f.address = $1`;
    queryParams.push(filter.address);
  }

  if (limit) {
    query += ` LIMIT $${limit}`;
    queryParams.push(limit);
  }

  try {
    const result = await db.query(query, queryParams);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Create an LFG
export async function createLFG(req, res) {
  const { booking_id, required_players, status } = req.body;
  try {
    const result = await db.query(
      'INSERT INTO lfg (booking_id, required_players, status) VALUES ($1, $2, $3) RETURNING *',
      [booking_id, required_players, status]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Update an LFG
export async function updateLFG(req, res) {
  const { id } = req.params;
  const { booking_id, required_players, status } = req.body;
  try {
    const result = await db.query(
      'UPDATE lfg SET booking_id = $1, required_players = $2, status = $3 WHERE lfg_id = $4 RETURNING *',
      [booking_id, required_players, status, id]
    );
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Delete an LFG
export async function deleteLFG(req, res) {
  const { id } = req.params;
  try {
    await db.query('DELETE FROM lfg WHERE lfg_id = $1', [id]);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
