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

export const createUser = async (user) => {
  const response = await fetch(RUTA_REGISTER, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + auth().token
    },
    body: JSON.stringify(user)
  })
  return response
}

export const deleteUser = async (cedula) => {
  const response = await fetch(`${RUTA_REGISTER}/${cedula}`, {
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + auth().token
    }
  })
  return response
}
