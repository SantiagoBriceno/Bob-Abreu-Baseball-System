export const deleteNullValues = (obj) => {
  const newObj = Object.keys(obj).map(key => {
    if (!obj[key] === null) {
      return { [key]: obj[key] }
    }
  })
  return newObj
}
