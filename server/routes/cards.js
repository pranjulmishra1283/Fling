import express from 'express';

import { postCard, getCards } from '../controllers/cards.js';
import auth from '../middleware/auth.js' 

const router = express.Router();

router.post('/cards', auth, postCard);
router.get('/cards', auth, getCards);

export default router;

