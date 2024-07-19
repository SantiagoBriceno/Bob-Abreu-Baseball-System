import { atleta as structure } from '../entities/main.js'

const isValidAtleta = (atleta) => {
  if (Object.keys(atleta).length !== Object.keys(structure).length) {
    return false
  }
  // atleta posee nulo o vacio en algun campo, retorna false, sino true
  return Object.keys(structure).every(key => {
    return Object.keys(atleta).includes(key) && atleta[key] !== '' && atleta[key]
  })
}

const existAtleta = (cedulas, cedula) => {
  if (cedulas.length === 0) {
    return false
  } else {
    return cedulas.includes(cedula)
  }
}

export { isValidAtleta, existAtleta }
