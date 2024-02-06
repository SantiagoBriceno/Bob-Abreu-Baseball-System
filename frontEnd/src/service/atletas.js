import { RUTA_ATLETAS } from '../constants/routes'

export const getAllAtletas = async () => {
  const response = await fetch({
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + window.localStorage.getItem('auth').token
    }
  }, RUTA_ATLETAS)
  return response.json()
}

export const getAtleta = async (id) => {
  const response = await fetch(`${RUTA_ATLETAS}/${id}`)
  return response.json()
}

export const createAtleta = async (atleta) => {
  const response = await fetch(RUTA_ATLETAS, {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + window.localStorage.getItem('token'),
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(atleta)
  })
  return response.json()
}

export const updateAtleta = async (id, atleta) => {
  const response = await fetch(`${RUTA_ATLETAS}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(atleta)
  })
  return response.json()
}

export const deleteAtleta = async (id) => {
  const response = await fetch(`${RUTA_ATLETAS}/${id}`, {
    method: 'DELETE'
  })
  return response.json()
}
