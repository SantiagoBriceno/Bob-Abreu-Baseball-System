import { pool } from '../../../db.js'

const getUsers = async () => {
  const [data] = await pool.query('SELECT * FROM users')
  return data
}

const findUser = async (username) => {
  const [data] = await pool.query('SELECT * FROM users WHERE username = ?', [username])
  return data
}

export default {
  getUsers,
  findUser
}
