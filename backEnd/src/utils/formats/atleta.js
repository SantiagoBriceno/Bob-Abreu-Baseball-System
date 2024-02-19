import { atleta as structure } from '../entities/main.js'

const isValidAtleta = (atleta) => {
  return Object.keys(structure).every(key => {
    return Object.keys(atleta).includes(key) && atleta[key] !== ''
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
