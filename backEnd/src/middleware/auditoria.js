import msg from '../utils/methods/messages.js'
import service from '../service/v1/auditoria.service.js'
export const postAuditoria = async ({ entity, user, body, id = null }) => {
  console.log(user)
  const { cedula } = user

  console.log('body', body)
  const newAuditoria = {
    id_autor: cedula,
    descripcion: msg.msgPost({ entity, reqBody: body }),
    fecha: new Date(),
    entity,
    id_entity: !id ? body.cedula : id
  }

  return await service.createAuditoria(newAuditoria)
}

export const patchAuditoria = async ({ entity, user, body, id }) => {
  console.log(user)
  const { cedula } = user
  const newAuditoria = {
    id_autor: cedula,
    descripcion: msg.msgPatch({ entity, reqBody: body }),
    fecha: new Date(),
    entity,
    id_entity: id
  }
  return await service.createAuditoria(newAuditoria)
}

export const deleteAuditoria = async ({ entity, user, body, id }) => {
  const { cedula } = user
  const newAuditoria = {
    id_autor: cedula,
    descripcion: msg.msgDelete({ entity, reqBody: body }),
    fecha: new Date(),
    entity,
    id_entity: id
  }
  return await service.createAuditoria(newAuditoria)
}

export const createAuditoria = (req, res) => {
  const { entity, data, user, id } = req
  try {
    postAuditoria({ entity, user, body: data, id })
    res.status(201).json({ message: 'Finish' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const updateAuditoria = (req, res) => {
  const { entity, data, user, id } = req
  try {
    patchAuditoria({ entity, user, body: data, id })
    res.status(201).json({ message: 'Finish' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteAuditoriaV2 = (req, res) => {
  const { entity, data, user, id } = req
  try {
    deleteAuditoria({ entity, user, body: data, id })
    res.status(201).json({ message: 'Finish' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
