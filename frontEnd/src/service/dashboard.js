import { RUTA_DASHBOARD } from '../constants/routes'
const auth = () => JSON.parse(window.localStorage.getItem('auth'))

export const getDashboard = async () => {
  const response = await fetch(RUTA_DASHBOARD, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + auth().token
    }
  })
  return response.json()
}
