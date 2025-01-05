/**
 * @file src/controllers/fieldAmenityController.js
 */

/** @import { Request, Response } from 'express' */
import db from '../db.js';

const TABLE_NAME = 'field_amenities';

/**
 * @param {Request} req
 * @param {Response} res
 */
export async function GET(req, res) {
  const { limit } = req.query;

  let query = `SELECT * FROM ${TABLE_NAME}`;
  const values = [];

  if (limit) {
    query += ` LIMIT $${values.length + 1}`;
    values.push(limit);
  }

  try {
    const { rows } = await db.query(query, values);
    res.status(200).json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

/**
 * @param {Request} req
 * @param {Response} res
 */
export async function CREATE(req, res) {
  const { field_id, amenity_id } = req.body;

  const query = `INSERT INTO ${TABLE_NAME} (field_id, amenity_id) VALUES ($1, $2) RETURNING *`;
  const values = [field_id, amenity_id];

  try {
    const { rows } = await db.query(query, values);
    res.status(201).json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

/**
 * @param {Request} req
 * @param {Response} res
 */
export async function UPDATE(req, res) {
  const { old_data, new_data } = req.body;

  const { field_id: old_field_id, amenity_id: old_amenity_id } = old_data;
  const { field_id: new_field_id, amenity_id: new_amenity_id } = new_data;

  const query = `UPDATE ${TABLE_NAME} SET field_id = $1, amenity_id = $2 WHERE field_id = $3 AND amenity_id = $4 RETURNING *`;
  const values = [old_field_id, old_amenity_id, new_field_id, new_amenity_id];

  try {
    const { rows } = await db.query(query, values);
    res.status(200).json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

/**
 * @param {Request} req
 * @param {Response} res
 */
export async function DELETE(req, res) {
  const { field_id, amenity_id } = req.body;

  const query = `DELETE FROM ${TABLE_NAME} WHERE field_id = $1 AND amenity_id = $2 RETURNING *`;
  const values = [field_id, amenity_id];

  try {
    const { rows } = await db.query(query, values);
    res.status(204).send(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
