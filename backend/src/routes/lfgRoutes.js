import express from 'express';
import { getLFG, createLFG, updateLFG, deleteLFG } from '../controllers/lfgController.js';

const router = express.Router();

router.get('/', getLFG);
router.post('/', createLFG);
router.put('/:id', updateLFG);
router.delete('/:id', deleteLFG);

export default router;
