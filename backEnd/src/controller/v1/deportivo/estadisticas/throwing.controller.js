/* eslint-disable camelcase */
import service from '../../../../service/v1/deportivo/estadisticas.service.js'
import { postAuditoria, patchAuditoria, deleteAuditoria } from '../../../../middleware/auditoria.js'
import { isValidEntitie, existStat } from '../../../../utils/formats/estadisticas.js'
import { throwing } from '../../../../utils/entities/main.js'

export const getThrowingStats = async (req, res) => {
  try {
    const throwingStats = await service.getThrowingStats()
    throwingStats.map((throwingStat) => {
      throwingStat.fecha_evaluacion = new Date(throwingStat.fecha_evaluacion).toISOString().split('T')[0]
      return null
    })
    const atletas = await service.getAtletasInfo()
    if (throwingStats.length === 0) {
      res.status(404).json({ message: 'No throwing stats found', atletas })
    } else {
      res.status(200).json({
        throwingStats,
        atletas
      })
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

export const getFirstBaseStatByClass = async (req, res) => {
  const ids = await service.getIdPlayersOfStat('throwing')

  if (ids.length === 0) {
    return res.status(404).json({ message: 'No throwing stats found' })
  }

  const cantAtletasPerClass = await service.getAllClases('throwing')

  const firstBaseStats = []
  for (const id of ids) {
    const firstBaseStat = await service.getFirstBaseStatByIdPlayer(id.id_atleta)
    firstBaseStats.push(firstBaseStat)
  }

  const acumPorClases = {}

  firstBaseStats.map((stat) => {
    const { clase, lanzamiento_primera } = stat
    acumPorClases[clase] = acumPorClases[clase] ? acumPorClases[clase] + lanzamiento_primera : lanzamiento_primera
    return null
  })

  cantAtletasPerClass.map((item) => {
    const { clase, cant_atletas } = item
    acumPorClases[clase] = acumPorClases[clase] / cant_atletas
    return null
  })

  const data = {
    label: Object.keys(acumPorClases),
    values: Object.values(acumPorClases)
  }
  return res.status(200).json(data)
}

export const getSecondBaseStatByClass = async (req, res) => {
  const ids = await service.getIdPlayersOfStat('throwing')

  if (ids.length === 0) {
    return res.status(404).json({ message: 'No throwing stats found' })
  }

  const cantAtletasPerClass = await service.getAllClases('throwing')

  const secondBaseStats = []
  for (const id of ids) {
    const secondBaseStat = await service.getRowFromTableByIdWithClass('throwing', 'lanzamiento_segunda', id.id_atleta)
    secondBaseStats.push(secondBaseStat)
  }

  const acumPorClases = {}

  secondBaseStats.map((stat) => {
    const { clase, lanzamiento_segunda } = stat
    acumPorClases[clase] = acumPorClases[clase] ? acumPorClases[clase] + lanzamiento_segunda : lanzamiento_segunda
    return null
  })

  cantAtletasPerClass.map((item) => {
    const { clase, cant_atletas } = item
    acumPorClases[clase] = acumPorClases[clase] / cant_atletas
    return null
  })

  const data = {
    label: Object.keys(acumPorClases),
    values: Object.values(acumPorClases)
  }
  return res.status(200).json(data)
}

export const getThirdBaseStatByClass = async (req, res) => {
  const ids = await service.getIdPlayersOfStat('throwing')

  if (ids.length === 0) {
    return res.status(404).json({ message: 'No throwing stats found' })
  }

  const cantAtletasPerClass = await service.getAllClases('throwing')

  const thirdBaseStats = []
  for (const id of ids) {
    const thirdBaseStat = await service.getRowFromTableByIdWithClass('throwing', 'lanzamiento_tercera', id.id_atleta)
    thirdBaseStats.push(thirdBaseStat)
  }

  const acumPorClases = {}

  thirdBaseStats.map((stat) => {
    const { clase, lanzamiento_tercera } = stat
    acumPorClases[clase] = acumPorClases[clase] ? acumPorClases[clase] + lanzamiento_tercera : lanzamiento_tercera
    return null
  })

  cantAtletasPerClass.map((item) => {
    const { clase, cant_atletas } = item
    acumPorClases[clase] = acumPorClases[clase] / cant_atletas
    return null
  })

  const data = {
    label: Object.keys(acumPorClases),
    values: Object.values(acumPorClases)
  }
  return res.status(200).json(data)
}
