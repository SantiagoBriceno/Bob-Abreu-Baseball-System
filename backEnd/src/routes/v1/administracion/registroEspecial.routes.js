import { Router } from 'express'
import {
  getRegistroEspecial,
  getRegistroEspecialById,
  createRegistroEspecial,
  updateRegistroEspecial,
  deleteRegistroEspecial
} from '../../../controller/administracion/registroEspecial.controller'

const router = Router()

router.get('/registroEspecial', getRegistroEspecial)
router.get('/registroEspecial/:id', getRegistroEspecialById)
router.post('/registroEspecial', createRegistroEspecial)
router.put('/registroEspecial/:id', updateRegistroEspecial)
router.delete('/registroEspecial/:id', deleteRegistroEspecial)

export default router
