import express, { Router } from 'express'

import {
  getAtletas,
  getAtletaById,
  createAtleta,
  updateAtleta,
  deleteAtleta,
  getAtletasByPosition,
  getAtletasClasifiedByPosition,
  getAtletaByIdReport
} from '../../../controller/v1/administracion/atleta.controller.js'

import { userExtractor } from '../../../middleware/userExtractor.js'
import auth from '../../../middleware/rolVerification.js'

import multer from 'multer'

import { dirname, join, extname } from 'path'
import { fileURLToPath } from 'url'

const CURRENT_DIR = dirname(fileURLToPath(import.meta.url))

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, join(CURRENT_DIR, '../../../storage/atletas'))
  },
  filename: (req, file, cb) => {
    const fileExtension = extname(file.originalname)
    const inputName = req.body.nombre
    const inputCedula = req.body.cedula
    const storageName = `${inputCedula}-${inputName}-${Date.now()}${fileExtension}`
    req.body.foto = storageName
    cb(null, `${inputCedula}-${inputName}-${Date.now()}${fileExtension}`)
  }
})

const multerUpload = multer({
  storage,
  limits: {
    fileSize: 100000000
  }
})

const router = Router()
router.use('/img/public', express.static(join(CURRENT_DIR, '../../../storage/atletas')))
router.get('/', userExtractor, getAtletas)
router.get('/:id', getAtletaById, (req, res) => {
  res.status(200).json({ data: req.data, img: req.foto })
})
router.get('/report/pdf/:id', userExtractor, auth.adminPermission, getAtletaByIdReport)
router.get('/all/position', userExtractor, auth.adminPermission, getAtletasClasifiedByPosition)
router.get('/all/position/:position', userExtractor, getAtletasByPosition)
router.post('/', userExtractor, multerUpload.single('foto'), createAtleta)
router.patch('/:id', userExtractor, auth.adminPermission, updateAtleta)
router.delete('/:id', userExtractor, auth.adminPermission, deleteAtleta)

export default router
