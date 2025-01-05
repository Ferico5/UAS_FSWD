import express from 'express';
import { addRemarkComplaintByIdComplaint, getRemarkComplaintByIdComplaint, updateRemarkComplaintByIdComplaint } from '../controllers/ComplaintActionController.js';

const router = express.Router();

router.post('/remark_complaint/:register_complaint_id', addRemarkComplaintByIdComplaint);
router.get('/remark_complaint/:register_complaint_id', getRemarkComplaintByIdComplaint);
router.put('/remark_complaint/:register_complaint_id', updateRemarkComplaintByIdComplaint);

export default router;
