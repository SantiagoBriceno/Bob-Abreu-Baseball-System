import { createContext, useContext, useCallback, useMemo, useState } from 'react'

export const SesionContext = createContext()

export const SesionContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(window.localStorage.getItem('token') ?? false)

  const login = useCallback((token) => {
    window.localStorage.setItem('token', token)
    setIsAuthenticated(true)
  }, [])

  const logout = useCallback(() => {
    window.localStorage.removeItem('token')
    setIsAuthenticated(false)
  }, [])

  const value = useMemo(() => ({
    login, logout, isAuthenticated
  }), [isAuthenticated, login, logout])

  return (
    <SesionContext.Provider value={value}>
      {children}
    </SesionContext.Provider>
  )
}

export const useSesionContext = () => {
  return useContext(SesionContext)
}
