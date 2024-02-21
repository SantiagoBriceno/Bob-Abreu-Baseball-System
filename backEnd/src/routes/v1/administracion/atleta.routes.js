import { Router } from 'express'

import {
  getAtletas,
  getAtletaById,
  createAtleta,
  updateAtleta,
  deleteAtleta,
  getAtletasByPosition,
  getAtletasClasifiedByPosition
} from '../../../controller/v1/administracion/atleta.controller.js'

import { userExtractor } from '../../../middleware/userExtractor.js'
import auth from '../../../middleware/rolVerification.js'

import multer from 'multer'

import { dirname, join, extname } from 'path'
import { fileURLToPath } from 'url'

const CURRENT_DIR = dirname(fileURLToPath(import.meta.url))
const MIMETYPES = ['image/jpeg', 'image/png', 'image/jpg']

const multerUpload = multer({
  storage: multer.diskStorage({
    destination: join(CURRENT_DIR, '../../../storage/atletas'),
    filename: (req, file, cb) => {
      const fileExtension = extname(file.originalname)
      const inputName = req.body.nombre
      const inputCedula = req.body.cedula
      console.log('inputName', inputName)
      const storageName = `${inputCedula}-${inputName}-${Date.now()}${fileExtension}`
      req.body.foto = storageName
      cb(null, `${inputCedula}-${inputName}-${Date.now()}${fileExtension}`)
    }
  }),
  fileFilter: (req, file, cb) => {
    if (MIMETYPES.includes(file.mimetype)) cb(null, true)
    else cb(new Error(`Only ${MIMETYPES.join(', ')} files are allowed`))
  },
  limits: {
    fieldSize: 10000000
  }
})

const router = Router()

router.get('/', userExtractor, auth.adminPermission, getAtletas)
router.get('/:id', userExtractor, auth.adminPermission, getAtletaById)
router.get('/all/position', userExtractor, auth.adminPermission, getAtletasClasifiedByPosition)
router.get('/all/position/:position', userExtractor, auth.adminPermission, getAtletasByPosition)
router.post('/', userExtractor, auth.adminPermission, createAtleta)
router.post('/foto', userExtractor, auth.adminPermission, multerUpload.single('foto'))
router.patch('/:id', userExtractor, auth.adminPermission, updateAtleta)
router.delete('/:id', userExtractor, auth.adminPermission, deleteAtleta)

export default router
