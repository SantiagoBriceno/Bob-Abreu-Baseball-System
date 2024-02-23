/* eslint-disable camelcase */
import service from '../../../service/v1/deportivo/estadisticas.service.js'
import serviceAthlete from '../../../service/v1/administracion/atleta.service.js'
import { existStat } from '../../../utils/formats/estadisticas.js'

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
