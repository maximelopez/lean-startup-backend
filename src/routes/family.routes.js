import { Router } from 'express';
import { createFamily, getFamily, updateFamily, deleteFamily } from '../controllers/family.controller.js';

const router = Router();

router.post('/', createFamily);
router.get('/:id', getFamily);
router.put('/:id', updateFamily);
router.delete('/:id', deleteFamily);

export default router;