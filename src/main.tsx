import { render } from 'react-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import 'react-datepicker/dist/react-datepicker.css'

import App from './App'

import './styles/index.scss'
import { AuthProvider } from '@context/auth'

render(
  <>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
      <Toaster />
    </BrowserRouter>
  </>,
  document.getElementById('root')
)
