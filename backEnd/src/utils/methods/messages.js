const msgPatch = ({ entity, reqBody }) => {
  return `Se hizo una edicion en la tabla ${entity} con los siguientes datos: ${formatReqBody(reqBody)}}`
}

const msgPost = ({ entity, reqBody }) => {
  return `Se hizo la creacion de un registro en la tabla ${entity} con los siguientes datos: ${formatReqBody(reqBody)}}`
}

const msgDelete = ({ entity, reqBody }) => {
  return `Se elimino un registro en la tabla ${entity} con los siguientes datos: ${formatReqBody(reqBody)}}`
}

const formatReqBody = (reqBody) => {
  const result = Object.keys(reqBody).map((key) => {
    console.log(reqBody[key])
    return `El campo ${key}, con el valor: ${reqBody[key]} \n`
  })
  return result
}

export default {
  msgPatch,
  msgPost,
  msgDelete
}
