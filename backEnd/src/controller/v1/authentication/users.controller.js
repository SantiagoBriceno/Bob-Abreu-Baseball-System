import service from '../../../service/v1/authentication/users.service.js'
import bcrypt from 'bcrypt'
import { isValidUser, existUsername } from '../../../utils/formats/user.js'

export const createUser = async (req, res) => {
  const { body } = req
  const { username, cedula, nombre, password, rol } = body
  const newUser = {
    cedula,
    username,
    name: nombre,
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
        res.status(201).json({ user, message: 'usuario creado exitosamente' })
      } catch (error) {
        res.status(500).json(error)
      }
    }
  }
}

export const getUsers = async (req, res) => {
  try {
    const users = await service.getUsers()
    users.map((user) => {
      // primera letra en mayuscula
      const primeraLetraDelRol = user.rol.charAt(0).toUpperCase()
      const restoDelRol = user.rol.slice(1)
      user.rol = primeraLetraDelRol + restoDelRol
      return null
    })
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json(error)
  }
}

export const deleteUser = async (req, res) => {
  const { cedula } = req.params
  try {
    await service.deleteUser(cedula)
    res.status(200).json({ message: 'usuario eliminado exitosamente' })
  } catch (error) {
    res.status(500).json(error)
  }
}
