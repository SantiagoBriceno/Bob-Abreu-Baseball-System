import { pool } from '../../db.js'

const getNroAtletas = async () => {
  const data = await pool.query('SELECT COUNT(*) as nroAtletas FROM atleta')
  return data[0]
}

const getNroAtletasActivos = async () => {
  const data = await pool.query('SELECT COUNT(*) as nroActivos FROM atleta WHERE estado = "Activo"')
  return data[0]
}

const getNroAtletasInactivos = async () => {
  const data = await pool.query('SELECT COUNT(*) as nroInactivos FROM atleta WHERE estado = "Inactivo"')
  return data[0]
}

const getCantidadCatchers = async () => {
  const data = await pool.query('SELECT COUNT(*) as nroCatchers FROM atleta WHERE posicion = "Catcher"')
  return data[0]
}

const getCantidadPitchers = async () => {
  const data = await pool.query('SELECT COUNT(*) as nroPitchers FROM atleta WHERE posicion = "Pitcher"')
  return data[0]
}

const getCantidadInfielders = async () => {
  const data = await pool.query('SELECT COUNT(*) as nroInfielders FROM atleta WHERE posicion = "Infielder"')
  return data[0]
}

const getCantidadOutfielders = async () => {
  const data = await pool.query('SELECT COUNT(*) as nroOutfielders FROM atleta WHERE posicion = "Outfielder"')
  return data[0]
}

export default {
  getNroAtletas,
  getNroAtletasActivos,
  getNroAtletasInactivos,
  getCantidadCatchers,
  getCantidadPitchers,
  getCantidadInfielders,
  getCantidadOutfielders
}
