import React from 'react'
import HeaderSidebar from './components/partials/header-side'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import AtletasView from './view/Atletas/Atletas.view.jsx'
import RepresentanteView from './view/Representantes.view'
import AtletasView from './view/Atletas/Atletas.view'
import LoginView from './view/auth/Login.view'
import { SesionContextProvider } from './context/SesionContext'
import PublicRoute from './view/router/PublicRoute'
import PrivateRoute from './view/router/PrivateRoute.jsx'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <PublicRoute />,
      children: [
        {
          path: 'login',
          element: <LoginView />
        },
        {
          path: 'register',
          element: <div>Register</div>
        }
      ]
    },
    {
      path: '/private',
      element: <PrivateRoute />,
      children: [
        {
          path: '',
          element: <HeaderSidebar />,
          children: [
            {
              path: 'representantes',
              element: <RepresentanteView />
            },
            {
              path: 'atletas',
              children: [
                {
                  path: '',
                  element: <AtletasView />
                },
                {
                  path: 'infielders',
                  element: <div>Infielders</div>
                },
                {
                  path: 'outfielders',
                  element: <div>Outfielders</div>
                },
                {
                  path: 'catchers',
                  element: <div>Catchers</div>
                },
                {
                  path: 'pitchers',
                  element: <div>Pitchers</div>
                }
              ]
            },
            {
              path: 'estadisticas',
              children: [
                {
                  path: '',
                  element: <div>Estadisticas</div>
                },
                {
                  path: 'running',
                  element: <div>Running</div>
                },
                {
                  path: 'hitting',
                  element: <div>Hitting</div>
                },
                {
                  path: 'pitching',
                  element: <div>Pitching</div>
                },
                {
                  path: 'catching',
                  element: <div>Catching</div>
                },
                {
                  path: 'fielding',
                  element: <div>Fielding</div>
                }
              ]
            }
          ]
        }
      ]

    }
  ]
)

function App () {
  window.localStorage.setItem('token', true)
  return (
    <SesionContextProvider>
      <RouterProvider router={router} />
    </SesionContextProvider>
  )
}

export default App
