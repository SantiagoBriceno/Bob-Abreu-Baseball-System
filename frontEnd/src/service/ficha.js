import { RUTA_ANTROPOMETRIA } from '../constants/routes'
export const getFichaData = async () => {
  const response = await fetch(RUTA_ANTROPOMETRIA + '/g/ficha')
  const data = await response.json()
  return data
}

export const getFichaDataById = async (id) => {
  const response = await fetch(RUTA_ANTROPOMETRIA + '/g/ficha/' + id)
  const data = await response.json()
  return data
}
