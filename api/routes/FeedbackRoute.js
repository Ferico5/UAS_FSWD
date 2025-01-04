import express from 'express';
import { countFeedback, addFeedback, getFeedback, getFeedbackById } from '../controllers/FeedbackController.js';

const router = express.Router();

router.post('/feedback', addFeedback);
router.get('/feedback', getFeedback)
router.get('/feedback/:id_feedback', getFeedbackById)
router.get('/count_feedback', countFeedback)

export default router;
