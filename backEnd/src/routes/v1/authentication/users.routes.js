import { Router } from 'express'
import { createUser, getUsers } from '../../../controller/v1/authentication/users.controller.js'

const router = Router()

router.get('/', getUsers)
router.post('/', createUser)

export default router
