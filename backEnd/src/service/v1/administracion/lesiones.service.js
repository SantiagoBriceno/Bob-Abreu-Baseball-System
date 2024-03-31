import { pool } from '../../../db.js'

/* Lesiones */

const nextId = async () => {
  const [data] = await pool.query('SELECT MAX(id) + 1 AS nextId FROM lesiones')
  return data[0].nextId ? data[0].nextId : 1
}

const getAllLesiones = async () => {
  const [lesiones] = await pool.query('SELECT id, nombre, id_atleta, fecha, descripcion FROM lesiones INNER JOIN atleta ON lesiones.id_atleta = atleta.cedula')
  return lesiones
}

const getLesionByIdPlayer = async (id) => {
  const [lesion] = await pool.query('SELECT * FROM lesiones WHERE id_atleta = ?', [id])
  return lesion
}

const createLesion = async (lesion) => {
  const [newLesion] = await pool.query('INSERT INTO lesiones SET ?', [lesion])
  return newLesion
}

const updateLesion = async (id, lesion) => {
  const [updatedLesion] = await pool.query('UPDATE lesiones SET ? WHERE id = ?', [lesion, id])
  return updatedLesion
}

const deleteLesion = async (id) => {
  const [lesion] = await pool.query('SELECT * FROM lesiones WHERE id = ?', [id])
  await pool.query('DELETE FROM lesiones WHERE id = ?', [id])
  return lesion
}

const getAtletasInfo = async () => {
  const [atletas] = await pool.query('SELECT nombre, cedula FROM atleta')
  return atletas
}

export default {
  getAllLesiones,
  getLesionByIdPlayer,
  createLesion,
  updateLesion,
  deleteLesion,
  getAtletasInfo,
  nextId
}
