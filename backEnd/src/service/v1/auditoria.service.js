import { pool } from '../../db.js'

const createAuditoria = async (newAuditoria) => {
  const data = await pool.query('INSERT INTO auditoria SET ?', newAuditoria)
  return data[0].insertId
}

export default {
  createAuditoria
}
