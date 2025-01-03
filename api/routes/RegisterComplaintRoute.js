import express from 'express';
import { addRegisterComplaint, getRegisterComplaint, getUnprocessedRegisterComplaint, getInProcessRegisterComplaint, getClosedRegisterComplaint, getRegisterComplaintByIdUser } from '../controllers/RegisterComplaintController.js';

const router = express.Router();

router.post('/register_complaint', addRegisterComplaint);
router.get('/register_complaint', getRegisterComplaint)
router.get('/register_complaint/unprocessed', getUnprocessedRegisterComplaint)
router.get('/register_complaint/in_process', getInProcessRegisterComplaint)
router.get('/register_complaint/closed', getClosedRegisterComplaint)
router.get('/register_complaint/:id_user', getRegisterComplaintByIdUser);

export default router;
