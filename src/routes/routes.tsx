import React, { lazy } from 'react'

// import all pages here
const Home = lazy(async () => await import('@pages/Home'))
const Login = lazy(async () => await import('@pages/auth/Login'))
const Register = lazy(async () => await import('@pages/auth/Register'))

// here are the publicly avalible routes
interface PublicRoute {
  path: string
  Element: React.LazyExoticComponent<(props: unknown) => JSX.Element>
}
const publicRoutes: PublicRoute[] = [
  {
    path: '/',
    Element: Home
  },
  {
    path: '/login',
    Element: Login
  },
  {
    path: '/register',
    Element: Register
  }
]

const privateRoutes = [{}]

export { publicRoutes, privateRoutes }
