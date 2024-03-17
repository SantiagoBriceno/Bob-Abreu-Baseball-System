import { pool } from '../../../db.js'

const nextId = async () => {
  const [data] = await pool.query('SELECT MAX(id) + 1 AS nextId FROM registro_especial')
  return data[0].nextId ? data[0].nextId : 1
}

const getRegistroEspecial = async () => {
  const [data] = await pool.query('SELECT a.nombre, reg.id, reg.fecha_evento, reg.descripcion, reg.cedula FROM registro_especial AS reg INNER JOIN atleta AS a ON a.cedula = reg.cedula')
  return data
}

const getRegistroEspecialById = async (id) => {
  const [data] = await pool.query('SELECT * FROM registro_especial WHERE id = ?', [id])
  return data
}

const getRegistroEspecialByIdPlayer = async (id) => {
  const [data] = await pool.query('SELECT * FROM registro_especial WHERE cedula = ?', [id])
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

const getAtletasInfo = async () => {
  const [data] = await pool.query('SELECT nombre, cedula FROM atleta')
  return data
}

export default {
  getRegistroEspecial,
  getRegistroEspecialById,
  createRegistroEspecial,
  updateRegistroEspecial,
  deleteRegistroEspecial,
  getAtletasInfo,
  getRegistroEspecialByIdPlayer,
  nextId
}
