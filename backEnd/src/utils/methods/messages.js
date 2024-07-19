const msgPatch = ({ entity, reqBody }) => {
  return `Se hizo una edicion en la tabla ${entity} con los siguientes datos: ${formatReqBody(reqBody)}`
}

const msgPost = ({ entity, reqBody }) => {
  return `Se hizo la creacion de un registro en la tabla ${entity} con los siguientes datos: ${formatReqBody(reqBody)}`
}

const msgDelete = ({ entity, reqBody }) => {
  return `Se elimino un registro en la tabla ${entity} con los siguientes datos:\n${formatReqBody(reqBody)}`
}

const formatReqBody = (reqBody) => {
  const result = Object.keys(reqBody).map((key) => {
    return ` ${key}: ${reqBody[key]}`
  })
  return result
}

export default {
  msgPatch,
  msgPost,
  msgDelete
}
