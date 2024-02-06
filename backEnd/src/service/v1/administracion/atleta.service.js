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
  console.log('data', data)
  if (data.length === 0) {
    return []
  } else {
    data.map(({ cedula }) => cedula)
  }
}

export default {
  getAtletas,
  getAtletaById,
  createAtleta,
  updateAtleta,
  deleteAtleta,
  getCedulas
}
