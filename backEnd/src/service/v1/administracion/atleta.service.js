import { pool } from '../../../db.js'

const getAtletas = async () => {
  const [data] = await pool.query('SELECT * FROM atleta')
  return data
}

const getAtletaById = async (id) => {
  const [data] = await pool.query('SELECT * FROM atleta WHERE cedula = ?', [id])
  return data
}

const createAtleta = async (atleta) => {
  const [data] = await pool.query('INSERT INTO atleta SET ?', [atleta])
  return data
}

const updateAtleta = async (id, atleta) => {
  const [data] = await pool.query('UPDATE atleta SET ? WHERE cedula = ?', [atleta, id])
  return data
}

const deleteAtleta = async (id) => {
  const [deleteData] = await pool.query('SELECT * FROM atleta WHERE cedula = ?', [id])
  await pool.query('DELETE FROM atleta WHERE cedula = ?', [id])
  return deleteData[0]
}

const getCedulas = async () => {
  const [data] = await pool.query('SELECT cedula FROM atleta')
  if (data.length === 0) {
    return []
  } else {
    return data.map(({ cedula }) => cedula)
  }
}

const getPositionById = async (id) => {
  const [data] = await pool.query('SELECT * FROM posicion WHERE id = ?', [id])
  return data
}

const getAtletaByPosition = async (posicion) => {
  const [data] = await pool.query('SELECT * FROM atleta WHERE posicion = ?', [posicion])
  return data
}

export default {
  getAtletas,
  getAtletaById,
  createAtleta,
  updateAtleta,
  deleteAtleta,
  getCedulas,
  getPositionById,
  getAtletaByPosition
}
