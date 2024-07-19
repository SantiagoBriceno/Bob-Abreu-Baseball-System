import { Router } from 'express'

import { loginUser } from '../../../controller/v1/authentication/login.controller.js'

const router = Router()

router.post('/', loginUser)

export default router
