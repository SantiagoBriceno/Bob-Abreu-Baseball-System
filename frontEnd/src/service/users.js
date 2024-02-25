import { RUTA_REGISTER } from '../constants/routes'
const auth = () => JSON.parse(window.localStorage.getItem('auth'))

export const getAllUsers = async () => {
  const response = await fetch(RUTA_REGISTER, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + auth().token
    }
  })
  console.log('response', response)
  return response.json()
}
