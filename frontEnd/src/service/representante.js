import { RUTA_REPRESENTANTES } from '../constants/routes'

export const getAllRepresentantes = async (token) => {
  const response = await fetch({
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + token,
      Accept: 'application/json'
    }
  }, RUTA_REPRESENTANTES)
  return response.json()
}

export const getRepresentante = async (id) => {
  const response = await fetch({
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + window.localStorage.getItem('auth').token
    }
  }, `${RUTA_REPRESENTANTES}/${id}`)
  return response.json()
}

export const createRepresentante = async (representante) => {
  const response = await fetch(RUTA_REPRESENTANTES, {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + window.localStorage.getItem('token'),
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(representante)
  })
  return response.json()
}

export const updateRepresentante = async (id, representante) => {
  const response = await fetch(`${RUTA_REPRESENTANTES}/${id}`, {
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + window.localStorage.getItem('token'),
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(representante)
  })
  return response.json()
}

export const deleteRepresentante = async (id) => {
  const response = await fetch(`${RUTA_REPRESENTANTES}/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + window.localStorage.getItem('token')
    }
  })
  return response.json()
}

export const getRepresentanteByCedula = async (cedula) => {
  const response = await fetch(`${RUTA_REPRESENTANTES}/cedula/${cedula}`)
  return response.json()
}
