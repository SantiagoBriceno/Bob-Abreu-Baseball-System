import { Router } from 'express'

import {
  getAtleta,
  getAtletaById,
  createAtleta,
  updateAtleta,
  deleteAtleta
} from '../../../controller/v1/administracion/atleta.controller.js'

const router = Router()

router.get('/atleta', getAtleta)
router.get('/atleta/:id', getAtletaById)
router.post('/atleta', createAtleta)
router.put('/atleta/:id', updateAtleta)
router.delete('/atleta/:id', deleteAtleta)

export default router
