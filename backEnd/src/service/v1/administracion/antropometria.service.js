/* eslint-disable camelcase */
import { pool } from '../../../db.js'

const JOIN_FICHA = 'ficha_antropometrica INNER JOIN datos_generales ON ficha_antropometrica.id_ficha = datos_generales.id_ficha INNER JOIN perimetros_corporales ON ficha_antropometrica.id = perimetros_corporales.id_ficha INNER JOIN indice_cintura_cadera ON ficha_antropometrica.id = indice_cintura_cadera.id_ficha INNER JOIN indice_masa_corporal ON ficha_antropometrica.id = indice_masa_corporal.id_ficha'

const GENERAL_ROWS = 'estatura_maxima, percentil_talla, longitud_de_pie, longitud_sentado, envergadura, imc, imc_ideal, tasa_metabolica_basal, calorias_necesarias, peso_corporal, peso_ideal, percentil_de_peso'

const PERIMETROS_ROWS = 'cabeza, cuello, brazo_relajado, brazo_contraido, antebrazo, muneca, torax, espalda, muslo_superior, muslo_medio, pierna, tobillo'

const ICC_ROWS = 'cintura, cadera, relacion_cintura_cadera'

const IMC_ROWS = 'masa_grasa_corporal, masa_grasa_ideal, masa_magra_corporal, masa_magra_ideal'

const nextId = async (table) => {
  const [id] = await pool.query(`SELECT MAX(id_ficha) + 1 AS id FROM ${table};`)
  return id[0].id ? id[0].id : 1
}

// FICHA ANTROPOMETRICA
const getAllFichasAntropometricas = async () => {
  const [response] = await pool.query(`SELECT * FROM ${JOIN_FICHA}`)
  return response
}

const getGeneralDataOfFicha = async () => {
  const [response] = await pool.query('SELECT id_ficha, id_atleta, nombre, fecha FROM ficha_antropometrica INNER JOIN atleta ON ficha_antropometrica.id_atleta = atleta.cedula INNER JOIN auditoria ON ficha_antropometrica.id_auditoria = auditoria.id')
  return response
}

const getGeneralDataOfFichaById = async (id) => {
  const [response] = await pool.query('SELECT id_ficha, id_atleta, nombre, fecha, atleta.posicion, atleta.clase FROM ficha_antropometrica INNER JOIN atleta ON ficha_antropometrica.id_atleta = atleta.cedula INNER JOIN auditoria ON ficha_antropometrica.id_auditoria = auditoria.id WHERE id_ficha = ?', [id])
  return response
}

const getFichaAntropometricaById = async (id) => {
  const [basic] = await pool.query('SELECT id_atleta, id_ficha FROM ficha_antropometrica WHERE ficha_antropometrica.id_ficha = ?', [id])
  const [general] = await pool.query(`SELECT ${GENERAL_ROWS} FROM datos_generales WHERE datos_generales.id_ficha = ?`, [id])
  const [perimetros] = await pool.query(`SELECT ${PERIMETROS_ROWS} FROM perimetros_corporales WHERE perimetros_corporales.id_ficha = ?`, [id])
  const [icc] = await pool.query(`SELECT ${ICC_ROWS} FROM indice_cintura_cadera WHERE indice_cintura_cadera.id_ficha = ?`, [id])
  const [imc] = await pool.query(`SELECT ${IMC_ROWS} FROM indice_masa_corporal WHERE indice_masa_corporal.id_ficha = ?`, [id])

  const [perfiles] = await pool.query('SELECT * FROM perfiles_fotograficos WHERE id_ficha = ?', [id])
  const response = {
    id_ficha: basic[0].id_ficha,
    cedula: basic[0].id_atleta,
    datos_general: general[0],
    perimetros_corporales: perimetros[0],
    indice_cintura_cadera: icc[0],
    indice_masa_corporal: imc[0],
    perfiles_fotograficos: perfiles[0]
  }
  return response
}

const getFichaAntropometricaByIdAtleta = async (id) => {
  const [response] = await pool.query('SELECT * FROM ficha_antropometrica WHERE ficha_antropometrica.id_atleta = ?', [id])
  const allDatosGenerales = []
  const allPerimetros_corporales = []
  const allICC = []
  const allIMC = []

  for (const ficha of response) {
    const [datos_generales] = await pool.query('SELECT * FROM datos_generales WHERE datos_generales.id_ficha = ?', [ficha.id_ficha])
    const [perimetros_corporales] = await pool.query('SELECT * FROM perimetros_corporales WHERE perimetros_corporales.id_ficha = ?', [ficha.id_ficha])
    const [indice_cintura_cadera] = await pool.query('SELECT * FROM indice_cintura_cadera WHERE indice_cintura_cadera.id_ficha = ?', [ficha.id_ficha])
    const [indice_masa_corporal] = await pool.query('SELECT * FROM indice_masa_corporal WHERE indice_masa_corporal.id_ficha = ?', [ficha.id_ficha])
    allDatosGenerales.push(datos_generales[0])
    allPerimetros_corporales.push(perimetros_corporales[0])
    allICC.push(indice_cintura_cadera[0])
    allIMC.push(indice_masa_corporal[0])
  }

  const data = {
    id_atleta: id,
    fichas: response,
    datos_generales: allDatosGenerales,
    perimetros_corporales: allPerimetros_corporales,
    indice_cintura_cadera: allICC,
    indice_masa_corporal: allIMC
  }
  return data
}

const createFichaAntropometrica = async (data) => {
  const [response] = await pool.query('INSERT INTO ficha_antropometrica SET ?', [data])
  return response
}

const deleteFichaAntropometrica = async (id) => {
  const [response] = await pool.query('DELETE FROM ficha_antropometrica WHERE id_ficha = ?', [id])
  await pool.query('DELETE FROM datos_generales WHERE id_ficha = ?', [id])
  await pool.query('DELETE FROM perimetros_corporales WHERE id_ficha = ?', [id])
  await pool.query('DELETE FROM indice_cintura_cadera WHERE id_ficha = ?', [id])
  await pool.query('DELETE FROM indice_masa_corporal WHERE id_ficha = ?', [id])
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

const createPerfiles = async (data) => {
  const [response] = await pool.query('INSERT INTO perfiles_fotograficos SET ?', [data])
  return response
}

const getPerfilesByIdFicha = async (id) => {
  const [response] = await pool.query('SELECT * FROM perfiles_fotograficos WHERE id_ficha = ?', [id])
  return response
}

export default {
  nextId,
  getGeneralDataOfFicha,
  getGeneralDataOfFichaById,
  getAllFichasAntropometricas,
  getFichaAntropometricaById,
  createFichaAntropometrica,
  deleteFichaAntropometrica,
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
  createIMC,
  createPerfiles,
  getFichaAntropometricaByIdAtleta,
  getPerfilesByIdFicha
}
