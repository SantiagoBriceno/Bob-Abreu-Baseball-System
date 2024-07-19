import { representante as structure } from '../entities/main.js'

// Saber si un representante es válido y cumple con la estructura definida en ../entities/main
const isValidRepresentante = (representante) => {
  return Object.keys(structure).every(key => {
    return Object.keys(representante).includes(key) && representante[key] !== ''
  })
}

// Saber si un representante existe en la base de datos
const existRepresentante = (cedulas, cedula) => {
  return cedulas.includes(cedula)
}

export { isValidRepresentante, existRepresentante }
