import { atleta as structure } from '../entities/main.js'

const isValidAtleta = (atleta) => {
  return Object.keys(structure).every(key => {
    return Object.keys(atleta).includes(key)
  })
}

const existAtleta = (cedulas, cedula) => {
  return cedulas.includes(cedula)
}

export { isValidAtleta, existAtleta }
