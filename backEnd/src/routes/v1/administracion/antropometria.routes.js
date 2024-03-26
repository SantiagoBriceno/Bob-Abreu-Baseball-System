/* eslint-disable no-unused-vars */
import { Router } from 'express'

import { userExtractor } from '../../../middleware/userExtractor.js'

import {
  createFichaAntropometrica,
  getAllFichasAntropometricas,
  deleteFichaAntropometrica,
  getDatosGenerales,
  getDatosGeneralesById,
  getGeneralDataOfFicha,
  getDatosGeneralesByIdAtleta,
  getDatosGeneralesByIdFicha,
  getFichaAntropometricaById,
  getICC,
  getICCById,
  getICCByIdAtleta,
  getICCByIdFicha,
  getIMC,
  getIMCById,
  getIMCByIdAtleta,
  getIMCByIdFicha,
  getPerimetros,
  getPerimetrosById,
  getPerimetrosByIdAtleta,
  getPerimetrosByIdFicha,
  getAllDataOfFichaById
} from '../../../controller/v1/administracion/antropometria.controller.js'

const router = Router()

router.get('/ficha', getAllFichasAntropometricas)
router.get('/g/ficha', getGeneralDataOfFicha)
router.get('/g/ficha/:id', getAllDataOfFichaById)
router.get('/ficha/:id', userExtractor, getFichaAntropometricaById)
router.post('/ficha', userExtractor, createFichaAntropometrica)
router.delete('/ficha/:id', userExtractor, deleteFichaAntropometrica)

router.get('/general', userExtractor, getDatosGenerales)
router.get('/general/:id', userExtractor, getDatosGeneralesById)

export default router
