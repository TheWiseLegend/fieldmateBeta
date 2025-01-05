// /src/controllers/userController.js
import db from '../db.js'; // Import pool for database access

export async function getUser(req, res) {
  const { email, password } = req.body;

  try {
    let result;
    if (email && password) {
      // Query for a specific user
      result = await db.query('SELECT * FROM users WHERE email = $1 AND password = $2', [email, password]);
    } else {
      // Query for all users
      result = await db.query('SELECT * FROM users');
    }
    res.status(200).json(result.rows); // Return the users
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function createUser(req, res) {
  const { name, email, password, phone, user_role } = req.body;

  try {
    const result = await db.query(
      'INSERT INTO users (name, email, password, phone, user_role) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [name, email, password, phone, user_role]
    );
    res.status(201).json(result.rows[0]); // Return the created user
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function updateUser(req, res) {
  const { id } = req.params;
  const { name, email, password, phone, user_role } = req.body;

  try {
    const result = await db.query(
      'UPDATE users SET name = $1, email = $2, password = $3, phone = $4, user_role = $5 WHERE user_id = $6 RETURNING *',
      [name, email, password, phone, user_role, id]
    );
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function deleteUser(req, res) {
  const { id } = req.params;

  try {
    await db.query('DELETE FROM users WHERE user_id = $1', [id]);
    res.status(204).send(); // Send a 204 status for successful deletion
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
