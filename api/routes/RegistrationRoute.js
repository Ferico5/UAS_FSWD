import express from 'express'
import {createUser} from '../controllers/RegistrationController.js'
import { getUserLogin } from '../controllers/LoginController.js'

const router = express.Router()

// router.get('/users', getUsers)
// router.get('/users/:id', getUserById)
router.post('/users', createUser)
router.post('/login', getUserLogin)

export default router