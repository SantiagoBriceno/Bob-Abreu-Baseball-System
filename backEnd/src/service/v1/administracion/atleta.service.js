/* eslint-disable camelcase */
import { pool } from '../../../db.js'

const getAtletas = async () => {
  const [data] = await pool.query('SELECT * FROM atleta')
  return data
}

const getAtletaById = async (id) => {
  const [data] = await pool.query('SELECT * FROM atleta WHERE cedula = ?', [id])
  return data
}

const getAtletaByIdReport = async (id) => {
  const [data] = await pool.query('SELECT cedula, nombre, lugar_nacimiento, fecha_nacimiento, clase, hitting, posicion, estado FROM atleta WHERE cedula = ?', [id])
  return data
}

const getAtletaPadresById = async (id) => {
  const [data] = await pool.query('SELECT nombre, tlf, correo, direccion, sexo FROM representante WHERE cedula_atleta = ?', [id])
  return data
}

const getStatsReportById = async (id) => {
  const result = {}
  // Buscamos peso y estatura en ficha antropometrica, datos generales, retornamos el ultimo registro
  const [data] = await pool.query('SELECT peso_corporal, estatura_maxima FROM ficha_antropometrica INNER JOIN datos_generales ON ficha_antropometrica.id_ficha = datos_generales.id_ficha WHERE id_atleta = ? ', [id])

  if (data.length !== 0) {
    const { peso_corporal, estatura_maxima } = data[data.length - 1]
    result.peso_corporal = peso_corporal
    result.estatura_maxima = estatura_maxima
  }

  // Buscamos la ultima estadistica de velocidad_sesenta en la tabla running
  const [data2] = await pool.query('SELECT velocidad_sesenta FROM running WHERE id_atleta = ? order by fecha_evaluacion DESC LIMIT 1', [id])

  if (data2.length !== 0) {
    const { velocidad_sesenta } = data2[data2.length - 1]
    result.velocidad_sesenta = velocidad_sesenta
  }

  // Buscamos la ultima estadistica de bat_speed y angle_attack en la tabla hitting
  const [data3] = await pool.query('SELECT bat_speed, angle_attack FROM hitting WHERE id_atleta = ? order by fecha_evaluacion DESC LIMIT 1', [id])

  if (data3.length !== 0) {
    const { bat_speed, angle_attack } = data3[data3.length - 1]
    result.bat_speed = bat_speed
    result.angle_attack = angle_attack
  }

  // buscamos la ultima estadistica de lanzamiento_primera, lanzamiento_segunda, lanzamiento_tercera y pop_time en la tabla throwing

  const [data4] = await pool.query('SELECT lanzamiento_primera, lanzamiento_segunda, lanzamiento_tercera, pop_time FROM throwing WHERE id_atleta = ? order by fecha_evaluacion DESC LIMIT 1', [id])

  if (data4.length !== 0) {
    const { lanzamiento_primera, lanzamiento_segunda, lanzamiento_tercera, pop_time } = data4[data4.length - 1]
    result.lanzamiento_primera = lanzamiento_primera
    result.lanzamiento_segunda = lanzamiento_segunda
    result.lanzamiento_tercera = lanzamiento_tercera
    result.pop_time = pop_time
  }

  console.log(result)

  return result
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
  console.log('posicion', posicion)
  const [data] = await pool.query('SELECT * FROM atleta WHERE posicion = ?', [posicion])
  return data
}

const getAtletaImg = async (id) => {
  const [data] = await pool.query('SELECT foto FROM atleta WHERE cedula = ?', [id])
  return data
}

export default {
  getAtletas,
  getAtletaByIdReport,
  getAtletaPadresById,
  getStatsReportById,
  getAtletaById,
  createAtleta,
  updateAtleta,
  deleteAtleta,
  getCedulas,
  getPositionById,
  getAtletaByPosition,
  getAtletaImg
}
