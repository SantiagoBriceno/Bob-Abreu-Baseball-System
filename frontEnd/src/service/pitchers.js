import { RUTA_ALL_PITCHERS } from '../constants/routes'
const auth = () => JSON.parse(window.localStorage.getItem('auth'))

export const getAllPitchers = async () => {
  const response = await fetch(RUTA_ALL_PITCHERS, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + auth().token
    }
  })
  return response.json()
}
