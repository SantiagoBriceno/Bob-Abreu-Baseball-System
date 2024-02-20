/* eslint-disable camelcase */
import service from '../../../service/v1/deportivo/estadisticas.service.js'
import serviceAthlete from '../../../service/v1/administracion/atleta.service.js'
import { postAuditoria, patchAuditoria, deleteAuditoria } from '../../../middleware/auditoria.js'
import { isValidEntitie, existStat } from '../../../utils/formats/estadisticas.js'
import { running, hitting, throwing, fielding, pitching } from '../../../utils/entities/main.js'

/* HITTING STATS CONTROLLERS */
export const getHittingStats = async (req, res) => {
  try {
    const hittingStats = await service.getHittingStats()
    if (hittingStats.length === 0) {
      res.status(404).json({ message: 'No hitting stats found' })
    } else {
      res.status(200).json(hittingStats)
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getHittingStatById = async (req, res) => {
  const { id } = req.params
  try {
    const ids = await service.getHittingStatsIds()
    if (existStat(ids, id)) {
      const hittingStat = await service.getHittingStatById(id)
      res.status(200).json(hittingStat)
    } else {
      res.status(404).json({ message: 'Hitting stat not found' })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getHittingStatByIdPlayer = async (req, res) => {
  const { id } = req.params
  try {
    const hittingStats = await service.getHittingStatByIdPlayer(id)
    if (hittingStats.length === 0) {
      res.status(404).json({ message: 'No hitting stats found' })
    } else {
      res.status(200).json(hittingStats)
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const createHittingStat = async (req, res) => {
  const hittingStat = req.body
  const nextId = await service.nextId('hitting')
  console.log(nextId)
  if (isValidEntitie(hitting, hittingStat)) {
    try {
      const id_auditoria = await postAuditoria({ entity: 'hitting', user: req.user, body: hittingStat, id: nextId })
      hittingStat.id_auditoria = id_auditoria
      const newHittingStat = await service.createHittingStat(hittingStat)
      res.status(201).json(newHittingStat)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  } else {
    res.status(400).json({ message: 'Estadisticas invalidas' })
  }
}

export const updateHittingStat = async (req, res) => {
  const { id } = req.params
  const hittingStat = req.body

  try {
    const ids = await service.getHittingStatsIds()
    if (existStat(ids, id)) {
      const id_auditoria = await patchAuditoria({ entity: 'hitting', user: req.user, body: hittingStat, id })
      hittingStat.id_auditoria = id_auditoria
      const updatedHittingStat = await service.updateHittingStat(id, hittingStat)
      res.status(200).json(updatedHittingStat)
    } else {
      res.status(404).json({ message: 'Hitting stat not found' })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteHittingStat = async (req, res) => {
  const { id } = req.params
  try {
    const ids = await service.getHittingStatsIds()
    if (existStat(ids, id)) {
      const deletedHittingStat = await service.deleteHittingStat(id)
      res.status(200).json(deletedHittingStat)
      await deleteAuditoria({ entity: 'hitting', user: req.user, body: deletedHittingStat, id })
    } else {
      res.status(404).json({ message: 'Hitting stat not found' })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

/* RUNNING STATS CONTROLLERS */
export const getRunningStats = async (req, res) => {
  try {
    const runningStats = await service.getRunningStats()
    if (runningStats.length === 0) {
      res.status(404).json({ message: 'No running stats found' })
    } else {
      res.status(200).json(runningStats)
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getRunningStatById = async (req, res) => {
  const { id } = req.params
  try {
    const ids = await service.getRunningStatsIds()
    if (existStat(ids, id)) {
      const runningStat = await service.getRunningStatById(id)
      res.status(200).json(runningStat)
    } else {
      res.status(404).json({ message: 'Running stat not found' })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getRunningStatByIdPlayer = async (req, res) => {
  const { id } = req.params
  try {
    const runningStats = await service.getRunningStatByIdPlayer(id)
    if (runningStats.length === 0) {
      res.status(404).json({ message: 'No running stats found' })
    } else {
      res.status(200).json(runningStats)
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const createRunningStat = async (req, res) => {
  const runningStat = req.body
  const nextId = await service.nextId('running')
  if (isValidEntitie(running, runningStat)) {
    try {
      const id_auditoria = await postAuditoria({ entity: 'running', user: req.user, body: runningStat, id: nextId })
      runningStat.id_auditoria = id_auditoria
      const newRunningStat = await service.createRunningStat(runningStat)
      res.status(201).json(newRunningStat)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  } else {
    res.status(400).json({ message: 'Estadisticas invalidas' })
  }
}

export const updateRunningStat = async (req, res) => {
  const { id } = req.params
  const runningStat = req.body

  try {
    const ids = await service.getRunningStatsIds()
    if (existStat(ids, id)) {
      const id_auditoria = await patchAuditoria({ entity: 'running', user: req.user, body: runningStat, id })
      runningStat.id_auditoria = id_auditoria
      const updatedRunningStat = await service.updateRunningStat(id, runningStat)
      res.status(200).json(updatedRunningStat)
    } else {
      res.status(404).json({ message: 'Running stat not found' })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteRunningStat = async (req, res) => {
  const { id } = req.params
  try {
    const ids = await service.getRunningStatsIds()
    if (existStat(ids, id)) {
      const deletedRunningStat = await service.deleteRunningStat(id)
      res.status(200).json(deletedRunningStat)
      await deleteAuditoria({ entity: 'running', user: req.user, body: deletedRunningStat, id })
    } else {
      res.status(404).json({ message: 'Running stat not found' })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getSixtyYardStatByClass = async (req, res) => {
  // Aqui tengo los ids de todos los players que tienen stats de running
  const ids = await service.getIdPlayerOfRunningStats()
  // luego los recorro y por cada uno obtengo la ultima estadistica de 60 yardas y los acumulo segun su clase
  const cantAtletasPerClass = await service.getAllClases()
  const sixtyYardStats = []
  for (const id of ids) {
    const sixtyYardStat = await service.getRunningSixtyYardStatByIdPlayer(id.id_atleta)
    sixtyYardStats.push(sixtyYardStat)
  }

  const acumPorClases = {}
  sixtyYardStats.map((stat) => {
    const { clase, velocidad_sesenta } = stat
    acumPorClases[clase] = acumPorClases[clase] ? acumPorClases[clase] += velocidad_sesenta : velocidad_sesenta
    return null
  })

  cantAtletasPerClass.map((item) => {
    const { clase, cant_atletas } = item
    acumPorClases[clase] = acumPorClases[clase] / cant_atletas
    return null
  })

  console.log('cantidad de atletas por clase', cantAtletasPerClass)
  console.log('Acumulador de velocidades por clase', acumPorClases)
  const data = {
    label: Object.keys(acumPorClases),
    values: Object.values(acumPorClases)
  }
  return res.status(200).json(data)
}

/* THROWING STATS CONTROLLERS */
export const getThrowingStats = async (req, res) => {
  try {
    const throwingStats = await service.getThrowingStats()
    if (throwingStats.length === 0) {
      res.status(404).json({ message: 'No throwing stats found' })
    } else {
      res.status(200).json(throwingStats)
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getThrowingStatById = async (req, res) => {
  const { id } = req.params
  try {
    const ids = await service.getThrowingStatsIds()
    if (existStat(ids, id)) {
      const throwingStat = await service.getThrowingStatById(id)
      res.status(200).json(throwingStat)
    } else {
      res.status(404).json({ message: 'Throwing stat not found' })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getThrowingStatByIdPlayer = async (req, res) => {
  const { id } = req.params
  try {
    const throwingStats = await service.getThrowingStatsByIdPlayer(id)
    if (throwingStats.length === 0) {
      res.status(404).json({ message: 'No throwing stats found' })
    } else {
      res.status(200).json(throwingStats)
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const createThrowingStat = async (req, res) => {
  const throwingStat = req.body
  const nextId = await service.nextId('throwing')
  if (isValidEntitie(throwing, throwingStat)) {
    try {
      const id_auditoria = await postAuditoria({ entity: 'throwing', user: req.user, body: throwingStat, id: nextId })
      throwingStat.id_auditoria = id_auditoria
      const newThrowingStat = await service.createThrowingStat(throwingStat)
      res.status(201).json(newThrowingStat)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  } else {
    res.status(400).json({ message: 'Estadisticas invalidas' })
  }
}

export const updateThrowingStat = async (req, res) => {
  const { id } = req.params
  const throwingStat = req.body

  try {
    const ids = await service.getThrowingStatsIds()
    if (existStat(ids, id)) {
      const id_auditoria = await patchAuditoria({ entity: 'throwing', user: req.user, body: throwingStat, id })
      throwingStat.id_auditoria = id_auditoria
      const updatedThrowingStat = await service.updateThrowingStat(id, throwingStat)
      res.status(200).json(updatedThrowingStat)
    } else {
      res.status(404).json({ message: 'Throwing stat not found' })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteThrowingStat = async (req, res) => {
  const { id } = req.params
  try {
    const ids = await service.getThrowingStatsIds()
    if (existStat(ids, id)) {
      const deletedThrowingStat = await service.deleteThrowingStat(id)
      res.status(200).json(deletedThrowingStat)
      await deleteAuditoria({ entity: 'throwing', user: req.user, body: deletedThrowingStat, id })
    } else {
      res.status(404).json({ message: 'Throwing stat not found' })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

/* FIELDING STATS CONTROLLERS */
export const getFieldingStats = async (req, res) => {
  try {
    const fieldingStats = await service.getFieldingStats()
    if (fieldingStats.length === 0) {
      res.status(404).json({ message: 'No fielding stats found' })
    } else {
      res.status(200).json(fieldingStats)
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getFieldingStatById = async (req, res) => {
  const { id } = req.params
  try {
    const ids = await service.getFieldingStatsIds()
    if (existStat(ids, id)) {
      const fieldingStat = await service.getFieldingStatById(id)
      res.status(200).json(fieldingStat)
    } else {
      res.status(404).json({ message: 'Fielding stat not found' })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getFieldingStatByIdPlayer = async (req, res) => {
  const { id } = req.params
  try {
    const fieldingStats = await service.getFieldingStatsByIdPlayer(id)
    if (fieldingStats.length === 0) {
      res.status(404).json({ message: 'No fielding stats found' })
    } else {
      res.status(200).json(fieldingStats)
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// PRUEBA
export const createFieldingStat = async (req, res, next) => {
  const fieldingStat = req.body
  const nextId = await service.nextId('fielding')
  console.log(nextId, 'nextId')
  if (isValidEntitie(fielding, fieldingStat)) {
    try {
      const nextAuditoriaId = await service.nextId('auditoria')
      console.log(nextAuditoriaId, 'nextAuditoriaId')
      fieldingStat.id_auditoria = nextAuditoriaId
      await service.createFieldingStat(fieldingStat)
      req.entity = 'fielding'
      req.data = fieldingStat
      req.id = nextId
      next()
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  } else {
    res.status(400).json({ message: 'Estadisticas invalidas' })
  }
}

export const updateFieldingStat = async (req, res, next) => {
  const { id } = req.params
  const fieldingStat = req.body

  try {
    const ids = await service.getFieldingStatsIds()
    if (existStat(ids, id)) {
      const updatedFieldingStat = await service.updateFieldingStat(id, fieldingStat)
      req.data = updatedFieldingStat
      req.entity = 'fielding'
      req.id = id
      next()
    } else {
      res.status(404).json({ message: 'Fielding stat not found' })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// PITCHING STATS CONTROLLERS

export const getPitchingStats = async (req, res) => {
  try {
    const pitchingStats = await service.getPitchingStats()
    if (pitchingStats.length === 0) {
      res.status(404).json({ message: 'No pitching stats found' })
    } else {
      res.status(200).json(pitchingStats)
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getPitchingStatById = async (req, res) => {
  const { id } = req.params
  try {
    const ids = await service.getPitchingStatsIds()
    if (existStat(ids, id)) {
      const pitchingStat = await service.getPitchingStatById(id)
      res.status(200).json(pitchingStat)
    } else {
      res.status(404).json({ message: 'Pitching stat not found' })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getPitchingStatByIdPlayer = async (req, res) => {
  const { id } = req.params
  try {
    const pitchingStats = await service.getPitchingStatByIdPlayer(id)
    if (pitchingStats.length === 0) {
      res.status(404).json({ message: 'No pitching stats found' })
    } else {
      res.status(200).json(pitchingStats)
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const createPitchingStat = async (req, res) => {
  const pitchingStat = req.body
  const nextId = await service.nextId('pitching')
  if (isValidEntitie(pitching, pitchingStat)) {
    try {
      const id_auditoria = await postAuditoria({ entity: 'pitching', user: req.user, body: pitchingStat, id: nextId })
      pitchingStat.id_auditoria = id_auditoria
      const newPitchingStat = await service.createPitchingStat(pitchingStat)
      res.status(201).json(newPitchingStat)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  } else {
    res.status(400).json({ message: 'Estadisticas invalidas' })
  }
}

export const updatePitchingStat = async (req, res) => {
  const { id } = req.params
  const pitchingStat = req.body

  try {
    const ids = await service.getPitchingStatsIds()
    if (existStat(ids, id)) {
      const id_auditoria = await patchAuditoria({ entity: 'pitching', user: req.user, body: pitchingStat, id })
      pitchingStat.id_auditoria = id_auditoria
      const updatedPitchingStat = await service.updatePitchingStat(id, pitchingStat)
      res.status(200).json(updatedPitchingStat)
    } else {
      res.status(404).json({ message: 'Pitching stat not found' })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const deletePitchingStat = async (req, res) => {
  const { id } = req.params
  try {
    const ids = await service.getPitchingStatsIds()
    if (existStat(ids, id)) {
      const deletedPitchingStat = await service.deletePitchingStat(id)
      res.status(200).json(deletedPitchingStat)
      await deleteAuditoria({ entity: 'pitching', user: req.user, body: deletedPitchingStat, id })
    } else {
      res.status(404).json({ message: 'Pitching stat not found' })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// OBTENER TODAS LAS STATS DE UN JUGADOR
export const getStatsByIdPlayer = async (req, res) => {
  const { id } = req.params
  // Primero verificamos si existe el id del jugador
  const ids = await serviceAthlete.getCedulas()
  if (existStat(ids, id) === false) {
    return res.status(404).json({ message: 'Jugador no encontrado' })
  }

  try {
    const hittingStats = await service.getHittingStatsByIdPlayer(id)
    const runningStats = await service.getRunningStatsByIdPlayer(id)
    const throwingStats = await service.getThrowingStatsByIdPlayer(id)
    const fieldingStats = await service.getFieldingStatsByIdPlayer(id)
    const pitchingStats = await service.getPitchingStatByIdPlayer(id)

    // Hacer el objeto de respuesta data, con los objetos de stats no vacios

    const data = {
      hitting: hittingStats || null,
      running: runningStats || null,
      throwing: throwingStats || null,
      fielding: fieldingStats || null,
      pitching: pitchingStats || null
    }

    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
