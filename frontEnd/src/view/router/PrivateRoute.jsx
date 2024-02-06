import { Navigate, Outlet } from 'react-router-dom'
import { useSesionContext } from '../../context/SesionContext'

export default function PublicRoute () {
  const { isAuthenticated } = useSesionContext()
  if (isAuthenticated) {
    return <Navigate to='/login' />
  }
  return <Outlet />
}
