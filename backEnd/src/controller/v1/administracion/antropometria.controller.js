/* eslint-disable camelcase */
import service from '../../../service/v1/administracion/antropometria.service.js'
import { isValidEntrie } from '../../../utils/formats/validEntrie.js'
import { datos_generales as dg, perimetros_corporales as pc, indice_Masa_corporal as imc, indices_cintura_cadera as icc, perfiles_fotograficos as pf } from '../../../utils/entities/main.js'
import { postAuditoria } from '../../../middleware/auditoria.js'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'

const CURRENT_DIR = dirname(fileURLToPath(import.meta.url))

export const getAllFichasAntropometricas = async (req, res) => {
  try {
    const data = await service.getAllFichasAntropometricas()
    res.status(200).json({ data: data.length > 0 ? data : 'No hay fichas antropometricas' })
  } catch (error) {
    console.log(error)
  }
}

export const getGeneralDataOfFicha = async (req, res) => {
  try {
    const response = await service.getGeneralDataOfFicha()
    res.status(200).json({ data: response.length > 0 ? response : 'No hay fichas antropometricas' })
  } catch (error) {
    console.log(error)
  }
}

export const getFichaAntropometricaById = async (req, res) => {
  try {
    const { id } = req.params
    const response = await service.getFichaAntropometricaById(id)
    console.log(response, 'response')
    res.status(200).json({ data: response.length > 0 || response ? response : 'No hay fichas antropometricas' })
  } catch (error) {
    console.log(error)
  }
}

export const getFichaAntropometricaByIdAtleta = async (req, res) => {
  try {
    const { id } = req.params
    const response = await service.getFichaAntropometricaByIdAtleta(id)
    console.log('response')
    res.status(200).json({ data: response.length > 0 ? response : 'No hay fichas antropometricas' })
  } catch (error) {
    console.log(error)
  }
}

export const createFichaAntropometrica = async (req, res) => {
  console.log(req.body.frente, 'req.body.frente')
  console.log(req.body.perfil, 'req.body.perfil')
  console.log(req.body.posterior, 'req.body.espalda')

  const { cedula } = req.body

  console.log(cedula, 'cedula')
  const {
    estatura_maxima,
    percentil_talla,
    longitud_de_pie,
    longitud_sentado,
    envergadura,
    imc,
    imc_ideal,
    tasa_metabolica_basal,
    calorias_necesarias, peso_corporal, peso_ideal,
    percentil_de_peso, calorias_diarias
  } = req.body

  const datos_generales = {
    estatura_maxima,
    percentil_talla,
    longitud_de_pie,
    longitud_sentado,
    envergadura,
    imc,
    imc_ideal,
    tasa_metabolica_basal,
    calorias_necesarias,
    peso_corporal,
    peso_ideal,
    percentil_de_peso,
    calorias_diarias
  }

  const { cabeza, cuello, brazo_relajado, brazo_contraido, antebrazo, muneca, torax, espalda, muslo_superior, muslo_medio, pierna, tobillo } = req.body

  const perimetros_corporales = { cabeza, cuello, brazo_relajado, brazo_contraido, antebrazo, muneca, torax, espalda, muslo_superior, muslo_medio, pierna, tobillo }

  const { cintura, cadera, relacion_cintura_cadera, masa_grasa_corporal, masa_grasa_ideal, masa_magra_corporal, masa_magra_ideal } = req.body

  const indice_cintura_cadera = { cintura, cadera, relacion_cintura_cadera }

  const indice_masa_corporal = { masa_grasa_corporal, masa_grasa_ideal, masa_magra_corporal, masa_magra_ideal }

  const { frente, perfil, posterior } = req.body

  const perfiles = { frente, perfil, espalda: posterior }

  const id_ficha = await service.nextId('ficha_antropometrica')
  console.log(id_ficha, 'nextId')
  // console.log(id_ficha, 'nextId')
  if ((isValidEntrie(datos_generales, dg) && isValidEntrie(perimetros_corporales, pc) && isValidEntrie(indice_cintura_cadera, icc) && isValidEntrie(indice_masa_corporal, imc) && isValidEntrie(perfiles, pf)) && cedula !== '') {
    try {
      datos_generales.id_ficha = id_ficha
      await service.createDatosGenerales(datos_generales)

      perimetros_corporales.id_ficha = id_ficha
      await service.createPerimetros(perimetros_corporales)

      indice_cintura_cadera.id_ficha = id_ficha
      await service.createICC(indice_cintura_cadera)

      indice_masa_corporal.id_ficha = id_ficha
      await service.createIMC(indice_masa_corporal)

      perfiles.id_ficha = id_ficha
      await service.createPerfiles(perfiles)

      const ficha_antropometrica = {
        id_atleta: cedula[0]
      }

      const id_auditoria = await postAuditoria({ entity: 'ficha_antropometrica', user: req.user, body: ficha_antropometrica, id: id_ficha })

      ficha_antropometrica.id_auditoria = id_auditoria
      const newFichaAntropometrica = await service.createFichaAntropometrica(ficha_antropometrica)
      res.status(201).json({ newFichaAntropometrica, message: 'Ficha antropometrica creada exitosamente' })
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: error.message })
    }
  } else {
    return res.status(400).json({ message: 'Por favor, llene todos los campos correctamente' })
  }
}

export const deleteFichaAntropometrica = async (req, res) => {
  const { id } = req.params
  try {
    const response = await service.deleteFichaAntropometrica(id)
    res.status(200).json({ message: 'Ficha antropometrica eliminada exitosamente', response })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getAllDataOfFichaById = async (req, res) => {
  const { id } = req.params
  try {
    const datosGenerales = await service.getDatosGeneralesByIdFicha(id)
    const perimetros = await service.getPerimetrosByIdFicha(id)
    const icc = await service.getICCByIdFicha(id)
    const imc = await service.getIMCByIdFicha(id)
    const datosFicha = await service.getGeneralDataOfFichaById(id)
    const perfiles = await service.getPerfilesByIdFicha(id)
    datosFicha.map((data) => {
      data.fecha = new Date(data.fecha).toLocaleDateString()
      return null
    })
    console.log(datosFicha, 'datosFicha')
    res.status(200).json({ datosFicha: datosFicha[0], datosGenerales: datosGenerales[0], perimetros: perimetros[0], icc: icc[0], imc: imc[0], perfiles: perfiles[0] })
  } catch (error) {
    console.log(error)
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
