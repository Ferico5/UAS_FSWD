import express from 'express';
import { addPersonalInfo, getPersonalInfoByIdUser } from '../controllers/PersonalInfoController.js';

const router = express.Router();

router.post('/personal_info', addPersonalInfo);
router.get('/personal_info/:id_user', getPersonalInfoByIdUser)

export default router;
