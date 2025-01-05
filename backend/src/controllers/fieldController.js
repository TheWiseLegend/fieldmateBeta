/**
 * @file src/controllers/fieldController.js
 */

/** @import { Request, Response } from 'express' */
import db from '../db.js';

const TABLE_NAME = 'fields';

/**
 * @param {Request} req
 * @param {Response} res
 */
export async function GET(req, res) {
  const { id } = req.params;
  const { limit } = req.query;

  let query = `SELECT * FROM ${TABLE_NAME}`;
  const values = [];

  if (id) {
    query += ` WHERE field_id = $${values.length + 1}`;
    values.push(id);
  }

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
  const { vendor_id, field_name, address, capacity, price, status, maps_id } = req.body;

  /** @type {string[] | string} */
  let pNames = ['field_name', 'address'];
  if (vendor_id !== undefined) pNames.push('vendor_id');
  if (capacity !== undefined) pNames.push('capacity');
  if (price !== undefined) pNames.push('price');
  if (status !== undefined) pNames.push('status');
  if (maps_id !== undefined) pNames.push('maps_id');

  const values = pNames.map((pName) => req.body[pName]);
  pNames = pNames.join(', ');
  const pNums = Array.from({ length: values.length }, (_, i) => `$${i + 1}`).join(', ');

  const query = `INSERT INTO ${TABLE_NAME} (${pNames}) VALUES (${pNums}) RETURNING *`;

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
  const { id } = req.params;

  const pairs = Object.entries(req.body).filter(([_, val]) => val !== undefined);
  const toUpdate = pairs.map(([key], i) => `${key} = $${i + 1}`).join(', ');
  const values = pairs.map(([_, val]) => val);

  const query = `UPDATE ${TABLE_NAME} SET ${toUpdate} WHERE field_id = $${toUpdate.length + 1} RETURNING *`;
  values.push(id);

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
  const { id } = req.params;

  const query = `DELETE FROM ${TABLE_NAME} WHERE field_id = $1 RETURNING *`;
  const values = [id];

  try {
    const { rows } = await db.query(query, values);
    res.status(204).send(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
