import service from '../../../service/v1/authentication/users.service.js'
import lService from '../../../service/v1/authentication/login.service.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { SECRET } from '../../../config.js'

export const loginUser = async (req, res) => {
  const { body } = req
  const { username, password } = body

  const user = await lService.findUser(username)
  const passwordCorrect = user.length === 0
    ? false
    : await bcrypt.compare(password, user[0].password)

  if (!(user && passwordCorrect)) {
    res.status(401).json({
      error: 'invalid username or password'
    })
  } else {
    const userForToken = {
      id: user[0].id,
      cedula: user[0].cedula,
      name: user[0].name,
      username: user[0].username,
      rol: user[0].rol
    }

    const token = jwt.sign(userForToken, SECRET, {
      expiresIn: 60 * 60 * 24
    })

    res.status(200).send({ token, user: userForToken })
  }
}
