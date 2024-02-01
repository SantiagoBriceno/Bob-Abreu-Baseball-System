/* eslint-disable camelcase */
import service from '../../../service/v1/administracion/representante.service.js'
import { existRepresentante, isValidRepresentante } from '../../../utils/formats/representante.js'

export const getRepresentantes = async (req, res) => {
  try {
    const data = await service.getRepresentantes()
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json(error)
  }
}

export const createRepresentante = async (req, res) => {
  try {
    const { cedula, nombre, tlf, rif, estatura, email, direccion, cedula_atleta, id_auditoria } = req.body
    const representante = { cedula, nombre, tlf, rif, estatura, email, direccion, cedula_atleta, id_auditoria }
    if (!isValidRepresentante(representante)) {
      return res.status(400).json({ message: 'Representante no válido' })
    }
    const cedulas = await service.getCedulas()
    if (existRepresentante(cedulas, cedula)) {
      return res.status(400).json({ message: 'Representante ya existe' })
    }
    const data = await service.createRepresentante(representante)
    res.status(201).json(data)
  } catch (error) {
    res.status(500).json(error)
  }
}

export const getRepresentante = async (req, res) => {
  try {
    const { id } = req.params
    const data = await service.getRepresentante(id)
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json(error)
  }
}

export const updateRepresentante = async (req, res) => {
  try {
    const { id } = req.params
    const { cedula, nombre, tlf, rif, estatura, email, direccion, cedula_atleta, id_auditoria } = req.body
    const representante = { cedula, nombre, tlf, rif, estatura, email, direccion, cedula_atleta, id_auditoria }
    if (!isValidRepresentante(representante)) {
      return res.status(400).json({ message: 'Representante no válido' })
    }
    const cedulas = await service.getCedulas()
    if (existRepresentante(cedulas, cedula)) {
      return res.status(400).json({ message: 'Representante ya existe' })
    }
    const data = await service.updateRepresentante(id, representante)
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json(error)
  }
}

export const deleteRepresentante = async (req, res) => {
  try {
    const { id } = req.params
    const data = await service.deleteRepresentante(id)
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json(error)
  }
}
