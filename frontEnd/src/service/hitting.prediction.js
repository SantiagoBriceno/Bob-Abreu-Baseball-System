import { RUTA_PREDICCION_HITTING } from '../constants/routes'

export const hittingPrediction = async (id, days = '') => {
  const response = await fetch(`${RUTA_PREDICCION_HITTING}?id=${id}&days=${days}`)
  const data = await response.json()
  return data
}
