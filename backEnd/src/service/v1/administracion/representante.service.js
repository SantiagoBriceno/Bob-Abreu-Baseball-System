import { pool } from '../../../db.js'

/*
  representante = {
    cedula: '',
    nombre: '',
    tlf: '',
    rif: '',
    estatura: '',
    email: '',
    direccion: '',
    cedula_atleta: '',
    id_auditoria: ''
  }
*/

const getRepresentantes = async () => {
  const [data] = await pool.query('SELECT * FROM representante')
  return data
}

const getRepresentante = async (id) => {
  const [data] = await pool.query('SELECT * FROM representante WHERE id = ?', [id])
  return data
}

const getCedulas = async () => {
  const [data] = await pool.query('SELECT cedula FROM representante')
  return data.map(({ cedula }) => cedula)
}

const createRepresentante = async (representante) => {
  const [data] = await pool.query('INSERT INTO representante SET ?', [representante])
  return data
}

const updateRepresentante = async (id, representante) => {
  const [data] = await pool.query('UPDATE representante SET ? WHERE cedula = ?', [representante, id])
  return data
}

const deleteRepresentante = async (id) => {
  const [deleteData] = await pool.query('SELECT * FROM representante WHERE cedula = ?', [id])
  await pool.query('DELETE FROM representante WHERE cedula = ?', [id])
  return deleteData[0]
}

const getAtletasInfo = async () => {
  const [atletas] = await pool.query('SELECT nombre, cedula FROM atleta')
  return atletas
}

export default {
  getAtletasInfo,
  getRepresentantes,
  getRepresentante,
  getCedulas,
  createRepresentante,
  updateRepresentante,
  deleteRepresentante
}
