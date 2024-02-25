import { Router } from 'express'
import { createUser, getUsers } from '../../../controller/v1/authentication/users.controller.js'
import { userExtractor } from '../../../middleware/userExtractor.js'

const router = Router()

router.get('/', getUsers)
router.post('/', userExtractor, createUser)

export default router
