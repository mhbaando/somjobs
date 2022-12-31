import React, { lazy } from 'react'

// import all pages here
const Home = lazy(async () => await import('@pages/Home'))
const Login = lazy(async () => await import('@pages/auth/Login'))
const Register = lazy(async () => await import('@pages/auth/Register'))
const Jobs = lazy(async () => await import('@pages/jobs'))
const Job = lazy(async () => await import('../pages/jobs/Job'))

// here are the publicly avalible routes
interface PublicRoute {
  path: string
  Element: React.LazyExoticComponent<(props: any) => JSX.Element>
  nestedpath: string | undefined
  NestedElement: React.LazyExoticComponent<(props: any) => JSX.Element> | undefined
}
const publicRoutes: PublicRoute[] = [
  {
    path: '/',
    Element: Home,
    nestedpath: undefined,
    NestedElement: undefined
  },
  {
    path: '/login',
    Element: Login,
    nestedpath: undefined,
    NestedElement: undefined
  },
  {
    path: '/register',
    Element: Register,
    nestedpath: undefined,
    NestedElement: undefined
  },
  {
    path: '/jobs',
    Element: Jobs,
    nestedpath: ':id',
    NestedElement: Job
  }
]

const privateRoutes = [{}]

export { publicRoutes, privateRoutes }
