/* eslint-disable camelcase */
import service from '../../../service/v1/administracion/representante.service.js'
import { existRepresentante, isValidRepresentante } from '../../../utils/formats/representante.js'
import { postAuditoria, patchAuditoria, deleteAuditoria } from '../../../middleware/auditoria.js'

export const getRepresentantes = async (req, res) => {
  try {
    const data = await service.getRepresentantes()
    return res.send({
      status: 200,
      message: 'Representantes encontrados',
      data
    })
  } catch (error) {
    res.status(500).json(error)
  }
}

export const createRepresentante = async (req, res) => {
  try {
    const { cedula, nombre, tlf, rif, estatura, sexo, correo, direccion, cedula_atleta } = req.body
    const representante = { cedula, nombre, tlf, rif, estatura, sexo, correo, direccion, cedula_atleta }
    if (!isValidRepresentante(representante)) {
      return res.status(400).json({ message: 'Representante no válido' })
    }
    const cedulas = await service.getCedulas()
    if (existRepresentante(cedulas, cedula)) {
      return res.status(400).json({ message: 'Representante ya existe' })
    }
    const id_auditoria = await postAuditoria({ entity: 'representante', user: req.user, body: representante })
    representante.id_auditoria = id_auditoria
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
  const { id } = req.params
  const representante = req.body
  try {
    const cedulas = await service.getCedulas()
    if (existRepresentante(cedulas, id)) {
      const id_auditoria = await patchAuditoria({ entity: 'representante', user: req.user, body: representante, id })
      representante.id_auditoria = id_auditoria
      const data = await service.updateRepresentante(id, representante)
      res.status(200).json(data)
    } else {
      res.status(400).json({ message: 'Representante no existe' })
    }
  } catch (error) {
    res.status(500).json(error)
  }
}

export const deleteRepresentante = async (req, res) => {
  try {
    const cedulas = await service.getCedulas()
    if (!existRepresentante(cedulas, req.params.id)) {
      return res.status(400).json({ message: 'Representante no existe' })
    } else {
      const { id } = req.params
      const data = await service.deleteRepresentante(id)
      console.log(data)
      const id_auditoria = await deleteAuditoria({ entity: 'representante', user: req.user, body: data, id })
      data.id_auditoria = id_auditoria
      res.status(200).json(data)
    }
  } catch (error) {
    res.status(500).json(error)
  }
}
