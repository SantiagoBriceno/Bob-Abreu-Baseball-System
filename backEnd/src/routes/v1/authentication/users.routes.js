import { Router } from 'express'
import { createUser, getUsers, deleteUser } from '../../../controller/v1/authentication/users.controller.js'
import { userExtractor } from '../../../middleware/userExtractor.js'

const router = Router()

router.get('/', getUsers)
router.post('/', userExtractor, createUser)
router.delete('/:cedula', userExtractor, deleteUser)

export default router
