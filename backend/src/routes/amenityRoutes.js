import express from 'express';
import {
    createAmentity,
    updateAmenity,
    deleteAmenity
} from '../controllers/amenityController.js';

const router = express.Router();

router.post('/', createAmentity);
router.put('/:id', updateAmenity);
router.delete('/:id', deleteAmenity);

export default router;
