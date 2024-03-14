import { RUTA_ANTROPOMETRIA } from '../constants/routes'
export const getFichaData = async () => {
  const response = await fetch(RUTA_ANTROPOMETRIA + '/g/ficha')
  const data = await response.json()
  return data
}
