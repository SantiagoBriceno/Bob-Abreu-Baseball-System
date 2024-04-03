import { RUTA_REPRESENTANTES } from '../constants/routes'
const auth = () => JSON.parse(window.localStorage.getItem('auth'))

export const getAllRepresentantes = async () => {
  const response = await fetch(RUTA_REPRESENTANTES, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + auth().token
    }
  })
  return response.json()
}

export const getRepresentante = async (id) => {
  const response = await fetch({
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + auth().token
    }
  }, `${RUTA_REPRESENTANTES}/${id}`)
  return response.json()
}

export const createRepresentante = async (representante) => {
  const response = await fetch(RUTA_REPRESENTANTES, {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + auth().token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(representante)
  })
  return response
}

export const updateRepresentante = async (id, representante) => {
  const response = await fetch(`${RUTA_REPRESENTANTES}/${id}`, {
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + auth().token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(representante)
  })
  return response
}

export const deleteRepresentante = async (id) => {
  const response = await fetch(`${RUTA_REPRESENTANTES}/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + auth().token
    }
  })
  return response.json()
}

export const getRepresentanteByCedula = async (cedula) => {
  const response = await fetch(`${RUTA_REPRESENTANTES}/cedula/${cedula}`)
  return response.json()
}
