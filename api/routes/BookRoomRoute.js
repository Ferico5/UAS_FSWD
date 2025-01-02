import express from 'express';
import { addBookRoom, getBookRoomByIdUser } from '../controllers/BookRoomController.js';

const router = express.Router();

router.post('/book_hostel', addBookRoom);
router.get('/book_hostel/:id_user', getBookRoomByIdUser);

export default router;