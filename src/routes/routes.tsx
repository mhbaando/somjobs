import { lazy } from 'react'
import { PrivateRoute, PublicRoute } from './interface'

// public pages
const Home = lazy(async () => await import('@pages/Home'))
const Login = lazy(async () => await import('@pages/auth/Login'))
const Register = lazy(async () => await import('@pages/auth/Register'))
const Jobs = lazy(async () => await import('@pages/jobs'))
const Job = lazy(async () => await import('@pages/jobs/Job'))

// private pages for emoployees
const EmployeeDashboard = lazy(async () => await import('@pages/Dashboards/Employee/Dashboard'))
const EmployeeHome = lazy(async () => await import('@pages/Dashboards/Employee'))
const EmployeeProfile = lazy(async () => await import('@pages/Dashboards/Employee/Profile'))
const EmployeeResume = lazy(async () => await import('@pages/Dashboards/Employee/CvManager'))
const EmployeeAppliedJobs = lazy(async () => await import('@pages/Dashboards/Employee/AppliedJobs'))

// shared page btw employee & Company
const ChangePassword = lazy(async () => await import('@pages/Dashboards/ChangePassword'))
const DeleteUser = lazy(async () => await import('@pages/Dashboards/Delete'))

// private page for company
const CompanyDahsboard = lazy(async () => await import('@pages/Dashboards/Compnay/Dahsboard'))
const CompanyHome = lazy(async () => await import('@pages/Dashboards/Compnay'))

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
      },
      {
        path: 'jobs',
        Child: EmployeeAppliedJobs
      },
      {
        path: 'change-password',
        Child: ChangePassword
      },
      {
        path: 'delete',
        Child: DeleteUser
      }
    ],
    permission: 'employee'
  },
  {
    path: '/company',
    Element: CompanyDahsboard,
    permission: 'company',
    nested: [
      {
        path: '',
        Child: CompanyHome
      },
      {
        path: 'profile',
        Child: CompanyHome
      },
      {
        path: 'resume',
        Child: CompanyHome
      },
      {
        path: 'jobs',
        Child: CompanyHome
      },
      {
        path: 'applicants',
        Child: CompanyHome
      },
      {
        path: 'change-password',
        Child: ChangePassword
      },
      {
        path: 'delete',
        Child: DeleteUser
      }
    ]
  }
]

export { publicRoutes, privateRoutes }
