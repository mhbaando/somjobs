import React, { lazy } from 'react'

// import all pages here
const Home = lazy(async () => await import('../pages/Home'))

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
    Element: Home
  },
  {
    path: '/register',
    Element: Home
  }
]

const privateRoutes = [{}]

export { publicRoutes, privateRoutes }
