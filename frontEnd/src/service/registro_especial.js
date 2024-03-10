import { RUTA_REGISTROS_ESPECIALES } from '../constants/routes'
const auth = () => JSON.parse(window.localStorage.getItem('auth'))

export const getAllRegistrosEspeciales = async () => {
  const response = await fetch(RUTA_REGISTROS_ESPECIALES, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + auth().token
    }
  })
  return response.json()
}
