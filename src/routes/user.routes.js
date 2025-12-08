import { Router } from 'express';
import { createUser, loginUser, getProfile } from '../controllers/user.controller.js';

const router = Router();

// Auth
router.post('/login', loginUser);
router.post('/signup', createUser);

// Profil
router.get('/profile/:id', getProfile);

export default router;