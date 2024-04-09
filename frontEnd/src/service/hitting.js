import { RUTA_HITTING } from '../constants/routes'
const auth = () => JSON.parse(window.localStorage.getItem('auth'))

export const getAllHitting = async () => {
  const response = await fetch(RUTA_HITTING, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + auth().token
    }
  })
  return response.json()
}

export const getHittingById = async (id) => {
  const response = await fetch(RUTA_HITTING + '/' + id, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + auth().token
    }
  })
  return response.json()
}

export const getHittingByIdPlayer = async (id) => {
  const response = await fetch(RUTA_HITTING + '/player/' + id, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + auth().token
    }
  })
  return response.json()
}

export const createHitting = async (hitting) => {
  console.log('hitting', hitting)
  const response = await fetch(RUTA_HITTING, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + auth().token
    },
    body: JSON.stringify(hitting)
  })
  return response
}

export const updateHitting = async (id, hitting) => {
  const response = await fetch(RUTA_HITTING + '/' + id, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + auth().token
    },
    body: JSON.stringify(hitting)
  })
  return response
}

export const deleteHitting = async (id) => {
  console.log('id', id)
  const response = await fetch(RUTA_HITTING + '/' + id, {
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + auth().token
    }
  })
  return response.json()
}
