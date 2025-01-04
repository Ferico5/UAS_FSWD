import express from 'express';
import { countComplaint, countNewComplaint, countInProcessComplaint, countClosedComplaint, addRegisterComplaint, getRegisterComplaint, getUnprocessedRegisterComplaint, getInProcessRegisterComplaint, getClosedRegisterComplaint, getRegisterComplaintByIdUser, getDetailComplaintByIdComplaint, updateComplaintStatusByIdComplaint } from '../controllers/RegisterComplaintController.js';

const router = express.Router();

router.post('/register_complaint', addRegisterComplaint);
router.get('/register_complaint', getRegisterComplaint)
router.get('/register_complaint/unprocessed', getUnprocessedRegisterComplaint)
router.get('/register_complaint/in_process', getInProcessRegisterComplaint)
router.get('/register_complaint/closed', getClosedRegisterComplaint)
router.get('/register_complaint/:id_user', getRegisterComplaintByIdUser);
router.get('/complaint_detail/:register_complaint_id', getDetailComplaintByIdComplaint)
router.get('/count_complaint', countComplaint)
router.get('/count_new_complaint', countNewComplaint)
router.get('/count_in_process_complaint', countInProcessComplaint)
router.get('/count_closed_complaint', countClosedComplaint)
router.put('/update_complaint_status/:register_complaint_id', updateComplaintStatusByIdComplaint)

export default router;
