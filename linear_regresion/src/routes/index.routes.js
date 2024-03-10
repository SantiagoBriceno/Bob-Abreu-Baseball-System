import { Router } from 'express'
import { getRunningPredictionById, getHittingPredictionById } from '../controller/index.controller.js'

const router = Router()

router.get('/running/:id', getRunningPredictionById)

router.get('/hitting/:id', getHittingPredictionById)

export default router
