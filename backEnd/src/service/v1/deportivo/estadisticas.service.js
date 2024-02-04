import { pool } from '../../../db.js'

const nextId = async (table) => {
  const [id] = await pool.query("SELECT `AUTO_INCREMENT` FROM  INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'baseball_db' AND TABLE_NAME = 'indicadores';")
  console.log(id)
  return id[0].AUTO_INCREMENT + 1
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
  nextId
}
