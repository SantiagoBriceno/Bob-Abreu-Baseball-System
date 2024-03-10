import { Router } from 'express'
import {
  getLesiones,
  getLesionByIdPlayer,
  createLesion,
  updateLesion,
  deleteLesion
} from '../../../controller/v1/administracion/lesiones.controller.js'

const router = Router()

router.get('/', getLesiones)
router.get('/:id', getLesionByIdPlayer)
router.post('/', createLesion)
router.put('/:id', updateLesion)
router.delete('/:id', deleteLesion)

export default router
