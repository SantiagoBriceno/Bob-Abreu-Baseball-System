import { pool } from '../../../db.js'

const createUser = async (newUser) => {
  const [data] = await pool.query('INSERT INTO users SET ?', [newUser])
  return data
}

const getUsernames = async () => {
  const [data] = await pool.query('SELECT username FROM users')
  return data.map((user) => user.username)
}

export default {
  createUser,
  getUsernames
}
