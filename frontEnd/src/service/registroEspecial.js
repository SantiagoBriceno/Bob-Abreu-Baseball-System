import { RUTA_REGISTROS_ESPECIALES } from '../constants/routes'
const auth = () => JSON.parse(window.localStorage.getItem('auth'))

export const getAllRegistrosEspeciales = async () => {
  const response = await fetch(RUTA_REGISTROS_ESPECIALES, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + auth().token
    }
  })
  return response.json()
}

export const getRegistroEspecial = async (id) => {
  const response = await fetch({
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + auth().token
    }
  }, `${RUTA_REGISTROS_ESPECIALES}/${id}`)
  return response.json()
}

export const createRegistroEspecial = async (registroEspecial) => {
  console.log('registroEspecial', registroEspecial)
  const response = await fetch(RUTA_REGISTROS_ESPECIALES, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      Authorization: 'Bearer ' + auth().token
    },
    body: JSON.stringify(registroEspecial)
  })
  return response
}

export const updateRegistroEspecial = async (id, registroEspecial) => {
  const response = await fetch(`${RUTA_REGISTROS_ESPECIALES}/${id}`, {
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + auth().token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(registroEspecial)
  })
  return response
}

export const deleteRegistroEspecial = async (id) => {
  const response = await fetch(`${RUTA_REGISTROS_ESPECIALES}/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + auth().token
    }
  })
  return response.json()
}
