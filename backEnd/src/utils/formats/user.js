import { user as structure } from '../entities/main.js'
export const isValidUser = (user) => {
  return Object.keys(structure).every(key => {
    return Object.keys(user).includes(key)
  })
}

export const existUsername = (usernames, username) => {
  return usernames.includes(username)
}
