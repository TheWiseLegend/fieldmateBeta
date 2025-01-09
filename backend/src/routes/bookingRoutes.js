/**
 * https://localhost/api/bookings
 * @file src/routes/bookingRoutes.js
 */

import { Router } from 'express';
import { GET, CREATE, UPDATE, DELETE } from '../controllers/bookingController.js';

const router = Router();

router.get('/', GET);
router.get('/:id', GET);
router.post('/', CREATE);
router.put('/:id', UPDATE);
router.delete('/:id', DELETE);

export default router;
