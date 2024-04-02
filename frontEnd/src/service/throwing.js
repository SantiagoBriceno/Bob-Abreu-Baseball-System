import { RUTA_THROWING } from '../constants/routes'
const auth = () => JSON.parse(window.localStorage.getItem('auth'))

export const getAllThrowing = async () => {
  const response = await fetch(RUTA_THROWING, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + auth().token
    }
  })
  return response.json()
}

export const getThrowingById = async (id) => {
  const response = await fetch(RUTA_THROWING + '/' + id, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + auth().token
    }
  })
  return response.json()
}

export const getThrowingByIdPlayer = async (id) => {
  const response = await fetch(RUTA_THROWING + '/player/' + id, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + auth().token
    }
  })
  return response.json()
}

export const createThrowing = async (throwing) => {
  const response = await fetch(RUTA_THROWING, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + auth().token
    },
    body: JSON.stringify(throwing)
  })
  return response
}

export const updateThrowing = async (id, throwing) => {
  const response = await fetch(RUTA_THROWING + '/' + id, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + auth().token
    },
    body: JSON.stringify(throwing)
  })
  return response
}

export const deleteThrowing = async (id) => {
  const response = await fetch(RUTA_THROWING + '/' + id, {
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + auth().token
    }
  })
  return response.json()
}
