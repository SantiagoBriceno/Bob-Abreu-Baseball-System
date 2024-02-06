import { useState } from 'react'
import { loginUser } from '../service/authentication.js'
import { useSesionContext } from '../context/SesionContext.jsx'

export const useLoginUser = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useSesionContext()

  const handleChange = (e) => {
    e.target.id === 'username' ? setUsername(e.target.value) : setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    loginUser({ username, password }).then(
      (Response) => {
        if (Response.error) {
          window.alert('invalid username or password')
        } else {
          login(Response)
        }
      }
    )
  }

  return {
    username,
    password,
    handleChange,
    handleSubmit
  }
}
