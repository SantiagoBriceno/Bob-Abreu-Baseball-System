import { Router } from 'express'
import {
  getStatsByIdPlayer
} from '../../../controller/v1/deportivo/estadisticas.controller.js'

import { createThrowingStat, deleteThrowingStat, getThrowingStatById, getThrowingStatByIdPlayer, getThrowingStats, updateThrowingStat, getFirstBaseStatByClass, getSecondBaseStatByClass, getThirdBaseStatByClass } from '../../../controller/v1/deportivo/estadisticas/throwing.controller.js'

import { createHittingStat, deleteHittingStat, getHittingStatById, getHittingStatByIdPlayer, getHittingStats, updateHittingStat, getArrayOfDaysHitting, graphDataHitting, getArrayOfDaysHittingById } from '../../../controller/v1/deportivo/estadisticas/hitting.controller.js'

import { createRunningStat, getArrayOfDate, graphData, getArrayOfDaysById, getArrayOfDays, getArrayOfDateById, deleteRunningStat, getRunningStatById, getRunningStatByIdPlayer, getRunningStats, getSixtyYardStatByClass, updateRunningStat } from '../../../controller/v1/deportivo/estadisticas/running.controller.js'

import { createFieldingStat, deleteFieldingStat, getFieldingStatById, getFieldingStatByIdPlayer, getFieldingStats, updateFieldingStat } from '../../../controller/v1/deportivo/estadisticas/fielding.controller.js'

import { getMakeUpStats, getMakeUpStatByIdPlayer, createMakeUpStat, updateMakeUpStat, deleteMakeUpStat } from '../../../controller/v1/deportivo/estadisticas/makeup.controller.js'

// import { createPitchingStat, deletePitchingStat, getPitchingStatById, getPitchingStatByIdPlayer, getPitchingStats, updatePitchingStat } from '../../../controller/v1/deportivo/estadisticas/pitching.controller.js'

import { userExtractor } from '../../../middleware/userExtractor.js'
import { createAuditoria } from '../../../middleware/auditoria.js'

const router = Router()

// AQUI IRAN LAS RUTAS DE LAS 5 DIFERENTES ESTADISTICAS DEPORTIVAS QUE SE TOMAN EN LA ACADEMIA

// RUTAS PARA LAS ESTADISTICAS DE hitting DE LOS ATLETAS
router.get('/hitting', userExtractor, getHittingStats)
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
router.delete('/fielding/:id', userExtractor, deleteFieldingStat)

// RUTAS PARA LAS ESTADISTICAS DE running DE LOS ATLETAS
router.get('/running', getRunningStats)
router.get('/running/:id', getRunningStatById)
router.get('/running/player/:id', getRunningStatByIdPlayer)
router.post('/running', userExtractor, createRunningStat)
router.patch('/running/:id', userExtractor, updateRunningStat)
router.delete('/running/:id', userExtractor, deleteRunningStat)

// RUTAS PARA LAS ESTADISTICAS DE throwing DE LOS ATLETAS
router.get('/throwing', getThrowingStats)
router.get('/throwing/:id', getThrowingStatById)
router.get('/throwing/player/:id', getThrowingStatByIdPlayer)
router.post('/throwing', userExtractor, createThrowingStat)
router.patch('/throwing/:id', userExtractor, updateThrowingStat)
router.delete('/throwing/:id', userExtractor, deleteThrowingStat)

// RUTAS PARA LAS ESTADISTICAS DE makeUp DE LOS ATLETAS
router.get('/makeup', getMakeUpStats)
router.get('/makeup/player/:id', getMakeUpStatByIdPlayer)
router.post('/makeup', userExtractor, createMakeUpStat)
router.patch('/makeup/:id', userExtractor, updateMakeUpStat)
router.delete('/makeup/:id', userExtractor, deleteMakeUpStat)

// RUTA PARA OBTENER TODAS LAS STATISTICAS DE UN ATLETA
router.get('/player/:id', getStatsByIdPlayer)
router.get('/running/g/promedio', getSixtyYardStatByClass)
router.get('/throwing/g/primera', getFirstBaseStatByClass)
router.get('/throwing/g/segunda', getSecondBaseStatByClass)
router.get('/throwing/g/tercera', getThirdBaseStatByClass)

// RUTAS PARA LAS ESTADISTICAS DE RUNNING PARA LA GRAFICA Y ML DE LOS ATLETAS

router.get('/running/t/data', getArrayOfDays)
router.get('/running/t/data/:id', getArrayOfDaysById)
router.get('/running/g/graph', graphData)

// RUTAS PARA LAS ESTADISTICAS DE HITTING PARA LA GRAFICA Y ML DE LOS ATLETAS

router.get('/hitting/t/data', getArrayOfDaysHitting)
router.get('/hitting/t/data/:id', getArrayOfDaysHittingById)
router.get('/hitting/g/graph', graphDataHitting)

export default router
