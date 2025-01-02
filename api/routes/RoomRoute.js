import express from 'express'
import {addRoom, getRoom, getRoomByRoomNo, updateRoom, deleteRoom} from '../controllers/RoomController.js'

const router = express.Router()

router.post('/add_room', addRoom)
router.get('/rooms', getRoom)
router.get('/rooms/:room_no', getRoomByRoomNo)
router.put('/update_room/:room_no', updateRoom)
router.delete('/delete_room/:room_no', deleteRoom)

export default router