/**
 * https://localhost/api/users
 * @file src/routes/userRoutes.js
 */

import { Router } from 'express';
import { GET, CREATE, UPDATE, DELETE } from '../controllers/userController.js';

const router = Router();

<<<<<<< Updated upstream
router.get('/', GET);
router.get('/:id', GET);
router.post('/', CREATE);
router.put('/:id', UPDATE);
router.delete('/:id', DELETE);

export default router;
=======
router.get('/', getUser);  // get user info
router.post('/', createUser);  // Create user
router.post('/login', getUser);  // Create user
router.post('/register', createUser);  // Create user
router.put('/:id', updateUser);  // Update user
router.delete('/:id', deleteUser);  // Delete user

export default router;

// https://localhost/api/users
>>>>>>> Stashed changes
