import { pool } from '../../../db.js'

const RUNNING_ROWS = 'id, velocidad_sesenta, velocidad_home_to_first, id_atleta, fecha_evaluacion'
const HITTING_ROWS = 'id, agudeza_visual, bat_speed, coord_dos_manos, ritmo_balance, rec_zona_strike, rec_pitcheos, control_bate, ruta_del_bate, id_atleta, angle_attack, fecha_evaluacion'
const THROWING_ROWS = 'id, lanzamiento_primera, lanzamiento_segunda, lanzamiento_tercera, lanzamiento_home, pop_time, id_atleta, fecha_evaluacion, fluidez_brazo, brazo_rapido, facilidad_movimiento, linealidad_lanzamiento'
const FIELDING_ROWS = 'id, getting_jump, ruta, alcance, manos_suaves, control_cuerpo, juego_de_pie, anticipacion, energia, fecha_evaluacion'
const MAKEUP_ROWS = 'id, actitud, compromiso, responsabilidad, disciplina, fecha_evaluacion'

const ROWS = 'atleta.clase, atleta.nombre, atleta.posicion'

const innerJoin = (table) => {
  return `INNER JOIN atleta ON ${table}.id_atleta = atleta.cedula`
}

const nextId = async (table) => {
  const [id] = await pool.query(`SELECT MAX(id) + 1 AS id FROM ${table};`)
  return id[0].id ? id[0].id : 1
}

const getAllClases = async (table) => {
  const [clases] = await pool.query(`SELECT atleta.clase, COUNT(*) AS cant_atletas FROM atleta  WHERE atleta.cedula IN (SELECT id_atleta FROM ${table}) AND atleta.estado = "Activo" GROUP BY atleta.clase;`)
  return clases
}

const existPlayer = async (id) => {
  const [player] = await pool.query('SELECT * FROM atleta WHERE cedula = ?', [id])
  return player
}

// Saber los atletas que tienen estadisticas de algun tipo dado
const getExistIdPlayer = async (table) => {
  const [ids] = await pool.query(`SELECT DISTINCT id_atleta as id FROM ${table}`)
  console.log(ids)
  return ids
}

// Saber las fechas de evaluacion de las estadisticas de algun tipo dado, para la regresion lineal
const getArrayOfDateById = async (table, row, id) => {
  const [date] = await pool.query(`SELECT ${row} as y, fecha_evaluacion as x FROM ${table} WHERE id_atleta = ?`, [id])
  return date
}

const getBirthDateById = async (id) => {
  const [birthDate] = await pool.query('SELECT fecha_nacimiento as date FROM atleta WHERE cedula = ?', [id])
  return birthDate
}

/* HITTING STATS SERVICES */

const getHittingStatsIds = async () => {
  const [hittingStats] = await pool.query('SELECT id FROM hitting')
  return hittingStats.map(({ id }) => id)
}

