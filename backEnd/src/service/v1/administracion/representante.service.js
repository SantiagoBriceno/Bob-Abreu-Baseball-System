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
  const [data] = await pool.query('SELECT * FROM representantes')
  return data
}

const getRepresentante = async (id) => {
  const [data] = await pool.query('SELECT * FROM representantes WHERE id = ?', [id])
  return data
}

const getCedulas = async () => {
  const [data] = await pool.query('SELECT cedula FROM representantes')
  return data.map(({ cedula }) => cedula)
}

const createRepresentante = async (representante) => {
  const [data] = await pool.query('INSERT INTO representantes SET ?', [representante])
  return data
}

const updateRepresentante = async (id, representante) => {
  const [data] = await pool.query('UPDATE representantes SET ? WHERE id = ?', [representante, id])
  return data
}

const deleteRepresentante = async (id) => {
  const [data] = await pool.query('DELETE FROM representantes WHERE id = ?', [id])
  return data
}

export default {
  getRepresentantes,
  getRepresentante,
  getCedulas,
  createRepresentante,
  updateRepresentante,
  deleteRepresentante
}
