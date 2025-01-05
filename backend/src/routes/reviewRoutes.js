import express from 'express';
import { createReview, updateReview, deleteReview, getReviews, getReview } from '../controllers/reviewController.js';

const router = express.Router();

router.post('/', createReview); // Create a review
router.put('/:id', updateReview); // Update a review
router.delete('/:id', deleteReview); // Delete a review
router.get('/', getReviews); // Get all reviews
router.get('/:id', getReview); // Get a specific review

export default router;
