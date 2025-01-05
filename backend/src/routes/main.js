// Create a field amenity
app.post('/api/field_amenities', async (req, res) => {
  const { field_id, amenity_id } = req.body;
  try {
    const result = await pool.query('INSERT INTO field_amenities (field_id, amenity_id) VALUES ($1, $2) RETURNING *', [
      field_id,
      amenity_id
    ]);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a field amenity
app.delete('/api/field_amenities', async (req, res) => {
  const { field_id, amenity_id } = req.body;
  try {
    await pool.query('DELETE FROM field_amenities WHERE field_id = $1 AND amenity_id = $2', [field_id, amenity_id]);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//

// Create a booking
app.post('/api/bookings', async (req, res) => {
  const {
    user_id,
    field_id,
    vendor_id,
    booking_date,
    start_time,
    duration,
    lfg_enabled,
    max_players,
    current_players,
    status
  } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO bookings (user_id, field_id, vendor_id, booking_date, start_time, duration, lfg_enabled, max_players, current_players, status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *',
      [
        user_id,
        field_id,
        vendor_id,
        booking_date,
        start_time,
        duration,
        lfg_enabled,
        max_players,
        current_players,
        status
      ]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a booking
app.put('/api/bookings/:id', async (req, res) => {
  const { id } = req.params;
  const {
    user_id,
    field_id,
    vendor_id,
    booking_date,
    start_time,
    duration,
    lfg_enabled,
    max_players,
    current_players,
    status
  } = req.body;
  try {
    const result = await pool.query(
      'UPDATE bookings SET user_id = $1, field_id = $2, vendor_id = $3, booking_date = $4, start_time = $5, duration = $6, lfg_enabled = $7, max_players = $8, current_players = $9, status = $10 WHERE booking_id = $11 RETURNING *',
      [
        user_id,
        field_id,
        vendor_id,
        booking_date,
        start_time,
        duration,
        lfg_enabled,
        max_players,
        current_players,
        status,
        id
      ]
    );
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a booking
app.delete('/api/bookings/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM bookings WHERE booking_id = $1', [id]);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//

//

/*
// Create a notification
app.post("/api/notifications", async (req, res) => {
  const { user_id, message } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO notifications (user_id, message) VALUES ($1, $2) RETURNING *",
      [user_id, message]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a notification
app.put("/api/notifications/:id", async (req, res) => {
  const { id } = req.params;
  const { user_id, message } = req.body;
  try {
    const result = await pool.query(
      "UPDATE notifications SET user_id = $1, message = $2 WHERE notification_id = $3 RETURNING *",
      [user_id, message, id]
    );
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a notification
app.delete("/api/notifications/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query("DELETE FROM notifications WHERE notification_id = $1", [id]);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
*/

export default app;
