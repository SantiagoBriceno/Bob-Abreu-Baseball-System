export const isValidUser = (user) => {
  const { username, name, password } = user
  if (!username || username === '' || !name || name === '' || !password || password === '') {
    return false
  }
  return true
}

export const existUsername = (usernames, username) => {
  return usernames.includes(username)
}
