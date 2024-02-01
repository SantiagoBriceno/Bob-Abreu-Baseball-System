import { Router } from 'express'

import { createRepresentante, getRepresentantes, getRepresentante, updateRepresentante, deleteRepresentante } from '../../../controller/v1/administracion/representante.controller.js'
import { userExtractor } from '../../../middleware/userExtractor.js'
import auth from '../../../middleware/rolVerification.js'

const router = Router()

router.post('/', userExtractor, createRepresentante)
router.get('/', userExtractor, getRepresentantes)
router.get('/:id', userExtractor, getRepresentante)
router.patch('/:id', userExtractor, updateRepresentante)
router.delete('/:id', userExtractor, deleteRepresentante)
