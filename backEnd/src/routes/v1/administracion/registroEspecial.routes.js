import { Router } from 'express'
import { userExtractor } from '../../../middleware/userExtractor.js'
import {
  getRegistroEspecial,
  getRegistroEspecialById,
  createRegistroEspecial,
  updateRegistroEspecial,
  deleteRegistroEspecial
} from '../../../controller/v1/administracion/registroEspecial.controller.js'

const router = Router()

router.get('/', getRegistroEspecial)
router.get('/:id', getRegistroEspecialById)
router.post('/', userExtractor, createRegistroEspecial)
router.patch('/:id', userExtractor, updateRegistroEspecial)
router.delete('/:id', deleteRegistroEspecial)

export default router
