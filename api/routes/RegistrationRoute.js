import express from 'express'
import {getUserById, createUser} from '../controllers/RegistrationController.js'
import { getUserLogin } from '../controllers/LoginController.js'
import { updateUser } from '../controllers/UpdateController.js'

const router = express.Router()

// router.get('/users', getUsers)
router.get('/users/:id_user', getUserById)
router.post('/users', createUser)
router.put('/users/:id_user', updateUser)
router.post('/login', getUserLogin)

export default router