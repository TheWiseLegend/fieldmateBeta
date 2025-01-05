//  * @api {get} /api/fieldAmenities Get all field amenities
//  * @apiName GetFieldAmenities
//  * @apiGroup FieldAmenity
//  * @apiVersion 1.0.0
//  * @apiDescription Retrieve a list of all field amenities.
//  * @apiSuccess {Object[]} fieldAmenities List of field amenities
//  * @apiSuccess {Number} fieldAmenities.field_id Field ID
//  * @apiSuccess {Number} fieldAmenities.amenity_id Amenity ID
//  * @apiSuccessExample {json} Success-Response:
//  *  HTTP/1.1 200 OK
//  * [
//  *  {
//  *   "field_id": 1,
//  *  "amenity_id": 1
//  * },
//  * {
//  *  "field_id": 1,
//  * "amenity_id": 2
//  * }
//  * ]
//  * @apiError {Object} 500 Error retrieving field amenities
//  * @apiErrorExample {json} Error-Response:
//  * HTTP/1.1 500 Internal Server Error
//  * {
//  * "error": "Error retrieving field amenities"
//  * }
//  * @apiSampleRequest off
//  * @apiPermission all

// /**
//  * @param {string} tableName
//  * @param {string[][]} propArr
//  * @param {{[x: string]: any;}} body
//  * @returns {[string, any[]]}
//  */
// export function selectWithConditions(tableName, propArr, body) {
//   let query = `SELECT * FROM ${tableName}`;
//   const values = [];
//   const conditions = [];

//   for (let i = 0; i < propArr.length; i++) {
//     const props = propArr[i];

//     const bodyValues = props.map((p) => body[p]);
//     if (bodyValues.some((v) => v === undefined)) continue;

//     const condition = [];

//     for (let j = 0; j < props.length; j++) {
//       const p = props[j];
//       const v = bodyValues[j];

//       if (v === null) {
//         condition.push(`${p} IS NULL`);
//       } else {
//         condition.push(`${p} = $${values.length + 1}`);
//         values.push(v);
//       }
//     }

//     if (condition.length === 0) continue;
//     conditions.push(condition.join(' AND '));
//   }

//   if (conditions.length > 0) query += ` WHERE ${conditions.join(' OR ')}`;

//   return [query, values];
// }

// /**
//  * @param {Request} req
//  * @param {Response} res
//  */
// export async function GET(req, res) {
//   /** @type {{ filter: { address: string }, limit: number | undefined }} */ // @ts-expect-error
//   const { filter = {}, limit } = req.query;

//   let query = `
// SELECT
// l.lfg_id,
// l.required_players,
// l.status,
// f.price,
// b.start_datetime,
// b.duration,
// u.name
// FROM
// bookings b
// JOIN
// fields f ON b.field_id = f.field_id
// JOIN
// lfg l ON b.lfg_id = l.lfg_id
// JOIN
// users u ON b.user_id = u.user_id
// WHERE
// l.status = 'open' AND l.required_players > 0
// `;
//   const values = [];

//   if (filter.address) {
//     query += ` AND f.address = $${values.length + 1}`;
//     values.push(filter.address);
//   }

//   if (limit) {
//     query += ` LIMIT $${values.length + 1}`;
//     values.push(limit);
//   }

//   try {
//     const { rows } = await db.query(query, values);
//     res.status(200).json(rows);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// }
