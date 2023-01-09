import { useContext } from 'react'
import AuthContext, { UserContextType } from '@context/auth'

const useAuth = (): UserContextType => {
  return useContext(AuthContext)
}

export default useAuth
