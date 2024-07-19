import { Router } from 'express'
import { getDataAtletas } from '../../controller/v1/dashboard.controller.js'

const router = Router()

router.get('/', getDataAtletas)

export default router
