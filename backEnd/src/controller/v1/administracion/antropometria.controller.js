/* eslint-disable camelcase */
import service from '../../../service/v1/administracion/antropometria.service.js'
import { isValidEntrie } from '../../../utils/formats/validEntrie.js'
import { datos_generales as dg, perimetros_corporales as pc, indice_Masa_corporal as imc, indices_cintura_cadera as icc } from '../../../utils/entities/main.js'
import { postAuditoria } from '../../../middleware/auditoria.js'

export const getAllFichasAntropometricas = async (req, res) => {
  try {
    const response = await service.getAllFichasAntropometricas()
    res.status(200).json({ data: response.length > 0 ? response : 'No hay fichas antropometricas' })
  } catch (error) {
    console.log(error)
  }
}

export const getFichaAntropometricaById = async (req, res) => {
  try {
    const { id } = req.params
    const response = await service.getFichaAntropometricaById(id)
    res.status(200).json({ data: response.length > 0 ? response : 'No hay fichas antropometricas' })
  } catch (error) {
    console.log(error)
  }
}

export const createFichaAntropometrica = async (req, res) => {
  const { cedula, datos_generales, perimetros_corporales, indice_cintura_cadera, indice_masa_corporal } = req.body
  const id_ficha = await service.nextId('ficha_antropometrica')
  console.log(id_ficha, 'nextId')
  if ((!isValidEntrie(datos_generales, dg) || !isValidEntrie(perimetros_corporales, pc) || !isValidEntrie(indice_cintura_cadera, icc) || !isValidEntrie(indice_masa_corporal, imc)) && cedula && cedula !== '') {
    return res.status(400).json({ message: 'Por favor, llene todos los campos correctamente' })
  }
  try {
    datos_generales.id_ficha = id_ficha
    await service.createDatosGenerales(datos_generales)

    perimetros_corporales.id_ficha = id_ficha
    await service.createPerimetros(perimetros_corporales)

    indice_cintura_cadera.id_ficha = id_ficha
    await service.createICC(indice_cintura_cadera)

    indice_masa_corporal.id_ficha = id_ficha
    await service.createIMC(indice_masa_corporal)

    const ficha_antropometrica = {
      id_atleta: cedula
    }

    const id_auditoria = await postAuditoria({ entity: 'ficha_antropometrica', user: req.user, body: ficha_antropometrica, id: id_ficha })

    ficha_antropometrica.id_auditoria = id_auditoria
    const newFichaAntropometrica = await service.createFichaAntropometrica(ficha_antropometrica)
    res.status(201).json(newFichaAntropometrica)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteFichaAntropometrica = async (req, res) => {
  const { id } = req.params
  try {
    const response = await service.deleteFichaAntropometrica(id)
    res.status(200).json({ message: 'Ficha antropometrica eliminada', response })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// DATOS GENERALES DE LA FICHA ANTROPOMETRICA
export const getDatosGenerales = async (req, res) => {
  try {
    const response = await service.getAllDatosGenerales()
    res.status(200).json({ data: response.length > 0 ? response : 'No hay datos generales' })
  } catch (error) {
    console.log(error)
  }
}

export const getDatosGeneralesById = async (req, res) => {
  try {
    const { id } = req.params
    const response = await service.getDatosGeneralesById(id)
    res.status(200).json({ data: response.length > 0 ? response : 'No hay datos generales' })
  } catch (error) {
    console.log(error)
  }
}

export const getDatosGeneralesByIdFicha = async (req, res) => {
  try {
    const { id } = req.params
    const response = await service.getDatosGeneralesByIdFicha(id)
    res.status(200).json({ data: response.length > 0 ? response : 'No hay datos generales' })
  } catch (error) {
    console.log(error)
  }
}

// NO ESTA BIEN
export const getDatosGeneralesByIdAtleta = async (req, res) => {
  try {
    const { id } = req.params
    const response = await service.getDatosGeneralesByIdAtleta(id)
    res.status(200).json({ data: response.length > 0 ? response : 'No hay datos generales' })
  } catch (error) {
    console.log(error)
  }
}

// DATOS DE PERIMETROS CORPORALES DE LA FICHA ANTROPOMETRICA

export const getPerimetros = async (req, res) => {
  try {
    const response = await service.getAllPerimetros()
    res.status(200).json({ data: response.length > 0 ? response : 'No hay perimetros corporales' })
  } catch (error) {
    console.log(error)
  }
}

export const getPerimetrosById = async (req, res) => {
  try {
    const { id } = req.params
    const response = await service.getPerimetrosById(id)
    res.status(200).json({ data: response.length > 0 ? response : 'No hay perimetros corporales' })
  } catch (error) {
    console.log(error)
  }
}

export const getPerimetrosByIdFicha = async (req, res) => {
  try {
    const { id } = req.params
    const response = await service.getPerimetrosByIdFicha(id)
    res.status(200).json({ data: response.length > 0 ? response : 'No hay perimetros corporales' })
  } catch (error) {
    console.log(error)
  }
}

// NO ESTA BIEN
export const getPerimetrosByIdAtleta = async (req, res) => {
  try {
    const { id } = req.params
    const response = await service.getPerimetrosByIdAtleta(id)
    res.status(200).json({ data: response.length > 0 ? response : 'No hay perimetros corporales' })
  } catch (error) {
    console.log(error)
  }
}

// DATOS DE INDICE DE CINTURA CADERA DE LA FICHA ANTROPOMETRICA

export const getICC = async (req, res) => {
  try {
    const response = await service.getAllICC()
    res.status(200).json({ data: response.length > 0 ? response : 'No hay ICC' })
  } catch (error) {
    console.log(error)
  }
}

export const getICCById = async (req, res) => {
  try {
    const { id } = req.params
    const response = await service.getICCById(id)
    res.status(200).json({ data: response.length > 0 ? response : 'No hay ICC' })
  } catch (error) {
    console.log(error)
  }
}

export const getICCByIdFicha = async (req, res) => {
  try {
    const { id } = req.params
    const response = await service.getICCByIdFicha(id)
    res.status(200).json({ data: response.length > 0 ? response : 'No hay ICC' })
  } catch (error) {
    console.log(error)
  }
}

// NO ESTA BIEN
export const getICCByIdAtleta = async (req, res) => {
  try {
    const { id } = req.params
    const response = await service.getICCByIdAtleta(id)
    res.status(200).json({ data: response.length > 0 ? response : 'No hay ICC' })
  } catch (error) {
    console.log(error)
  }
}

// DATOS DE INDICE DE MASA CORPORAL DE LA FICHA ANTROPOMETRICA
export const getIMC = async (req, res) => {
  try {
    const response = await service.getAllIMC()
    res.status(200).json({ data: response.length > 0 ? response : 'No hay IMC' })
  } catch (error) {
    console.log(error)
  }
}

export const getIMCById = async (req, res) => {
  try {
    const { id } = req.params
    const response = await service.getIMCById(id)
    res.status(200).json({ data: response.length > 0 ? response : 'No hay IMC' })
  } catch (error) {
    console.log(error)
  }
}

export const getIMCByIdFicha = async (req, res) => {
  try {
    const { id } = req.params
    const response = await service.getIMCByIdFicha(id)
    res.status(200).json({ data: response.length > 0 ? response : 'No hay IMC' })
  } catch (error) {
    console.log(error)
  }
}

// NO ESTA BIEN
export const getIMCByIdAtleta = async (req, res) => {
  try {
    const { id } = req.params
    const response = await service.getIMCByIdAtleta(id)
    res.status(200).json({ data: response.length > 0 ? response : 'No hay IMC' })
  } catch (error) {
    console.log(error)
  }
}
