// routes/noteRoutes.js
import express from 'express';
import { createNote, getNotes } from '../controllers/noteController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// All note routes are protected
router.post('/notes', protect, createNote);
router.get('/notes', protect, getNotes);

export default router;
