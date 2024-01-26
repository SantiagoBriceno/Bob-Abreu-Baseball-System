import jwt from 'jsonwebtoken'
import { SECRET } from '../config.js'

export const userExtractor = (req, res, next) => {
  let token = null
  const authorization = req.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer')) {
    token = authorization.split(' ')[1]
  }
  let decodeToken = ''
  let error = false

  try {
    decodeToken = jwt.verify(token, SECRET)
  } catch (e) {
    error = true
  }

  if (error) {
    res.status(401).send({
      message: 'Invalid or missing token'
    })
  } else {
    req.user = { name: decodeToken.name, rol: decodeToken.rol }
    next()
  }
}
