/**
 * https://localhost/api/lfgs
 * @file src/routes/lfgRoutes.js
 */

import { Router } from 'express';
import { GET, CREATE, UPDATE, DELETE } from '../controllers/lfgController.js';

const router = Router();

router.get('/', GET);
router.get('/:id', GET);
router.post('/', CREATE);
router.put('/:id', UPDATE);
router.delete('/:id', DELETE);

export default router;