const getHittingStats = async () => {
  const [hittingStats] = await pool.query(`SELECT ${HITTING_ROWS}, ${ROWS} FROM hitting ${innerJoin('hitting')}`)
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

const getHittingStatsByIdPlayer = async (id) => {
  const [hittingStats] = await pool.query(`SELECT date_format(fecha_evaluacion, "%d/%m/%y") as fecha_evaluacion, ${HITTING_ROWS}  FROM hitting WHERE id_atleta = ?`, [id])
  return hittingStats
}

/* RUNNING STATS SERVICE */

const getRunningStatsIds = async () => {
  const [runningStats] = await pool.query('SELECT id FROM running')
  return runningStats.map(({ id }) => id)
}

const getRunningStats = async () => {
  const [runningStats] = await pool.query(`SELECT ${RUNNING_ROWS}, ${ROWS} FROM running ${innerJoin('running')}`)
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

const getRunningStatsByIdPlayer = async (id) => {
  const [runningStats] = await pool.query(`SELECT date_format(fecha_evaluacion, "%d/%m/%y") as fecha_evaluacion, ${RUNNING_ROWS} FROM running WHERE id_atleta = ?`, [id])
  return runningStats
}

const getIdPlayerOfRunningStats = async () => {
  const [runningStats] = await pool.query('SELECT DISTINCT id_atleta, clase FROM running INNER JOIN atleta ON running.id_atleta = atleta.cedula WHERE atleta.estado = "Activo";')
  return runningStats
}

const getRunningSixtyYardStatByIdPlayer = async (idAtleta) => {
  // Recibe un id de un atleta, y devuelve la ultima estadistica de velocidad de 60 yardas segun la fecha de evaluacion de la misma
  const [runningStat] = await pool.query('SELECT id_atleta, velocidad_sesenta, clase FROM running INNER JOIN atleta ON running.id_atleta = atleta.cedula WHERE id_atleta = ? ORDER BY fecha_evaluacion DESC LIMIT 1;', [idAtleta])
  return runningStat[0]
}

const getRunningSixtyYardStatByClass = async (clase) => {
  const [runningStat] = await pool.query('SELECT clase, count(*) as nro_atletas, sum(running.velocidad_sesenta) as total_por_clase FROM running INNER JOIN atleta ON running.id_atleta = atleta.cedula GROUP BY atleta.clase;', [clase])
  return runningStat
}

/* THROWING STATS SERVICE */

const getThrowingStatsIds = async () => {
  const [throwingStats] = await pool.query('SELECT id FROM throwing')
  return throwingStats.map(({ id }) => id)
}

const getThrowingStats = async () => {
  const [throwingStats] = await pool.query(`SELECT ${THROWING_ROWS}, ${ROWS} FROM throwing ${innerJoin('throwing')}`)
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
  // SELECT ${FIELDING_ROWS}, ${ROWS} FROM fielding ${innerJoin('fielding')}
  const [fieldingStats] = await pool.query(`SELECT *, atleta.nombre, atleta.clase, atleta.posicion FROM fielding ${innerJoin('fielding')}`)
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

const getFieldingStatsByIdPlayer = async (id) => {
  const [fieldingStats] = await pool.query(`SELECT date_format(fecha_evaluacion, "%d/%m/%y") as fecha_evaluacion, ${FIELDING_ROWS} FROM fielding WHERE id_atleta = ?`, [id])
  return fieldingStats
}

const getMakeupStats = async () => {
  const [makeupStats] = await pool.query(`SELECT ${MAKEUP_ROWS}, ${ROWS} FROM makeup ${innerJoin('makeup')}`)
  return makeupStats
}

const getMakeUpStatsByIdPlayer = async (id) => {
  const [makeupStats] = await pool.query(`SELECT date_format(fecha_evaluacion, "%d/%m/%y") as fecha_evaluacion, ${MAKEUP_ROWS} FROM makeup WHERE id_atleta = ?`, [id])
  return makeupStats
}

const getMakeupStatsId = async () => {
  const [makeupStats] = await pool.query('SELECT id FROM makeup')
  return makeupStats.map(({ id }) => id)
}

const createMakeupStat = async (makeupStat) => {
  const [newMakeupStat] = await pool.query('INSERT INTO makeup SET ?', [makeupStat])
  return newMakeupStat
}

const updateMakeupStat = async (id, makeupStat) => {
  const [updatedMakeupStat] = await pool.query('UPDATE makeup SET ? WHERE id = ?', [makeupStat, id])
  return updatedMakeupStat
}

const deleteMakeupStat = async (id) => {
  const [makeupStat] = await pool.query('SELECT * FROM makeup WHERE id = ?', [id])
  await pool.query('DELETE FROM makeup WHERE id = ?', [id])
  return makeupStat
}

const getThrowingStatsByIdPlayer = async (id) => {
  const [throwingStats] = await pool.query(`SELECT date_format(fecha_evaluacion, "%d/%m/%y") as fecha_evaluacion, ${THROWING_ROWS} FROM throwing WHERE id_atleta = ?`, [id])
  return throwingStats
}

const getPitchingStats = async () => {
  const [pitchingStats] = await pool.query('SELECT * FROM pitching')
  return pitchingStats
}

const getPitchingStatById = async (id) => {
  const [pitchingStat] = await pool.query('SELECT * FROM pitching WHERE id = ?', [id])
  return pitchingStat
}

const getPitchingStatByIdPlayer = async (id) => {
  const [pitchingStats] = await pool.query('SELECT * FROM pitching WHERE id_atleta = ?', [id])
  return pitchingStats
}

const createPitchingStat = async (pitchingStat) => {
  const [newPitchingStat] = await pool.query('INSERT INTO pitching SET ?', [pitchingStat])
  return newPitchingStat
}

const updatePitchingStat = async (id, pitchingStat) => {
  const [updatedPitchingStat] = await pool.query('UPDATE pitching SET ? WHERE id = ?', [pitchingStat, id])
  return updatedPitchingStat
}

const deletePitchingStat = async (id) => {
  const [pitchingStat] = await pool.query('SELECT * FROM pitching WHERE id = ?', [id])
  await pool.query('DELETE FROM pitching WHERE id = ?', [id])
  return pitchingStat
}

const getIdPlayersOfStat = async (table) => {
  // SELECT DISTINCT id_atleta, clase FROM running INNER JOIN atleta ON running.id_atleta = atleta.cedula WHERE atleta.estado = "Activo";
  const [ids] = await pool.query(`SELECT DISTINCT id_atleta FROM ${table} INNER JOIN atleta ON ${table}.id_atleta = atleta.cedula WHERE atleta.estado = "Activo"`)
  return ids
}

const getFirstBaseStatByIdPlayer = async (id) => {
  const [firstBaseStat] = await pool.query('SELECT clase, lanzamiento_primera FROM throwing INNER JOIN atleta ON throwing.id_atleta = atleta.cedula WHERE id_atleta = ? ORDER BY fecha_evaluacion DESC LIMIT 1;', [id])
  return firstBaseStat[0]
}
const getRowFromTableByIdWithClass = async (table, atribute, id) => {
  const [row] = await pool.query(`SELECT clase, ${atribute} FROM ${table} INNER JOIN atleta ON ${table}.id_atleta = atleta.cedula WHERE id_atleta = ? ORDER BY fecha_evaluacion DESC LIMIT 1;`, [id])
  return row[0]
}

const getAtletasInfo = async () => {
  const [atletas] = await pool.query('SELECT nombre, cedula FROM atleta')
  return atletas
}

export default {
  getAllClases,
  getAtletasInfo,
  getExistIdPlayer,
  getArrayOfDateById,
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
  getIdPlayerOfRunningStats,
  getRunningStatsByIdPlayer,
  getRunningSixtyYardStatByIdPlayer,
  getRunningSixtyYardStatByClass,
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
  nextId,
  getFieldingStatsByIdPlayer,
  getHittingStatsByIdPlayer,
  getThrowingStatsByIdPlayer,
  getPitchingStats,
  getPitchingStatById,
  getPitchingStatByIdPlayer,
  createPitchingStat,
  updatePitchingStat,
  deletePitchingStat,
  getIdPlayersOfStat,
  getFirstBaseStatByIdPlayer,
  getRowFromTableByIdWithClass,
  getBirthDateById,
  existPlayer,
  getMakeupStats,
  getMakeUpStatsByIdPlayer,
  createMakeupStat,
  updateMakeupStat,
  deleteMakeupStat,
  getMakeupStatsId
}
