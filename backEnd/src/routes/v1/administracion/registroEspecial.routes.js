import { Router } from 'express'
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
router.post('/', createRegistroEspecial)
router.put('/:id', updateRegistroEspecial)
router.delete('/:id', deleteRegistroEspecial)

export default router
