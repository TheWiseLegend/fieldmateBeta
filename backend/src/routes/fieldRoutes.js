import express from 'express';
import {
    createField,
    updateField,
    deleteField
} from '../controllers/fieldController.js';

const router = express.Router();

router.post('/', createField);
router.post('/', updateField);
router.delete('/:id', deleteField);

export default router;
