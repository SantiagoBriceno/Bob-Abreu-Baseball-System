import { Router } from 'express'
import { getHittingStats, getHittingStatById, createHittingStat, updateHittingStat, deleteHittingStat } from '../../../controller/v1/deportivo/estadisticas.controller.js'
import { userExtractor } from '../../../middleware/userExtractor.js'

const router = Router()

// AQUI IRAN LAS RUTAS DE LAS 5 DIFERENTES ESTADISTICAS DEPORTIVAS QUE SE TOMAN EN LA ACADEMIA

// RUTAS PARA LAS ESTADISTICAS DE hitting DE LOS ATLETAS
router.get('/hitting', getHittingStats)

router.get('/hitting/:id', getHittingStatById)

router.post('/hitting', userExtractor, createHittingStat)

router.patch('/hitting/:id', userExtractor, updateHittingStat)

router.delete('/hitting/:id', userExtractor, deleteHittingStat)

export default router
