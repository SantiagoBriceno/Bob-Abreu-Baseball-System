import { pool } from '../../../db.js'

const JOIN_FICHA = 'ficha_antropometrica INNER JOIN datos_generales ON ficha_antropometrica.id = datos_generales.id_ficha INNER JOIN perimetros_corporales ON ficha_antropometrica.id = perimetros_corporales.id_ficha INNER JOIN indice_cintura_cadera ON ficha_antropometrica.id = indice_cintura_cadera.id_ficha INNER JOIN indice_masa_corporal ON ficha_antropometrica.id = indice_masa_corporal.id_ficha'

const nextId = async (table) => {
  const [id] = await pool.query(`SELECT MAX(id_ficha) + 1 AS id FROM ${table};`)
  return id[0].id ? id[0].id : 1
}

// FICHA ANTROPOMETRICA
const getAllFichasAntropometricas = async () => {
  const [response] = await pool.query(`SELECT * FROM ${JOIN_FICHA}`)
  return response
}

const getFichaAntropometricaById = async (id) => {
  const [response] = await pool.query(`SELECT * FROM ${JOIN_FICHA} WHERE ficha_antropometrica.id = ?`, [id])
  return response
}

const createFichaAntropometrica = async (data) => {
  const [response] = await pool.query('INSERT INTO ficha_antropometrica SET ?', [data])
  return response
}

// DATOS GENERALES DE LA FICHA ANTROPOMETRICA
const getAllDatosGenerales = async () => {
  const [response] = await pool.query('SELECT * FROM datos_generales')
  return response
}

const getDatosGeneralesById = async (id) => {
  const [response] = await pool.query('SELECT * FROM datos_generales WHERE id = ?', [id])
  return response
}

const getDatosGeneralesByIdFicha = async (id) => {
  const [response] = await pool.query('SELECT * FROM datos_generales WHERE id_ficha = ?', [id])
  return response
}

const getDatosGeneralesByIdAtleta = async (id) => {
  const [response] = await pool.query('SELECT * FROM datos_generales WHERE id_atleta = ?', [id])
  return response
}

const createDatosGenerales = async (data) => {
  const [response] = await pool.query('INSERT INTO datos_generales SET ?', [data])
  return response
}

// DATOS DE PERIMETROS CORPORALES DE LA FICHA ANTROPOMETRICA
const getAllPerimetros = async () => {
  const [response] = await pool.query('SELECT * FROM perimetros_corporales')
  return response
}

const getPerimetrosById = async (id) => {
  const [response] = await pool.query('SELECT * FROM perimetros_corporales WHERE id = ?', [id])
  return response
}

const getPerimetrosByIdFicha = async (id) => {
  const [response] = await pool.query('SELECT * FROM perimetros_corporales WHERE id_ficha = ?', [id])
  return response
}

const getPerimetrosByIdAtleta = async (id) => {
  const [response] = await pool.query('SELECT * FROM perimetros_corporales WHERE id_atleta = ?', [id])
  return response
}

const createPerimetros = async (data) => {
  const [response] = await pool.query('INSERT INTO perimetros_corporales SET ?', [data])
  return response
}

// DATOS DE INDICE CINTURA CADERA DE LA FICHA ANTROPOMETRICA
const getAllICC = async () => {
  const [response] = await pool.query('SELECT * FROM indice_cintura_cadera')
  return response
}

const getICCById = async (id) => {
  const [response] = await pool.query('SELECT * FROM indice_cintura_cadera WHERE id = ?', [id])
  return response
}

const getICCByIdFicha = async (id) => {
  const [response] = await pool.query('SELECT * FROM indice_cintura_cadera WHERE id_ficha = ?', [id])
  return response
}

const getICCByIdAtleta = async (id) => {
  const [response] = await pool.query('SELECT * FROM indice_cintura_cadera WHERE id_atleta = ?', [id])
  return response
}

const createICC = async (data) => {
  const [response] = await pool.query('INSERT INTO indice_cintura_cadera SET ?', [data])
  return response
}

// DATOS DE INDICE DE MASA CORPORAL DE LA FICHA ANTROPOMETRICA
const getAllIMC = async () => {
  const [response] = await pool.query('SELECT * FROM indice_masa_corporal')
  return response
}

const getIMCById = async (id) => {
  const [response] = await pool.query('SELECT * FROM indice_masa_corporal WHERE id = ?', [id])
  return response
}

const getIMCByIdFicha = async (id) => {
  const [response] = await pool.query('SELECT * FROM indice_masa_corporal WHERE id_ficha = ?', [id])
  return response
}

const getIMCByIdAtleta = async (id) => {
  const [response] = await pool.query('SELECT * FROM indice_masa_corporal WHERE id_atleta = ?', [id])
  return response
}

const createIMC = async (data) => {
  const [response] = await pool.query('INSERT INTO indice_masa_corporal SET ?', [data])
  return response
}

export default {
  nextId,
  getAllFichasAntropometricas,
  getFichaAntropometricaById,
  createFichaAntropometrica,
  getAllDatosGenerales,
  getDatosGeneralesById,
  getDatosGeneralesByIdAtleta,
  getDatosGeneralesByIdFicha,
  createDatosGenerales,
  getAllPerimetros,
  getPerimetrosById,
  getPerimetrosByIdFicha,
  getPerimetrosByIdAtleta,
  createPerimetros,
  getAllICC,
  getICCById,
  getICCByIdFicha,
  getICCByIdAtleta,
  createICC,
  getAllIMC,
  getIMCById,
  getIMCByIdFicha,
  getIMCByIdAtleta,
  createIMC
}
