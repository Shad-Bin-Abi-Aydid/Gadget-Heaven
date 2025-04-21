import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './router/Router.jsx'
import Favicon from 'react-favicon'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Favicon url="/favicon-16x16.png"></Favicon>
    <RouterProvider router={routes}></RouterProvider>
    
  </StrictMode>,
)
