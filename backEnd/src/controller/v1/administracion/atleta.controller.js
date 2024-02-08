/* eslint-disable camelcase */
import service from '../../../service/v1/administracion/atleta.service.js'
import { postAuditoria, patchAuditoria, deleteAuditoria } from '../../../middleware/auditoria.js'
import { isValidAtleta, existAtleta } from '../../../utils/formats/atleta.js'

export const getAtletas = async (req, res) => {
  try {
    const data = await service.getAtletas()
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json(error)
  }
}

export const getAtletaById = async (req, res) => {
  try {
    const { id } = req.params
    const data = await service.getAtletaById(id)
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json(error)
  }
}

export const createAtleta = async (req, res) => {
  try {
    const { cedula, nombre, tlf, lugar_nacimiento, fecha_nacimiento, correo, posicion, estado, foto } = req.body
    const atleta = { cedula, nombre, tlf, lugar_nacimiento, fecha_nacimiento, correo, posicion, estado, foto }
    if (!isValidAtleta(atleta)) {
      return res.status(400).json({ message: 'Atleta no válido' })
    }
    const cedulas = await service.getCedulas()
    if (existAtleta(cedulas, cedula)) {
      return res.status(400).json({ message: 'Atleta ya existe' })
    }
    console.log('req.user', req.user)
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
