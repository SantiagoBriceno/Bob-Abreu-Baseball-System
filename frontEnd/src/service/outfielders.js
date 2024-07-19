import { RUTA_ALL_OUTFIELDERS } from '../constants/routes'

const auth = () => JSON.parse(window.localStorage.getItem('auth'))

export const getAllOutfielders = async () => {
  const response = await fetch(RUTA_ALL_OUTFIELDERS, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + auth().token
    }
  })
  return response.json()
}
