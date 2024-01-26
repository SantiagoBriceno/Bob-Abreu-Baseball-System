import { Router } from 'express'
import { test } from '../../controller/v1/test.controller.js'
import { userExtractor } from '../../middleware/userExtractor.js'
import { adminVerification } from '../../middleware/rolVerification.js'

const router = Router()

router.get('/', userExtractor, adminVerification, test)

export default router
