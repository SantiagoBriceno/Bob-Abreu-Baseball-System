import { Router } from 'express'
import {
  getLesiones,
  getLesionByIdPlayer,
  createLesiones,
  updateLesiones,
  deleteLesiones
} from '../../../controller/v1/administracion/lesiones.controller.js'

const router = Router()

router.get('/', getLesiones)
router.get('/:id', getLesionByIdPlayer)
router.post('/', createLesiones)
router.put('/:id', updateLesiones)
router.delete('/:id', deleteLesiones)

export default router
