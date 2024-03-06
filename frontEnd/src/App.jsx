import React from 'react'
import HeaderSidebar from './components/partials/header-side'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import AtletasView from './view/Atletas/Atletas.view.jsx'
import RepresentanteView from './view/Representantes.view'
import AtletasView from './view/Atletas/Atletas.view'
import InfieldersView from './view/Atletas/Infielders.view'
import OutfieldersView from './view/Atletas/Outfielders.view'
import CatchersView from './view/Atletas/Catchers.view'
import PitchersView from './view/Atletas/Pitchers.view'
import LoginView from './view/auth/Login.view'
import { SesionContextProvider } from './context/SesionContext'
import PublicRoute from './view/router/PublicRoute'
import PrivateRoute from './view/router/PrivateRoute.jsx'
import RegisterView from './view/auth/Register.view.jsx'
import AtletaView from './view/Atletas/Atleta.view.jsx'
import RegistrosEspecialesView from './view/RegistrosEspeciales.view.jsx'
import UsuariosView from './view/Usuarios.view.jsx'
import LesionesView from './view/Lesiones.view.jsx'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <PublicRoute />,
      children: [
        {
          path: 'login',
          element: <LoginView />
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
              path: 'register',
              element: <RegisterView />
            },
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
                  element: <InfieldersView />
                },
                {
                  path: 'outfielders',
                  element: <OutfieldersView />
                },
                {
                  path: 'catchers',
                  element: <CatchersView />
                },
                {
                  path: 'pitchers',
                  element: <PitchersView />
                },
                {
                  path: 'atleta/:id',
                  element: <AtletaView />
                }
              ]
            },
            {
              path: 'registros-especiales',
              element: <RegistrosEspecialesView />
            },
            {
              path: 'usuarios',
              element: <UsuariosView />
            },
            {
              path: 'lesiones',
              element: <LesionesView />
            }
          ]
        }
      ]

    }
  ]
)

function App () {
  return (
    <SesionContextProvider>
      <RouterProvider router={router} />
    </SesionContextProvider>
  )
}

export default App
