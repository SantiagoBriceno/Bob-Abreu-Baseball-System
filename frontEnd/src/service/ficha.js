import { RUTA_ANTROPOMETRIA, RUTA_ANTROPOMETRIA_POST } from '../constants/routes'
const auth = () => JSON.parse(window.localStorage.getItem('auth'))
export const getFichaData = async () => {
  const response = await fetch(RUTA_ANTROPOMETRIA + '/g/ficha')
  const data = await response.json()
  return data
}

export const getFichaDataById = async (id) => {
  const response = await fetch(RUTA_ANTROPOMETRIA + '/g/ficha/' + id)
  const data = await response.json()
  return data
}

export const getFichaImg = async (id) => {
  const response = await fetch(RUTA_ANTROPOMETRIA + '/img/public/' + id)
  const data = await response
  return data
}

export const createFicha = async (data) => {
  const response = await fetch(RUTA_ANTROPOMETRIA_POST, {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + auth().token
    },
    body: data
  })
  return response
}
