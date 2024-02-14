export const isValidEntitie = (entitie, body) => {
  return Object.keys(entitie).every(key => {
    return Object.keys(body).includes(key)
  })
}

export const existStat = (ids, id) => {
  return ids.includes(id)
}
