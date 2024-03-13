import { RUTA_PREDICCION_RUNNING } from '../constants/routes'

export const runningPrediction = async (id, days = '') => {
  const response = await fetch(`${RUTA_PREDICCION_RUNNING}?id=${id}&days=${days}`)
  const data = await response.json()
  return data
}
