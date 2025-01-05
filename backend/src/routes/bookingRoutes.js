import express from 'express';
import { createBooking, updateBooking, deleteBooking } from '../controllers/bookingController.js';

const router = express.Router();

router.post('/', createBooking);
router.put('/:id', updateBooking);
router.delete('/:id', deleteBooking);

export default router;
