import service from '../../../service/v1/deportivo/estadisticas.service.js'
import { isValidHittingStat, existHittingStat } from '../../../utils/formats/estadisticas.js'
export const getHittingStats = async (req, res) => {
  try {
    const hittingStats = await service.getHittingStats()
    if (hittingStats.lenght === 0) {
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
    const hittingStats = await service.getHittingStats()
    if (existHittingStat(hittingStats, id)) {
      const hittingStat = await service.getHittingStatById(id)
      res.status(200).json(hittingStat)
    } else {
      res.status(404).json({ message: 'Hitting stat not found' })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const createHittingStat = async (req, res) => {}

export const updateHittingStat = async (req, res) => {}

export const deleteHittingStat = async (req, res) => {}
