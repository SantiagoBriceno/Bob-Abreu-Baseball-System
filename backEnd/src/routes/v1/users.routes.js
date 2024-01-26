import { Router } from 'express'
import { createUser } from '../../controller/v1/users.controller.js'

const router = Router()

router.get('/', (req, res) => {
  res.send('Hello World!')
})
router.post('/', createUser)

export default router
