import { Router } from 'express'
import { getRunningPredictionById, getHittingPredictionById } from '../controller/index.controller.js'

const router = Router()

router.get('/running', getRunningPredictionById)

router.get('/hitting', getHittingPredictionById)

export default router
