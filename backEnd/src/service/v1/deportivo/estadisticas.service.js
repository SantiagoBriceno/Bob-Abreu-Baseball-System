import { pool } from '../../../db.js'

const nextId = async (table) => {
  const [id] = await pool.query(`SELECT MAX(id) + 1 AS id FROM ${table};`)

  return id[0].id ? id[0].id : 1
}

/* HITTING STATS SERVICES */

const getHittingStatsIds = async () => {
  const [hittingStats] = await pool.query('SELECT id FROM hitting')
  return hittingStats.map(({ id }) => id)
}

const getHittingStats = async () => {
  const [hittingStats] = await pool.query('SELECT * FROM hitting')
  return hittingStats
}

const getHittingStatById = async (id) => {
  const [hittingStat] = await pool.query('SELECT * FROM hitting WHERE id = ?', [id])
  return hittingStat
}

const createHittingStat = async (hittingStat) => {
  const [newHittingStat] = await pool.query('INSERT INTO hitting SET ?', [hittingStat])
  return newHittingStat
}

const updateHittingStat = async (id, hittingStat) => {
  const [updatedHittingStat] = await pool.query('UPDATE hitting SET ? WHERE id = ?', [hittingStat, id])
  return updatedHittingStat
}

const deleteHittingStat = async (id) => {
  const [hittingStat] = await pool.query('SELECT * FROM hitting WHERE id = ?', [id])
  await pool.query('DELETE FROM hitting WHERE id = ?', [id])
  return hittingStat
}

/* RUNNING STATS SERVICE */

const getRunningStatsIds = async () => {
  const [runningStats] = await pool.query('SELECT id FROM running')
  return runningStats.map(({ id }) => id)
}

const getRunningStats = async () => {
  const [runningStats] = await pool.query('SELECT * FROM running')
  return runningStats
}

const getRunningStatById = async (id) => {
  const [runningStat] = await pool.query('SELECT * FROM running WHERE id = ?', [id])
  return runningStat
}

const createRunningStat = async (runningStat) => {
  const [newRunningStat] = await pool.query('INSERT INTO running SET ?', [runningStat])
  return newRunningStat
}

const updateRunningStat = async (id, runningStat) => {
  const [updatedRunningStat] = await pool.query('UPDATE running SET ? WHERE id = ?', [runningStat, id])
  return updatedRunningStat
}

const deleteRunningStat = async (id) => {
  const [runningStat] = await pool.query('SELECT * FROM running WHERE id = ?', [id])
  await pool.query('DELETE FROM running WHERE id = ?', [id])
  return runningStat
}

/* THROWING STATS SERVICE */

const getThrowingStatsIds = async () => {
  const [throwingStats] = await pool.query('SELECT id FROM throwing')
  return throwingStats.map(({ id }) => id)
}

const getThrowingStats = async () => {
  const [throwingStats] = await pool.query('SELECT * FROM throwing')
  return throwingStats
}

const getThrowingStatById = async (id) => {
  const [throwingStat] = await pool.query('SELECT * FROM throwing WHERE id = ?', [id])
  return throwingStat
}

const createThrowingStat = async (throwingStat) => {
  const [newThrowingStat] = await pool.query('INSERT INTO throwing SET ?', [throwingStat])
  return newThrowingStat
}

const updateThrowingStat = async (id, throwingStat) => {
  const [updatedThrowingStat] = await pool.query('UPDATE throwing SET ? WHERE id = ?', [throwingStat, id])
  return updatedThrowingStat
}

const deleteThrowingStat = async (id) => {
  const [throwingStat] = await pool.query('SELECT * FROM throwing WHERE id = ?', [id])
  await pool.query('DELETE FROM throwing WHERE id = ?', [id])
  return throwingStat
}

/* FIELDING STATS SERVICE */

const getFieldingStatsIds = async () => {
  const [fieldingStats] = await pool.query('SELECT id FROM fielding')
  return fieldingStats.map(({ id }) => id)
}

const getFieldingStats = async () => {
  const [fieldingStats] = await pool.query('SELECT * FROM fielding')
  return fieldingStats
}

const getFieldingStatById = async (id) => {
  const [fieldingStat] = await pool.query('SELECT * FROM fielding WHERE id = ?', [id])
  return fieldingStat
}

const createFieldingStat = async (fieldingStat) => {
  const [newFieldingStat] = await pool.query('INSERT INTO fielding SET ?', [fieldingStat])
  return newFieldingStat
}

const updateFieldingStat = async (id, fieldingStat) => {
  const [updatedFieldingStat] = await pool.query('UPDATE fielding SET ? WHERE id = ?', [fieldingStat, id])
  return updatedFieldingStat
}

const deleteFieldingStat = async (id) => {
  const [fieldingStat] = await pool.query('SELECT * FROM fielding WHERE id = ?', [id])
  await pool.query('DELETE FROM fielding WHERE id = ?', [id])
  return fieldingStat
}

export default {
  getHittingStatsIds,
  getHittingStats,
  getHittingStatById,
  createHittingStat,
  updateHittingStat,
  deleteHittingStat,
  getRunningStatsIds,
  getRunningStats,
  getRunningStatById,
  createRunningStat,
  updateRunningStat,
  deleteRunningStat,
  getThrowingStatsIds,
  getThrowingStats,
  getThrowingStatById,
  createThrowingStat,
  updateThrowingStat,
  deleteThrowingStat,
  getFieldingStatsIds,
  getFieldingStats,
  getFieldingStatById,
  createFieldingStat,
  updateFieldingStat,
  deleteFieldingStat,
  nextId
}
