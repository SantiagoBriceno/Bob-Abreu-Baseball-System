import { Router } from 'express'
import {
  getHittingStats,
  getHittingStatById,
  createHittingStat,
  updateHittingStat,
  deleteHittingStat,
  createFieldingStat,
  getFieldingStatById,
  getFieldingStats,
  updateFieldingStat,
  getRunningStats,
  createRunningStat,
  getRunningStatById,
  getHittingStatByIdPlayer,
  getFieldingStatByIdPlayer,
  getRunningStatByIdPlayer,
  getThrowingStatByIdPlayer,
  getStatsByIdPlayer

} from '../../../controller/v1/deportivo/estadisticas.controller.js'
import { userExtractor } from '../../../middleware/userExtractor.js'
import { createAuditoria } from '../../../middleware/auditoria.js'

const router = Router()

// AQUI IRAN LAS RUTAS DE LAS 5 DIFERENTES ESTADISTICAS DEPORTIVAS QUE SE TOMAN EN LA ACADEMIA

// RUTAS PARA LAS ESTADISTICAS DE hitting DE LOS ATLETAS
router.get('/hitting', getHittingStats)

router.get('/hitting/:id', getHittingStatById)

router.get('/hitting/player/:id', getHittingStatByIdPlayer)

router.post('/hitting', userExtractor, createHittingStat)

router.patch('/hitting/:id', userExtractor, updateHittingStat)

router.delete('/hitting/:id', userExtractor, deleteHittingStat)

// RUTAS PARA LAS ESTADISTICAS DE fielding DE LOS ATLETAS
router.get('/fielding', getFieldingStats)

router.get('/fielding/:id', getFieldingStatById)

router.get('/fielding/player/:id', getFieldingStatByIdPlayer)

router.post('/fielding', userExtractor, createFieldingStat, createAuditoria)

router.patch('/fielding/:id', userExtractor, updateFieldingStat)

// RUTAS PARA LAS ESTADISTICAS DE running DE LOS ATLETAS
router.get('/running', getRunningStats)
router.get('/running/:id', getRunningStatById)
router.get('/running/player/:id', getRunningStatByIdPlayer)
router.post('/running', userExtractor, createRunningStat)
router.patch('/running/:id', userExtractor, updateFieldingStat)

// RUTAS PARA LAS ESTADISTICAS DE throwing DE LOS ATLETAS
router.get('/throwing', getRunningStats)
router.get('/throwing/:id', getRunningStatById)
router.get('/throwing/player/:id', getThrowingStatByIdPlayer)
router.post('/throwing', userExtractor, createRunningStat)
router.patch('/throwing/:id', userExtractor, updateFieldingStat)

// RUTA PARA OBTENER TODAS LAS STATISTICAS DE UN ATLETA
router.get('/:id', getStatsByIdPlayer)

export default router
