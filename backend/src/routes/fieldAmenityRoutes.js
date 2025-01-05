/**
 * https://localhost/api/field_amenities
 * @file src/routes/fieldAmenityRoutes.js
 */

import { Router } from 'express';
import { GET, CREATE, UPDATE, DELETE } from '../controllers/fieldAmenityController.js';

const router = Router();

router.get('/', GET);
router.post('/', CREATE);
router.put('/', UPDATE);
router.delete('/', DELETE);

export default router;
