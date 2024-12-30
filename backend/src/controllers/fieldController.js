import pool from '../db.js'; // Import pool for database access

// Create a field
export async function createField(req, res) {
    const { field_name, vendor_id, address, capacity, price, status } =
        req.body;
    try {
        const result = await pool.query(
            'INSERT INTO fields (field_name, vendor_id, address, capacity, price, status) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [field_name, vendor_id, address, capacity, price, status]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// Update a field
export async function updateField(req, res) {
    const { id } = req.params;
    const { field_name, vendor_id, address, capacity, price, status } =
        req.body;
    try {
        const result = await pool.query(
            'UPDATE fields SET field_name = $1, vendor_id = $2, address = $3, capacity = $4, price = $5, status = $6 WHERE field_id = $7 RETURNING *',
            [field_name, vendor_id, address, capacity, price, status, id]
        );
        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// Delete a field
export async function deleteField(req, res) {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM fields WHERE field_id = $1', [id]);
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
