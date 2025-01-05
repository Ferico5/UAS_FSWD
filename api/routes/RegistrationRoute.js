import express from 'express'
import {countUser, getUser, getUserById, createUser} from '../controllers/RegistrationController.js'
import { getUserLogin } from '../controllers/LoginController.js'
import { updateAdmin, updateUser, verifyPassword } from '../controllers/UpdateController.js'

const router = express.Router()

router.get('/users', getUser)
router.get('/count_users', countUser)
router.get('/users/:id_user', getUserById)
router.post('/users', createUser)
router.put('/users/:id_user', updateUser)
router.put('/admin/:id_user', updateAdmin)
router.post('/login', getUserLogin)
router.post('/users/verify-password', verifyPassword)

export default router