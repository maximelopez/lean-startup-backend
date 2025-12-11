import { Router } from 'express';
import { createUser, loginUser, getProfile, updateProfile, deleteProfile, updateScore } from '../controllers/user.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';

const router = Router();

// Authentification
router.post('/login', loginUser);
router.post('/signup', createUser);

// Profil
router.get('/profile/:id', authMiddleware, getProfile);
router.put('/profile/:id', authMiddleware, updateProfile);
router.delete('/profile/:id', authMiddleware, deleteProfile);

// Score
router.put('/:id/score', updateScore);

export default router;