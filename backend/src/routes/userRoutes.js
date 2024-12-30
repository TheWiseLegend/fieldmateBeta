// /src/routes/userRoutes.js
import express from 'express';
import { createUser, updateUser, deleteUser, getUser } from '../controllers/userController.js';


const router = express.Router();

router.get('/', getUser);  // get user info
router.post('/', createUser);  // Create user
router.put('/:id', updateUser);  // Update user
router.delete('/:id', deleteUser);  // Delete user

export default router;

// https://localhost/api/users