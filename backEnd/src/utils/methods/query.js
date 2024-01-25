const getAll = ({ entity, fields = '*' }) => {
  return `SELECT ${fields} FROM ${entity}`
}

const getById = ({ entity, id, fields = '*' }) => {
  return `SELECT ${fields} FROM ${entity} WHERE id = ${id}`
}

const create = ({ entity, data }) => {
  return `INSERT INTO ${entity} SET ${data}`
}

const update = ({ entity, id, data }) => {
  return `UPDATE ${entity} SET ${data} WHERE id = ${id}`
}

const remove = ({ entity, id }) => {
  return `DELETE FROM ${entity} WHERE id = ${id}`
}

export default {
  getAll,
  getById,
  create,
  update,
  remove
}
