import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { render } from 'react-dom'
import App from './App'
import './styles/index.scss'
import 'react-datepicker/dist/react-datepicker.css'

render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
