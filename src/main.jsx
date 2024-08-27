import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { NextUIProvider } from '@nextui-org/react'
import { Home } from './pages/home'
import { Docs } from './pages/docs'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  }, {
    path: '/docs',
    element: <Docs />,
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </StrictMode>,
)
