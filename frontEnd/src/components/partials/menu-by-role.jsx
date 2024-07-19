import React from 'react'
import { UserOutlined, TeamOutlined, VideoCameraOutlined } from '@ant-design/icons'
import { NavLink } from 'react-router-dom'

export const menu = () => {
  const user = JSON.parse(window.localStorage.getItem('auth')).user

  const rol = user ? user.rol : ''
  switch (rol) {
    case 'administrativo' || 'gerente' :
      return [
        {
          key: '1',
          icon: <TeamOutlined />,
          label: <NavLink to='/private/representantes'>Representantes</NavLink>
        },
        {
          key: '2',
          icon: <VideoCameraOutlined />,
          label: <NavLink to='/private/atletas'>Atletas</NavLink>,
          children: [
            {
              key: '2.1',
              label: <NavLink to='/private/atletas/infielders'>Infielders</NavLink>
            },
            {
              key: '2.2',
              label: <NavLink to='/private/atletas/outfielders'>Outfielders</NavLink>
            },
            {
              key: '2.3',
              label: <NavLink to='/private/atletas/catchers'>Catchers</NavLink>
            },
            {
              key: '2.4',
              label: <NavLink to='/private/atletas/pitchers'>Pitchers</NavLink>
            }
          ]
        },
        {
          key: '9',
          icon: <VideoCameraOutlined />,
          label: <NavLink to='/private/estadisticas/hitting'>Estadísticas</NavLink>,
          children: [
            {
              key: '9.1',
              label: <NavLink to='/private/estadisticas/hitting'>Hitting</NavLink>
            },
            {
              key: '9.2',
              label: <NavLink to='/private/estadisticas/throwing'>Throwing</NavLink>
            },
            {
              key: '9.3',
              label: <NavLink to='/private/estadisticas/running'>Running</NavLink>
            },
            {
              key: '9.4',
              label: <NavLink to='/private/estadisticas/fielding'>Fielding</NavLink>
            }
          // {
          //   key: '9.5',
          //   label: <NavLink to='/private/estadisticas/makeup'>Make up</NavLink>
          // }
          ]
        },
        {
          key: '3',
          icon: <UserOutlined />,
          label: <NavLink to='/private/registros-especiales'>Registros Especiales</NavLink>
        },
        {
          key: '4',
          icon: <UserOutlined />,
          label: <NavLink to='/private/fichas'>Fichas Antropométricas</NavLink>
        },
        {
          key: '5',
          icon: <UserOutlined />,
          label: <NavLink to='/private/usuarios'>Usuarios</NavLink>
        },
        {
          key: '6',
          icon: <UserOutlined />,
          label: <NavLink to='/private/lesiones'>Lesiones</NavLink>
        }
        // {
        //   key: '7',
        //   icon: <UserOutlined />,
        //   label: <NavLink to='/private/running'>Running</NavLink>
        // },
        // {
        //   key: '8',
        //   icon: <UserOutlined />,
        //   label: <NavLink to='/private/hitting'>Hitting</NavLink>
        // }

      ]
    case 'deportivo':
      return [
        {
          key: '2',
          icon: <VideoCameraOutlined />,
          label: <NavLink to='/private/atletas'>Atletas</NavLink>,
          children: [
            {
              key: '2.1',
              label: <NavLink to='/private/atletas/infielders'>Infielders</NavLink>
            },
            {
              key: '2.2',
              label: <NavLink to='/private/atletas/outfielders'>Outfielders</NavLink>
            },
            {
              key: '2.3',
              label: <NavLink to='/private/atletas/catchers'>Catchers</NavLink>
            },
            {
              key: '2.4',
              label: <NavLink to='/private/atletas/pitchers'>Pitchers</NavLink>
            }
          ]
        },
        {
          key: '9',
          icon: <VideoCameraOutlined />,
          label: <NavLink to='/private/estadisticas/hitting'>Estadísticas</NavLink>,
          children: [
            {
              key: '9.1',
              label: <NavLink to='/private/estadisticas/hitting'>Hitting</NavLink>
            },
            {
              key: '9.2',
              label: <NavLink to='/private/estadisticas/throwing'>Throwing</NavLink>
            },
            {
              key: '9.3',
              label: <NavLink to='/private/estadisticas/running'>Running</NavLink>
            },
            {
              key: '9.4',
              label: <NavLink to='/private/estadisticas/fielding'>Fielding</NavLink>
            }
          // {
          //   key: '9.5',
          //   label: <NavLink to='/private/estadisticas/makeup'>Make up</NavLink>
          // }
          ]
        },
        {
          key: '3',
          icon: <UserOutlined />,
          label: <NavLink to='/private/registros-especiales'>Registros Especiales</NavLink>
        },
        {
          key: '4',
          icon: <UserOutlined />,
          label: <NavLink to='/private/fichas'>Fichas Antropométricas</NavLink>
        },
        {
          key: '6',
          icon: <UserOutlined />,
          label: <NavLink to='/private/lesiones'>Lesiones</NavLink>
        }
        // {
        //   key: '7',
        //   icon: <UserOutlined />,
        //   label: <NavLink to='/private/running'>Running</NavLink>
        // },
        // {
        //   key: '8',
        //   icon: <UserOutlined />,
        //   label: <NavLink to='/private/hitting'>Hitting</NavLink>
        // }

      ]
    case 'fisioterapeuta':
      return [
        {
          key: '1',
          icon: <TeamOutlined />,
          label: <NavLink to='/private/representantes'>Representantes</NavLink>
        },
        {
          key: '2',
          icon: <VideoCameraOutlined />,
          label: <NavLink to='/private/atletas'>Atletas</NavLink>,
          children: [
            {
              key: '2.1',
              label: <NavLink to='/private/atletas/infielders'>Infielders</NavLink>
            },
            {
              key: '2.2',
              label: <NavLink to='/private/atletas/outfielders'>Outfielders</NavLink>
            },
            {
              key: '2.3',
              label: <NavLink to='/private/atletas/catchers'>Catchers</NavLink>
            },
            {
              key: '2.4',
              label: <NavLink to='/private/atletas/pitchers'>Pitchers</NavLink>
            }
          ]
        },
        {
          key: '9',
          icon: <VideoCameraOutlined />,
          label: <NavLink to='/private/estadisticas/hitting'>Estadísticas</NavLink>,
          children: [
            {
              key: '9.1',
              label: <NavLink to='/private/estadisticas/hitting'>Hitting</NavLink>
            },
            {
              key: '9.2',
              label: <NavLink to='/private/estadisticas/throwing'>Throwing</NavLink>
            },
            {
              key: '9.3',
              label: <NavLink to='/private/estadisticas/running'>Running</NavLink>
            },
            {
              key: '9.4',
              label: <NavLink to='/private/estadisticas/fielding'>Fielding</NavLink>
            }
          // {
          //   key: '9.5',
          //   label: <NavLink to='/private/estadisticas/makeup'>Make up</NavLink>
          // }
          ]
        },
        {
          key: '3',
          icon: <UserOutlined />,
          label: <NavLink to='/private/registros-especiales'>Registros Especiales</NavLink>
        },
        {
          key: '4',
          icon: <UserOutlined />,
          label: <NavLink to='/private/fichas'>Fichas Antropométricas</NavLink>
        },
        {
          key: '6',
          icon: <UserOutlined />,
          label: <NavLink to='/private/lesiones'>Lesiones</NavLink>
        }
        // {
        //   key: '7',
        //   icon: <UserOutlined />,
        //   label: <NavLink to='/private/running'>Running</NavLink>
        // },
        // {
        //   key: '8',
        //   icon: <UserOutlined />,
        //   label: <NavLink to='/private/hitting'>Hitting</NavLink>
        // }

      ]

    default:
      return [
        {
          key: '1',
          icon: <TeamOutlined />,
          label: <NavLink to='/private/representantes'>Representantes</NavLink>
        },
        {
          key: '2',
          icon: <VideoCameraOutlined />,
          label: <NavLink to='/private/atletas'>Atletas</NavLink>,
          children: [
            {
              key: '2.1',
              label: <NavLink to='/private/atletas/infielders'>Infielders</NavLink>
            },
            {
              key: '2.2',
              label: <NavLink to='/private/atletas/outfielders'>Outfielders</NavLink>
            },
            {
              key: '2.3',
              label: <NavLink to='/private/atletas/catchers'>Catchers</NavLink>
            },
            {
              key: '2.4',
              label: <NavLink to='/private/atletas/pitchers'>Pitchers</NavLink>
            }
          ]
        },
        {
          key: '9',
          icon: <VideoCameraOutlined />,
          label: <NavLink to='/private/estadisticas/hitting'>Estadísticas</NavLink>,
          children: [
            {
              key: '9.1',
              label: <NavLink to='/private/estadisticas/hitting'>Hitting</NavLink>
            },
            {
              key: '9.2',
              label: <NavLink to='/private/estadisticas/throwing'>Throwing</NavLink>
            },
            {
              key: '9.3',
              label: <NavLink to='/private/estadisticas/running'>Running</NavLink>
            },
            {
              key: '9.4',
              label: <NavLink to='/private/estadisticas/fielding'>Fielding</NavLink>
            }
          // {
          //   key: '9.5',
          //   label: <NavLink to='/private/estadisticas/makeup'>Make up</NavLink>
          // }
          ]
        },
        {
          key: '3',
          icon: <UserOutlined />,
          label: <NavLink to='/private/registros-especiales'>Registros Especiales</NavLink>
        },
        {
          key: '4',
          icon: <UserOutlined />,
          label: <NavLink to='/private/fichas'>Fichas Antropométricas</NavLink>
        }]
  }
}
