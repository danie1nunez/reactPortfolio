import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import AboutMe from './components/Aboutme.jsx'
import Resume from './components/Resume.jsx'
import Portfolio from './components/Portfolio.jsx'
import Contact from './components/Contact.jsx'
import Error from './components/Error.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <AboutMe />,
      },
      {
        path: '/portfolio',
        element: <Portfolio />
      },
      {
        path: '/resume',
        element: <Resume />
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
