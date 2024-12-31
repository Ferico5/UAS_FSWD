import express from 'express'
import {addRoom, getRoom, getRoomById, updateRoom, deleteRoom} from '../controllers/RoomController.js'

const router = express.Router()

router.post('/add_room', addRoom)
router.get('/rooms', getRoom)
router.get('/rooms/:id_room', getRoomById)
router.put('/update_room/:id_room', updateRoom)
router.delete('/delete_room/:id_room', deleteRoom)

export default router