import { Router } from 'express'
import { getRunningCordinates, getRunningPrediction } from '../controller/index.controller.js'

const router = Router()

router.get('/running', getRunningCordinates)

router.get('/running1', getRunningPrediction)

export default router
