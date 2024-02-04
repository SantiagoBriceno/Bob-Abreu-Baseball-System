import { Router } from 'express'
import { getHittingStats, getHittingStatById, createHittingStat, updateHittingStat, deleteHittingStat } from '../../../controllers/deportivo/estadisticas.controller.js'

const router = Router()

// AQUI IRAN LAS RUTAS DE LAS 5 DIFERENTES ESTADISTICAS DEPORTIVAS QUE SE TOMAN EN LA ACADEMIA

// RUTAS PARA LAS ESTADISTICAS DE hitting DE LOS ATLETAS
router.get('/hitting', getHittingStats)

router.get('/hitting/:id', getHittingStatById)

router.post('/hitting', createHittingStat)

router.patch('/hitting/:id', updateHittingStat)

router.delete('/hitting/:id', deleteHittingStat)

export default router
