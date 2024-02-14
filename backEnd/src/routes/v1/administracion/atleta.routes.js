import { Router } from 'express'

import {
  getAtletas,
  getAtletaById,
  createAtleta,
  updateAtleta,
  deleteAtleta,
  getAtletasByPosition
} from '../../../controller/v1/administracion/atleta.controller.js'

import { userExtractor } from '../../../middleware/userExtractor.js'
import auth from '../../../middleware/rolVerification.js'

const router = Router()

router.get('/', userExtractor, auth.adminPermission, getAtletas)
router.get('/:id', userExtractor, auth.adminPermission, getAtletaById)
router.get('/all/position', userExtractor, auth.adminPermission, getAtletasByPosition)
router.post('/', userExtractor, auth.adminPermission, createAtleta)
router.patch('/:id', userExtractor, auth.adminPermission, updateAtleta)
router.delete('/:id', userExtractor, auth.adminPermission, deleteAtleta)

export default router
