import msg from '../utils/methods/messages.js'
import service from '../service/v1/auditoria.service.js'
export const postAuditoria = async ({ entity, user, body }) => {
  const { cedula } = user
  const newAuditoria = {
    id_autor: cedula,
    descripcion: msg.msgPost({ entity, reqBody: body }),
    fecha: new Date(),
    entity,
    id_entity: body.cedula
  }

  return await service.createAuditoria(newAuditoria)
}

export const patchAuditoria = async ({ entity, user, body, id }) => {
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
