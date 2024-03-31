import { Router } from 'express'
import {
  getLesiones,
  getLesionByIdPlayer,
  createLesion,
  updateLesion,
  deleteLesion
} from '../../../controller/v1/administracion/lesiones.controller.js'
import { userExtractor } from '../../../middleware/userExtractor.js'

const router = Router()

router.get('/', getLesiones)
router.get('/:id', getLesionByIdPlayer)
router.post('/', userExtractor, createLesion)
router.patch('/:id', userExtractor, updateLesion)
router.delete('/:id', deleteLesion)

export default router
