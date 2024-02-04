import { hitting } from '../entities/main'

export const isValidHittingStat = (hittingStat) => {
  return Object.keys(hitting).every(key => {
    return Object.keys(hittingStat).includes(key)
  })
}

export const existHittingStat = (ids, id) => {
  return ids.includes(id)
}
