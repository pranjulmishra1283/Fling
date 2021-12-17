import express from 'express';

import { post, get } from '../controllers/cards.js';
import auth from '../middleware/auth.js' 

const router = express.Router();

router.post('/cards', auth, post);
router.get('/cards', auth, get);

export default router;

