import pool from '../db.js'; // Import pool for database access

// Create a booking
export async function createBooking(req, res) {
  const { user_id, field_id, start_datetime, duration, current_players, status } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO bookings (user_id, field_id, start_datetime, duration, current_players, status) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [user_id, field_id, start_datetime, duration, current_players, status]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Update a booking
export async function updateBooking(req, res) {
  const { id } = req.params;
  const { user_id, field_id, start_datetime, duration, current_players, status } = req.body;
  try {
    const result = await pool.query(
      'UPDATE bookings SET user_id = $1, field_id = $2, start_datetime = $3, duration = $4, current_players = $5, status = $6 WHERE booking_id = $7 RETURNING *',
      [user_id, field_id, start_datetime, duration, current_players, status, id]
    );
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Delete a booking
export async function deleteBooking(req, res) {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM bookings WHERE booking_id = $1', [id]);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
