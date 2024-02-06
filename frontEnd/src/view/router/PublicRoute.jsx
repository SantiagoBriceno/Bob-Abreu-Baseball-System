import { Navigate, Outlet } from 'react-router-dom'
import { useSesionContext } from '../../context/SesionContext'
const PublicRoute = () => {
  const { isAuthenticated } = useSesionContext()
  if (isAuthenticated) {
    return <Navigate to='/private' />
  }
  return (
    <Outlet />
  )
}

export default PublicRoute
