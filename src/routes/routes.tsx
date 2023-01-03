import { lazy } from 'react'
import { PrivateRoute, PublicRoute } from './interface'

// public pages
const Home = lazy(async () => await import('@pages/Home'))
const Login = lazy(async () => await import('@pages/auth/Login'))
const Register = lazy(async () => await import('@pages/auth/Register'))
const Jobs = lazy(async () => await import('@pages/jobs'))
const Job = lazy(async () => await import('@pages/jobs/Job'))

// private pages
const EmployeeDashboard = lazy(async () => await import('@pages/Dashboards/Employee/Dashboard'))
const EmployeeHome = lazy(async () => await import('@pages/Dashboards/Employee'))
const EmployeeProfile = lazy(async () => await import('@pages/Dashboards/Employee/Profile'))
const EmployeeResume = lazy(async () => await import('@pages/Dashboards/Employee/CvManager'))

const publicRoutes: PublicRoute[] = [
  {
    path: '/',
    Element: Home,
    nested: []
  },
  {
    path: '/login',
    Element: Login,
    nested: []
  },
  {
    path: '/register',
    Element: Register,
    nested: []
  },
  {
    path: '/jobs',
    Element: Jobs,
    nested: [
      {
        path: ':id',
        Child: Job
      }
    ]
  }
]

const privateRoutes: PrivateRoute[] = [
  {
    path: '/employee',
    Element: EmployeeDashboard,
    nested: [
      {
        path: '',
        Child: EmployeeHome
      },
      {
        path: 'profile',
        Child: EmployeeProfile
      },
      {
        path: 'resume',
        Child: EmployeeResume
      }
    ],
    permission: 'employee'
  }
]

export { publicRoutes, privateRoutes }
