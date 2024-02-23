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
  const response = await fetch(`${RUTA_ATLETAS}/${id}`)
  return response.json()
}

export const createAtleta = async (atleta) => {
  const formData = new FormData()
  formData.append('nombre', atleta.nombre)
  formData.append('cedula', atleta.cedula)
  formData.append('tlf', atleta.tlf)
  formData.append('lugar_nacimiento', atleta.lugar_nacimiento)
  formData.append('fecha_nacimiento', atleta.fecha_nacimiento)
  formData.append('posicion', atleta.posicion)
  formData.append('estado', atleta.estado)
  formData.append('foto', atleta.foto)
  formData.append('hitting', atleta.hitting)
  const boundary = '----WebKitFormBoundary7MA4YWxkTrZu0gW'
  const multipartString = formDataToMultipartString(formData, boundary)

  const response = await fetch(RUTA_ATLETAS, {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + auth().token,
      'Content-Type': `multipart/form-data; boundary=${boundary}`
    },
    body: multipartString
  })
  return response
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

const formDataToMultipartString = (formData, boundary) => {
  let multipartString = ''
  for (const [key, value] of formData.entries()) {
    if (value instanceof File) {
      multipartString += `--${boundary}\r\nContent-Disposition: form-data; name="${key}"; filename="${value.name}"\r\nContent-Type: ${value.type}\r\n\r\n`
      const reader = new FileReader()
      reader.readAsBinaryString(value)
      reader.onload = () => {
        multipartString += reader.result
      }
      multipartString += '\r\n'
    } else {
      multipartString += `--${boundary}\r\nContent-Disposition: form-data; name="${key}"\r\n\r\n${value}\r\n`
    }
  }
  multipartString += `--${boundary}--`
  console.log('multipartString', multipartString)
  return multipartString
}
