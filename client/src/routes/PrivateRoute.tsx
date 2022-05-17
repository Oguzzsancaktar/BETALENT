import { RouteProps } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import { useEffect } from 'react'

export const PrivateRoute = ({ children }: RouteProps) => {
  const {
    loggedUser: { accessToken, user }
  } = useAuth()

  useEffect(() => {
    // if (!accessToken || !user) window.location.href = '/login'
    window.location.href = '/register'
  }, [accessToken, user])

  return <>{children}</>
}
