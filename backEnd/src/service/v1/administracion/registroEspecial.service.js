import { pool } from '../../../db'

const getRegistroEspecial = async () => {
  const [data] = await pool.query('SELECT * FROM registro_especial')
  return data
}

const getRegistroEspecialById = async (id) => {
  const [data] = await pool.query('SELECT * FROM registro_especial WHERE id = ?', [id])
  return data
}

const createRegistroEspecial = async (registroEspecial) => {
  const [data] = await pool.query('INSERT INTO registro_especial SET ?', [registroEspecial])
  return data
}

const updateRegistroEspecial = async (id, registroEspecial) => {
  const [data] = await pool.query('UPDATE registro_especial SET ? WHERE id = ?', [registroEspecial, id])
  return data
}

const deleteRegistroEspecial = async (id) => {
  const [data] = await pool.query('DELETE FROM registro_especial WHERE id = ?', [id])
  return data
}

export default {
  getRegistroEspecial,
  getRegistroEspecialById,
  createRegistroEspecial,
  updateRegistroEspecial,
  deleteRegistroEspecial
}
