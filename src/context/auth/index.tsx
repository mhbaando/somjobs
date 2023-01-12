/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/member-delimiter-style */
/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState, createContext } from 'react'
import jwtDecode from 'jwt-decode'
import { toast } from 'react-hot-toast'

interface UserPayload {
  sub: string
  role: string
  email: string
  owner: string
}

export interface UserContextType {
  user: UserPayload | null
  login: (user: any) => void
  logout: () => void
}

const defaultValues: UserContextType = {
  user: null,
  login: () => {},
  logout: () => {}
}

const token: string | null = localStorage.getItem('jwt')
if (token != null) {
  const { exp, iat, ...data }: UserPayload & { exp: number; iat: number } = jwtDecode(token)
  if (exp * 1000 < Date.now()) {
    toast.error('Token Expired')
    localStorage.removeItem('jwt')
  } else {
    defaultValues.user = {
      sub: data.sub,
      role: data.role,
      email: data.email,
      owner: data.owner
    }
  }
}

interface IAuthProvider {
  children: React.ReactNode
}

const AuthContext = createContext(defaultValues)
const AuthProvider: React.FC<IAuthProvider> = ({ children }): JSX.Element => {
  const [user, setUser] = useState<UserPayload | null>(defaultValues.user)

  const login = (token: string): void => {
    const { exp, iat, ...data }: UserPayload & { exp: number; iat: number } = jwtDecode(token)
    setUser({
      sub: data.sub,
      role: data.role,
      email: data.email,
      owner: data.owner
    })
    localStorage.setItem('jwt', token)
  }

  const logout = (): void => {
    localStorage.clear()
    setUser(null)
  }
  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
}

export { AuthProvider }
export default AuthContext
