import service from '../../../../service/v1/deportivo/estadisticas.service.js'
import { postAuditoria, patchAuditoria, deleteAuditoria } from '../../../../middleware/auditoria.js'
import { isValidEntitie, existStat } from '../../../../utils/formats/estadisticas.js'
import { pitching } from '../../../../utils/entities/main.js'
/* eslint-disable camelcase */

export const getPitchingStats = async (req, res) => {
  try {
    const atletas = await service.getAtletasInfo()
    const pitchingStats = await service.getPitchingStats()
    pitchingStats.map((pitchingStat) => {
      pitchingStat.fecha_evaluacion = new Date(pitchingStat.fecha_evaluacion).toISOString().split('T')[0]
      return null
    })
    if (pitchingStats.length === 0) {
      res.status(404).json({ message: 'No pitching stats found' })
    } else {
      res.status(200).json({
        pitchingStats,
        atletas

      })
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
