import { RUTA_LESIONES } from '../constants/routes'
const auth = () => JSON.parse(window.localStorage.getItem('auth'))

export const getAllLesiones = async () => {
  const response = await fetch(RUTA_LESIONES, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + auth().token
    }
  })
  return response.json()
}

export const getLesionByIdPlayer = async (id) => {
  const response = await fetch(RUTA_LESIONES + '/player/' + id, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + auth().token
    }
  })
  return response.json()
}

export const createLesion = async (lesion) => {
  console.log('lesion', lesion)
  const response = await fetch(RUTA_LESIONES, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + auth().token
    },
    body: JSON.stringify(lesion)
  })
  return response
}

export const updateLesion = async (id, lesion) => {
  const response = await fetch(RUTA_LESIONES + '/' + id, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + auth().token
    },
    body: JSON.stringify(lesion)
  })
  return response
}

export const deleteLesion = async (id) => {
  const response = await fetch(RUTA_LESIONES + '/' + id, {
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + auth().token
    }
  })
  return response.json()
}
