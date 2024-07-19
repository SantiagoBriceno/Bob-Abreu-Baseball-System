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
import RunningStatsView from './view/Estadisticas/RunningStats.view.jsx'
import HittingStatsView from './view/Estadisticas/HittingStats.view.jsx'
import FichasView from './view/Fichas/Fichas.view.jsx'
import FichaView from './view/Fichas/Ficha.view.jsx'
import HittingView from './view/Estadisticas/Hitting.view.jsx'
import RunningView from './view/Estadisticas/Running.view.jsx'
import FieldingView from './view/Estadisticas/Fielding.view.jsx'
import ThrowingView from './view/Estadisticas/Throwing.view.jsx'
import MakeUpView from './view/Estadisticas/MakeUp.view.jsx'
import MyFormStepper from './components/MyFormFicha.jsx'
import MainView from './view/Main.view.jsx'

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
              path: '',
              element: <MainView />
            },
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
                  path: 'atleta/:cedula',
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
            },
            {
              path: 'running',
              element: <RunningStatsView />
            },
            {
              path: 'hitting',
              element: <HittingStatsView />
            },
            {
              path: 'fichas',
              children: [
                {
                  path: '',
                  element: <FichasView />
                },
                {
                  path: 'ficha/:id_ficha',
                  element: <FichaView />
                },
                {
                  path: 'add',
                  element: <MyFormStepper />
                }

              ]

            },
            {
              path: 'estadisticas',
              children: [
                {
                  path: 'hitting',
                  element: <HittingView />
                },
                {
                  path: 'running',
                  element: <RunningView />
                },
                {
                  path: 'throwing',
                  element: <ThrowingView />
                },
                {
                  path: 'makeup',
                  element: <MakeUpView />
                },
                {
                  path: 'fielding',
                  element: <FieldingView />
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
  return (
    <SesionContextProvider>
      <RouterProvider router={router} />
    </SesionContextProvider>
  )
}

export default App
