import service from '../../../service/v1/authentication/users.service.js'
import bcrypt from 'bcrypt'
import { isValidUser, existUsername } from '../../../utils/formats/user.js'

export const createUser = async (req, res) => {
  const { body } = req
  const { username, cedula, name, password, rol } = body
  const newUser = {
    cedula,
    username,
    name,
    password,
    rol
  }

  if (!isValidUser(newUser)) {
    res.status(401).json({ error: 'missing required fields' })
  } else {
    const usernames = await service.getUsernames()
    if (existUsername(usernames, username)) {
      res.status(401).json({ error: 'username already exists' })
    } else {
      try {
        newUser.password = await bcrypt.hash(password, 10)
        const user = await service.createUser(newUser)
        res.status(201).json(user)
      } catch (error) {
        res.status(500).json(error)
      }
    }
  }
}
