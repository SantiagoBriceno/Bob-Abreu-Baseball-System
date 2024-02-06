import { createContext, useContext, useCallback, useMemo, useState } from 'react'

// object auth = {
// token: 'askjdhlk1jlkjaslkdjalksd12312kljaslkd',
// username: 'johndoe',
// rol: 'admin',
// }

export const SesionContext = createContext()

export const SesionContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(window.localStorage.getItem('auth') ?? false)

  const login = useCallback((auth) => {
    window.localStorage.setItem('auth', JSON.stringify(auth))
    setIsAuthenticated(true)
  }, [])

  const logout = useCallback(() => {
    window.localStorage.removeItem('auth')
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
