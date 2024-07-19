import { RUTA_ATLETAS } from '../constants/routes'
const auth = () => JSON.parse(window.localStorage.getItem('auth'))

export const getAllAtletas = async () => {
  const response = await fetch(RUTA_ATLETAS, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + auth().token
    }
  })
  return response.json()
}

export const getAtleta = async (id) => {
  const response = await fetch(`${RUTA_ATLETAS}/${id}`, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + auth().token
    }
  })
  return response.json()
}

export const getAtletaByIdReport = async (id) => {
  const response = await fetch(`${RUTA_ATLETAS}/report/pdf/${id}`, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + auth().token
    }
  })
  return response.json()
}

export const getAtletaImg = async (id) => {
  const response = await fetch(`${RUTA_ATLETAS}/img/public/${id}`, {
    method: 'GET'
  })
  return response
}

export const createAtleta = async (atleta) => {
  const response = await fetch(RUTA_ATLETAS, {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + auth().token
    },
    body: atleta
  })
  return response
}

export const updateAtleta = async (id, atleta) => {
  console.log('atleta', atleta)
  const response = await fetch(`${RUTA_ATLETAS}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + auth().token

    },
    body: JSON.stringify(atleta)
  })
  return response
}

export const deleteAtleta = async (id) => {
  const response = await fetch(`${RUTA_ATLETAS}/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + auth().token
    }
  })
  return response.json()
}
