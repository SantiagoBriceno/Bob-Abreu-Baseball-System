import service from '../../../../service/v1/deportivo/estadisticas.service.js'
import { postAuditoria, patchAuditoria, deleteAuditoria } from '../../../../middleware/auditoria.js'
import { isValidEntitie, existStat } from '../../../../utils/formats/estadisticas.js'
import { hitting } from '../../../../utils/entities/main.js'
/* eslint-disable camelcase */
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

export const getBatSpeedStatByClass = async (req, res) => {
  const ids = await service.getHittingStatsIds()

  if (ids.length === 0) {
    return res.status(404).json({ message: 'No hitting stats found' })
  }

  const cantAtletasPerClass = await service.getAllClases('hitting')

  const batSpeedStats = []

  for (const id of ids) {
    const hittingStat = await service.getRowFromTableByIdWithClass('hitting', 'bat_speed', id.id_atleta)
    batSpeedStats.push(hittingStat)
  }

  const acumPorClases = {}

  batSpeedStats.map((stat) => {
    const { clase, bat_speed } = stat
    acumPorClases[clase] = acumPorClases[clase] ? acumPorClases[clase] + bat_speed : bat_speed
    return null
  })

  cantAtletasPerClass.map((item) => {
    const { clase, cant_atletas } = item
    acumPorClases[clase] = acumPorClases[clase] / cant_atletas
    return null
  })

  const data = {
    label: Object.keys(acumPorClases),
    data: Object.values(acumPorClases)
  }
  return res.status(200).json(data)
}
