export const isValidEntrie = (entrie, structure) => {
  console.log(entrie, 'entrie')
  console.log(structure, 'structure')
  if (Object.keys(entrie).length !== Object.keys(structure).length) {
    return false
  }
  // entrie posee nulo o vacio en algun campo, retorna false, sino true
  return Object.keys(structure).every(key => {
    return Object.keys(entrie).includes(key) && entrie[key] !== '' && entrie[key]
  })
}
