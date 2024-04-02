import service from '../../../../service/v1/deportivo/estadisticas.service.js'
import { isValidEntitie, existStat } from '../../../../utils/formats/estadisticas.js'
import { postAuditoria, patchAuditoria, deleteAuditoria } from '../../../../middleware/auditoria.js'
import { make_up } from '../../../../utils/entities/main.js'

export const getMakeUpStats = async (req, res) => {
  try {
    const makeUpStats = await service.getMakeUpStats()
    if (makeUpStats.length === 0) {
      res.status(404).json({ message: 'No make up stats found' })
    } else {
      res.status(200).json(makeUpStats)
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getMakeUpStatByIdPlayer = async (req, res) => {
  const { id } = req.params
  try {
    const makeUpStats = await service.getMakeUpStatsByIdPlayer(id)
    if (makeUpStats.length === 0) {
      res.status(404).json({ message: 'No make up stats found' })
    } else {
      res.status(200).json(makeUpStats)
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const createMakeUpStat = async (req, res, next) => {
  const makeUpStat = req.body
  const nextId = await service.nextId('make_up')
  console.log(nextId, 'nextId')
  if (isValidEntitie(make_up, makeUpStat)) {
    try {
      const id_auditoria = await postAuditoria({ entity: 'make_up', user: req.user, body: makeUpStat, id: nextId })
      makeUpStat.id_auditoria = id_auditoria
      const newMakeUpStat = await service.createMakeUpStat(makeUpStat)
      res.status(201).json(newMakeUpStat)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  } else {
    res.status(400).json({ message: 'Invalid make up stat' })
  }
}

export const updateMakeUpStat = async (req, res, next) => {
  const { id } = req.params
  const makeUpStat = req.body
  try {
    const ids = await service.getMakeUpStatsIds()
    if (existStat(ids, id)) {
      const id_auditoria = await patchAuditoria({ entity: 'make_up', user: req.user, body: makeUpStat, id })
      makeUpStat.id_auditoria = id_auditoria
      const updateMakeUpStat = await service.updateMakeUpStat(id, makeUpStat)
      res.status(200).json(updateMakeUpStat)
    } else {
      res.status(400).json({ message: 'Invalid make up stat' })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteMakeUpStat = async (req, res) => {
  const { id } = req.params
  try {
    const ids = await service.getMakeUpStatsIds()
    if (existStat(ids, id)) {
      const deletedMakeUpStat = await service.deleteMakeupStat(id)
      res.status(200).json(deletedMakeUpStat)
      await deleteAuditoria({ entity: 'make_up', user: req.user, body: deletedMakeUpStat, id })
    } else {
      res.status(404).json({ message: 'Make up stat not found' })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
