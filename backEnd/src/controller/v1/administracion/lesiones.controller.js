import service from '../../../service/v1/administracion/lesiones.service.js'
import { patchAuditoria, postAuditoria, deleteAuditoria } from '../../../middleware/auditoria.js'

export const getLesiones = async (req, res) => {
  try {
    const data = await service.getAllLesiones()
    res.status(200).send(data)
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
}

export const getLesionByIdPlayer = async (req, res) => {
  try {
    const data = await service.getLesionByIdPlayer(req.params.id)
    res.status(200).send(data)
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
}

export const createLesion = async (req, res) => {
  try {
    const id_auditoria = await postAuditoria({ entity: 'lesiones', user: req.user, body: req.body })
    req.body.id_auditoria = id_auditoria
    const data = await service.createLesion(req.body)
    res.status(201).send(data)
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
}

export const updateLesion = async (req, res) => {
  try {
    const id_auditoria = await patchAuditoria({ entity: 'lesiones', user: req.user, body: req.body, id: req.params.id })
    req.body.id_auditoria = id_auditoria
    const data = await service.updateLesion(req.params.id, req.body)
    res.status(200).send(data)
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
}

export const deleteLesion = async (req, res) => {
  try {
    const data = await service.deleteLesion(req.params.id)
    const id_auditoria = await deleteAuditoria({ entity: 'lesiones', user: req.user, body: data, id: req.params.id })
    req.body.id_auditoria = id_auditoria
    res.status(204).send()
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
}
