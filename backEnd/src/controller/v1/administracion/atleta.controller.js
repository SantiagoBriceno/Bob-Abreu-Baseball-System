/* eslint-disable camelcase */
import service from '../../../service/v1/administracion/atleta.service.js'
import { postAuditoria, patchAuditoria, deleteAuditoria } from '../../../middleware/auditoria.js'
import { isValidAtleta, existAtleta } from '../../../utils/formats/atleta.js'
import { calcularClase } from './utils/atleta.js'
import antropometriaService from '../../../service/v1/administracion/antropometria.service.js'
import estadisticasService from '../../../service/v1/deportivo/estadisticas.service.js'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'

const CURRENT_DIR = dirname(fileURLToPath(import.meta.url))

export const getAtletas = async (req, res) => {
  try {
    const data = await service.getAtletas()
    data.map((atleta) => {
      const fecha = new Date(atleta.fecha_nacimiento)
      atleta.fecha_nacimiento = `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}`
      return null
    })
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json(error)
  }
}

export const getAtletaById = async (req, res) => {
  try {
    const { id } = req.params
    if (!existAtleta(await service.getCedulas(), id)) {
      return res.status(400).json({ message: 'Atleta no existe' })
    }
    const datosGeneral = await service.getAtletaById(id)

    datosGeneral[0].fecha_nacimiento = new Date(datosGeneral[0].fecha_nacimiento).toLocaleDateString('es-ES', { year: 'numeric', month: '2-digit', day: '2-digit' })
    const antropometria = await antropometriaService.getFichaAntropometricaByIdAtleta(id)
    // HACER ALGUNAS COSAS MAS

    const estadisticas = {
      hitting: await estadisticasService.getHittingStatsByIdPlayer(id),
      running: await estadisticasService.getRunningStatsByIdPlayer(id),
      throwing: await estadisticasService.getThrowingStatsByIdPlayer(id),
      fielding: await estadisticasService.getFieldingStatsByIdPlayer(id)
    }

    if (datosGeneral.posicion === 'Pitcher') {
      estadisticas.pitching = await estadisticasService.getPitchingStatByIdPlayer(id)
    }

    const data = {
      datosGeneral,
      antropometria,
      estadisticas
    }

    req.data = data

    res.status(200).json(data)
  } catch (error) {
    console.log('error', error)
    res.status(500).json(error)
  }
}

export const getAtletaImg = async (req, res, next) => {
  const { id } = req.params
  try {
    const data = await service.getAtletaImg(id)
    console.log('data', data)
    const imgPath = join(CURRENT_DIR, '../../../storage/atletas', data[0].foto)
    console.log('imgPath', imgPath)
    fs.access(imgPath, fs.constants.F_OK, (err) => {
      if (err) {
        req.foto = null
        res.status(500).json({ message: 'No se encontro la imagen' })
      } else {
        req.foto = imgPath
        next()
      }
    })
  } catch (error) {
    console.log('error', error)
    res.status(500).json(error)
  }
}

export const getAtletaByPosition = async (req, res) => {
  try {
    const { posicion } = req.params
    const data = await service.getAtletaByPosition(posicion)
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json(error)
  }
}

export const getAtletasClasifiedByPosition = async (req, res) => {
  try {
    const catchers = await service.getAtletaByPosition('Catcher')
    const pitchers = await service.getAtletaByPosition('Pitcher')
    const infielders = await service.getAtletaByPosition('Infielder')
    const outfielders = await service.getAtletaByPosition('Outfielder')

    const data = {
      catchers,
      pitchers,
      infielders,
      outfielders
    }
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json(error)
  }
}

export const getAtletasByPosition = async (req, res) => {
  const { position } = req.params
  try {
    const data = await service.getAtletaByPosition(position)
    data.map((atleta) => {
      const fecha = new Date(atleta.fecha_nacimiento)
      atleta.fecha_nacimiento = `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}`
      return null
    })
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json(error)
  }
}

export const createAtleta = async (req, res) => {
  console.log('req.body', req.body)
  console.log('req.file', req.file)
  try {
    const { cedula, nombre, tlf, lugar_nacimiento, fecha_nacimiento, posicion, estado, foto, hitting } = req.body
    const atleta = { cedula, nombre, tlf, lugar_nacimiento, fecha_nacimiento, posicion, estado, foto, hitting }
    if (!isValidAtleta(atleta)) {
      return res.status(400).json({ message: 'Por favor, llene todos los campos' })
    }
    const cedulas = await service.getCedulas()
    if (existAtleta(cedulas, cedula)) {
      return res.status(406).json({ message: 'Atleta ya existe' })
    }
    atleta.clase = calcularClase(fecha_nacimiento)
    const id_auditoria = await postAuditoria({ entity: 'atleta', user: req.user, body: atleta })
    atleta.id_auditoria = id_auditoria
    const data = await service.createAtleta(atleta)
    res.status(201).json(data)
  } catch (error) {
    console.log('error', error)
    res.status(500).json(error)
  }
}

export const updateAtleta = async (req, res) => {
  const { id } = req.params
  const atleta = req.body
  try {
    if (!existAtleta(await service.getCedulas(), id)) {
      return res.status(400).json({ message: 'Atleta no existe' })
    } else {
      const id_auditoria = await patchAuditoria({ entity: 'atleta', user: req.user, body: atleta, id })
      atleta.id_auditoria = id_auditoria
      const data = await service.updateAtleta(id, atleta)
      res.status(200).json(data)
    }
  } catch (error) {
    res.status(500).json(error)
  }
}

export const deleteAtleta = async (req, res) => {
  const { id } = req.params
  try {
    const cedulas = await service.getCedulas()
    if (!existAtleta(cedulas, id)) {
      return res.status(400).json({ message: 'Atleta no existe' })
    }
    const data = await service.deleteAtleta(id)
    await deleteAuditoria({ entity: 'atleta', user: req.user, body: data, id })
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json(error)
  }
}
