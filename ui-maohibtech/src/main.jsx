import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './components/Routes/Router/Router.jsx'
import Root from './components/Root/Root.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Root></Root>
    </RouterProvider>
  </React.StrictMode>,
)
