import service from '../../../../service/v1/deportivo/estadisticas.service.js'
import { isValidEntitie, existStat } from '../../../../utils/formats/estadisticas.js'
import { fielding } from '../../../../utils/entities/main.js'
/* eslint-disable camelcase */

export const getFieldingStats = async (req, res) => {
  try {
    const fieldingStats = await service.getFieldingStats()
    fieldingStats.map((fieldingStat) => {
      fieldingStat.fecha_evaluacion = new Date(fieldingStat.fecha_evaluacion).toISOString().split('T')[0]
      return null
    })
    const atletas = await service.getAtletasInfo()
    if (fieldingStats.length === 0) {
      res.status(404).json({ message: 'No fielding stats found', atletas })
    } else {
      res.status(200).json({
        fieldingStats,
        atletas
      })
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

export const deleteFieldingStat = async (req, res, next) => {
  const { id } = req.params
  try {
    const ids = await service.getFieldingStatsIds()
    if (existStat(ids, id)) {
      await service.deleteFieldingStat(id)
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
