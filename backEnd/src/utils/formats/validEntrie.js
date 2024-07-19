export const isValidEntrie = (entrie, structure) => {
  const keys = Object.keys(entrie)

  for (let i = 0; i < keys.length; i++) {
    if (entrie[keys[i]] === null || entrie[keys[i]] === '') {
      return false
    }
  }
  return true
}
