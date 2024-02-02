import msg from '../utils/methods/messages.js'
import service from '../service/v1/auditoria.service.js'
export const postAuditoria = async ({ entity, user, body }) => {
  const { cedula } = user
  const newAuditoria = {
    id_autor: cedula,
    descripcion: msg.msgPost({ entity, reqBody: body }),
    fecha: new Date()
  }

  return await service.createAuditoria(newAuditoria)
}

export const patchAuditoria = async ({ entity, user, body }) => {
  const { cedula } = user
  const newAuditoria = {
    id_autor: cedula,
    descripcion: msg.msgPatch({ entity, reqBody: body }),
    fecha: new Date()
  }
  return await service.createAuditoria(newAuditoria)
}
