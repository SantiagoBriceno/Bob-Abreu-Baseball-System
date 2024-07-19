import { RUTA_MAKE_UP } from '../constants/routes'
const auth = () => JSON.parse(window.localStorage.getItem('auth'))

export const getAllMakeUp = async () => {
  const response = await fetch(RUTA_MAKE_UP, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + auth().token
    }
  })
  return response.json()
}

export const getMakeUpById = async (id) => {
  const response = await fetch(RUTA_MAKE_UP + '/' + id, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + auth().token
    }
  })
  return response.json()
}

export const getMakeUpByIdPlayer = async (id) => {
  const response = await fetch(RUTA_MAKE_UP + '/player/' + id, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + auth().token
    }
  })
  return response.json()
}

export const createMakeUp = async (makeUp) => {
  const response = await fetch(RUTA_MAKE_UP, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + auth().token
    },
    body: JSON.stringify(makeUp)
  })
  return response
}

export const updateMakeUp = async (id, makeUp) => {
  const response = await fetch(RUTA_MAKE_UP + '/' + id, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + auth().token
    },
    body: JSON.stringify(makeUp)
  })
  return response
}

export const deleteMakeUp = async (id) => {
  const response = await fetch(RUTA_MAKE_UP + '/' + id, {
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + auth().token
    }
  })
  return response.json()
}
