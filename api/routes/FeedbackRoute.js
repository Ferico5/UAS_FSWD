import express from 'express';
import { addFeedback, getFeedback, getFeedbackById } from '../controllers/FeedbackController.js';

const router = express.Router();

router.post('/feedback', addFeedback);
router.get('/feedback', getFeedback)
router.get('/feedback/:id_feedback', getFeedbackById)

export default router;
