import React from 'react'
import HeaderSidebar from './components/partials/header-side'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <HeaderSidebar />,
      children: [
        {
          path: 'representantes',
          element: <div>Representantes</div>
        },
        {
          path: 'atletas',
          children: [
            {
              path: '',
              element: <div>Atletas</div>
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
)

function App () {
  return (
    <RouterProvider router={router} />
  )
}

export default App
