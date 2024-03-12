import { RUTA_LESIONES } from '../constants/routes'
const auth = () => JSON.parse(window.localStorage.getItem('auth'))

export const getAllLesiones = async () => {
  const response = await fetch(RUTA_LESIONES, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + auth().token
    }
  })
  return response.json()
}
