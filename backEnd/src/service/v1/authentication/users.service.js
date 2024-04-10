import { pool } from '../../../db.js'

const createUser = async (newUser) => {
  const [data] = await pool.query('INSERT INTO users SET ?', [newUser])
  return data
}

const getUsernames = async () => {
  const [data] = await pool.query('SELECT username FROM users')
  return data.map((user) => user.username)
}

const getUsers = async () => {
  const [data] = await pool.query('SELECT cedula, name, rol FROM users')
  return data
}

const deleteUser = async (cedula) => {
  const [data] = await pool.query('DELETE FROM users WHERE cedula = ?', [cedula])
  return data
}
export default {
  createUser,
  getUsernames,
  getUsers,
  deleteUser
}
