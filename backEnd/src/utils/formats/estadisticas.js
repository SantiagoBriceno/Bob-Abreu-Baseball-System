export const isValidEntitie = (entitie, body) => {
  return Object.keys(entitie).every(key => {
    return Object.keys(body).includes(key) && body[key] !== '' && body[key]
  })
}

export const existStat = (ids, id) => {
  console.log(ids, id)
  return ids.includes(parseInt(id))
}
