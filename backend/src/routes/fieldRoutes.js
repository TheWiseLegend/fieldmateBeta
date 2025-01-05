/**
 * https://localhost/api/fields
 * @file src/routes/fieldRoutes.js
 */

import { Router } from 'express';
import { GET, CREATE, UPDATE, DELETE } from '../controllers/fieldController.js';

const router = Router();

router.get('/', GET);
router.get('/:id', GET);
router.post('/', CREATE);
router.put('/:id', UPDATE);
router.delete('/:id', DELETE);

export default router;
