import { Router } from 'express'
import { test } from '../../../controller/v1/authentication/test.controller.js'
import { userExtractor } from '../../../middleware/userExtractor.js'
import auth from '../../../middleware/rolVerification.js'

const router = Router()

router.get('/', userExtractor, auth.administrativoVerification, test)

export default router
