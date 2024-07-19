/* eslint-disable no-unused-vars */
import express, { Router } from 'express'

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

import multer from 'multer'
import { dirname, join, extname } from 'path'
import { fileURLToPath } from 'url'

const CURRENT_DIR = dirname(fileURLToPath(import.meta.url))

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, join(CURRENT_DIR, '../../../storage/atletas/fichas'))
  },
  filename: (req, file, cb) => {
    const fileExtension = extname(file.originalname)
    const fieldName = file.fieldname
    const inputCedula = req.body.cedula
    const storageName = `${inputCedula}-${fieldName}-${Date.now()}${fileExtension}`
    req.body[fieldName] = storageName
    cb(null, `${inputCedula}-${fieldName}-${Date.now()}${fileExtension}`)
  }
})

const multerUpload = multer({
  storage,
  limits: {
    fileSize: 100000000
  }
})

const router = Router()
router.use('/img/public', express.static(join(CURRENT_DIR, '../../../storage/atletas/fichas')))
router.get('/ficha', getAllFichasAntropometricas)
router.get('/g/ficha', getGeneralDataOfFicha)
router.get('/g/ficha/:id', getAllDataOfFichaById)
router.get('/ficha/:id', userExtractor, getFichaAntropometricaById)
router.post('/ficha', userExtractor, multerUpload.fields([{
  name: 'frente', maxCount: 1
},
{
  name: 'perfil', maxCount: 1
},
{
  name: 'posterior', maxCount: 1
}]
), createFichaAntropometrica)
router.delete('/ficha/:id', userExtractor, deleteFichaAntropometrica)

router.get('/general', userExtractor, getDatosGenerales)
router.get('/general/:id', userExtractor, getDatosGeneralesById)

export default router
