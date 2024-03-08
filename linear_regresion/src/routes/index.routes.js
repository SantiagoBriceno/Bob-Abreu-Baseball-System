import { Router } from 'express'
import { getRunningCordinates, getRunningPrediction, getRunningPredictionById } from '../controller/index.controller.js'

const router = Router()

router.get('/running', getRunningCordinates)

router.get('/running1', getRunningPrediction)

router.get('/running/:id', getRunningPredictionById)

export default router
