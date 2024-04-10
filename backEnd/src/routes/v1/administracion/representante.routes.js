import { Router } from 'express'

import { createRepresentante, getRepresentantes, getRepresentante, updateRepresentante, deleteRepresentante } from '../../../controller/v1/administracion/representante.controller.js'
import { userExtractor } from '../../../middleware/userExtractor.js'
import auth from '../../../middleware/rolVerification.js'

const router = Router()

router.get('/', userExtractor, getRepresentantes)
router.get('/:id', userExtractor, auth.adminPermission, getRepresentante)
router.post('/', userExtractor, auth.adminPermission, createRepresentante)
router.patch('/:id', userExtractor, auth.adminPermission, updateRepresentante)
router.delete('/:id', userExtractor, auth.adminPermission, deleteRepresentante)

export default router
