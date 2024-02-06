import { useState } from 'react'
import { registerUser } from '../service/authentication.js'
import { useSesionContext } from '../context/SesionContext.jsx'

export const useRegisterUser = () => {
  const [user, setUser] = useState({ cedula: '', username: '', name: '', password: '', rol: '' })
  const { login } = useSesionContext()

  const handleChange = (e) => {
    const { id, value } = e.target
    setUser({ ...user, [id]: value })
  }

  const handleSubmit = (e) => {
    registerUser({ user })
  }

  return {
    user,
    handleChange,
    handleSubmit
  }
}
