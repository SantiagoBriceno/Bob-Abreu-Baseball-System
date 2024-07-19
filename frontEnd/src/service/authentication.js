import { RUTA_LOGIN, RUTA_REGISTER } from '../constants/routes'
export const loginUser = async ({ username, password }) => {
  const response = await fetch(RUTA_LOGIN, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })
  return response.json()
}

export const registerUser = async ({ user }) => {
  const response = await fetch(RUTA_REGISTER, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
  return response.json()
}
