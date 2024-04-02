import { RUTA_FIELDING } from '../constants/routes'
const auth = () => JSON.parse(window.localStorage.getItem('auth'))

export const getAllFielding = async () => {
  const response = await fetch(RUTA_FIELDING, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + auth().token
    }
  })
  return response.json()
}

export const getFieldingById = async (id) => {
  const response = await fetch(RUTA_FIELDING + '/' + id, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + auth().token
    }
  })
  return response.json()
}

export const getFieldingByIdPlayer = async (id) => {
  const response = await fetch(RUTA_FIELDING + '/player/' + id, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + auth().token
    }
  })
  return response.json()
}

export const createFielding = async (fielding) => {
  const response = await fetch(RUTA_FIELDING, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + auth().token
    },
    body: JSON.stringify(fielding)
  })
  return response
}

export const updateFielding = async (id, fielding) => {
  const response = await fetch(RUTA_FIELDING + '/' + id, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + auth().token
    },
    body: JSON.stringify(fielding)
  })
  return response
}

export const deleteFielding = async (id) => {
  const response = await fetch(RUTA_FIELDING + '/' + id, {
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + auth().token
    }
  })
  return response.json()
}
