/* eslint-disable camelcase */
import service from '../../../service/v1/administracion/registroEspecial.service.js'
import { patchAuditoria, postAuditoria, deleteAuditoria } from '../../../middleware/auditoria.js'

export const getRegistroEspecial = async (req, res) => {
  try {
    const data = await service.getRegistroEspecial()
    res.status(200).send(data)
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
}

export const getRegistroEspecialById = async (req, res) => {
  try {
    const data = await service.getRegistroEspecialById(req.params.id)
    res.status(200).send(data)
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
}

export const createRegistroEspecial = async (req, res) => {
  try {
    const id_auditoria = await postAuditoria({ entity: 'registro_especial', user: req.user, body: req.body })
    req.body.id_auditoria = id_auditoria
    const data = await service.createRegistroEspecial(req.body)
    res.status(201).send(data)
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
}

export const updateRegistroEspecial = async (req, res) => {
  try {
    const id_auditoria = await patchAuditoria({ entity: 'registro_especial', user: req.user, body: req.body, id: req.params.id })
    req.body.id_auditoria = id_auditoria
    const data = await service.updateRegistroEspecial(req.params.id, req.body)
    res.status(200).send(data)
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
}

export const deleteRegistroEspecial = async (req, res) => {
  try {
    const id_auditoria = await deleteAuditoria({ entity: 'registro_especial', user: req.user, id: req.params.id })
    req.body.id_auditoria = id_auditoria
    await service.deleteRegistroEspecial(req.params.id)
    res.status(204).send()
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
}
