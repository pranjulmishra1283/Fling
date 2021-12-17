import express from 'express';

import { post, get } from '../controllers/cards.js';
import auth from '../middleware/auth.js' 

const router = express.Router();

router.post('/cards', post);
router.get('/cards', get);

export default router;

