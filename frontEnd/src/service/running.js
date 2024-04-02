import { RUTA_RUNNING } from '../constants/routes'
const auth = () => JSON.parse(window.localStorage.getItem('auth'))

export const getAllRunning = async () => {
  const response = await fetch(RUTA_RUNNING, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + auth().token
    }
  })
  return response.json()
}

export const getRunningById = async (id) => {
  const response = await fetch(RUTA_RUNNING + '/' + id, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + auth().token
    }
  })
  return response.json()
}

export const getRunningByIdPlayer = async (id) => {
  const response = await fetch(RUTA_RUNNING + '/player/' + id, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + auth().token
    }
  })
  return response.json()
}

export const createRunning = async (running) => {
  const response = await fetch(RUTA_RUNNING, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + auth().token
    },
    body: JSON.stringify(running)
  })
  return response
}

export const updateRunning = async (id, running) => {
  const response = await fetch(RUTA_RUNNING + '/' + id, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + auth().token
    },
    body: JSON.stringify(running)
  })
  return response
}

export const deleteRunning = async (id) => {
  const response = await fetch(RUTA_RUNNING + '/' + id, {
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + auth().token
    }
  })
  return response.json()
}
