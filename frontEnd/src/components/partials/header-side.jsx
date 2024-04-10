import React, { useState } from 'react'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined
} from '@ant-design/icons'
import {
  Flex, Spacer,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Text,
  Container,
  Avatar,
  Stack,
  HStack,
  VStack,
  Image,
  Center
} from '@chakra-ui/react'
import { menu } from './menu-by-role.jsx'
import { Layout, Menu, Button, theme } from 'antd'
import './index.css'
import { useSesionContext } from '../../context/SesionContext'
import logo from '../../../public/assets/BobLogo.png'
import { NavLink, Outlet } from 'react-router-dom'

import { ChevronDownIcon } from '@chakra-ui/icons'
const { Header, Sider, Content } = Layout

const AvatarPanel = () => {
  const { logout } = useSesionContext()

  const user = JSON.parse(window.localStorage.getItem('auth')).user

  const rol = user ? user.rol : ''
  const username = user ? user.username : ''
  return (
    <Flex
      align='center'
      justify='center'
      maxH='80px'
    >
      <Container maxH='80px' zIndex='1000' bg='rgba(255,255,255,0.09)' color='black' alignItems='center' _expanded={{ color: 'black' }}>
        <Accordion alignContent='center' allowMultiple>
          <AccordionItem
            _expanded={{ color: 'black' }}
          >
            <AccordionButton
              display='flex'
              alignItems='center'
              _expanded={{ color: 'black' }}
              _hover={{ background: 'white' }}
            >
              <HStack gap={2}>
                <Avatar color='#fff' name={username} />
                <Stack>
                  <VStack>
                    <Text height='10px' fontSize='s' fontWeight='extrabold' color='#000'>{username}</Text>
                    <Text fontSize='xs' color='#000'>{rol}</Text>

                  </VStack>
                </Stack>
                <ChevronDownIcon fontSize='24px' />
              </HStack>

            </AccordionButton>
            <AccordionPanel
              mt={0} boxShadow='md'
              background='#f5f5f5'
            >
              <Button
                type='text'
                icon={<UserOutlined />}
                style={{
                  fontSize: '16px'
                }}
                onClick={() => logout()}
              > Cerrar Sesión
              </Button>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
    </Flex>
  )
}

const HeaderSidebar = () => {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { borderRadiusLG }
  } = theme.useToken()
  return (
    <Layout style={{
      minHeight: '100vh'
    }}
    >
      <Sider width='fit-content' style={{ background: '#010440' }} trigger={null} collapsible collapsed={collapsed}>
        <Center
          alignContent='center' justifyContent='center' textAlign='center' style={{
            margin: '10px 0px'
          }}
        >
          <NavLink to='/private'>
            <Image fit='scale-down' boxSize='100px' src={logo} alt='logo' />
          </NavLink>
        </Center>
        <Menu
          theme='dark'
          mode='inline'
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['2']}
          style={{ background: '#000035' }}
          items={menu()}
          // items={[
          //   {
          //     key: '1',
          //     icon: <TeamOutlined />,
          //     label: <NavLink to='/private/representantes'>Representantes</NavLink>
          //   },
          //   {
          //     key: '2',
          //     icon: <VideoCameraOutlined />,
          //     label: <NavLink to='/private/atletas'>Atletas</NavLink>,
          //     children: [
          //       {
          //         key: '2.1',
          //         label: <NavLink to='/private/atletas/infielders'>Infielders</NavLink>
          //       },
          //       {
          //         key: '2.2',
          //         label: <NavLink to='/private/atletas/outfielders'>Outfielders</NavLink>
          //       },
          //       {
          //         key: '2.3',
          //         label: <NavLink to='/private/atletas/catchers'>Catchers</NavLink>
          //       },
          //       {
          //         key: '2.4',
          //         label: <NavLink to='/private/atletas/pitchers'>Pitchers</NavLink>
          //       }
          //     ]
          //   },
          //   {
          //     key: '9',
          //     icon: <VideoCameraOutlined />,
          //     label: <NavLink to='/private/estadisticas/hitting'>Estadísticas</NavLink>,
          //     children: [
          //       {
          //         key: '9.1',
          //         label: <NavLink to='/private/estadisticas/hitting'>Hitting</NavLink>
          //       },
          //       {
          //         key: '9.2',
          //         label: <NavLink to='/private/estadisticas/throwing'>Throwing</NavLink>
          //       },
          //       {
          //         key: '9.3',
          //         label: <NavLink to='/private/estadisticas/running'>Running</NavLink>
          //       },
          //       {
          //         key: '9.4',
          //         label: <NavLink to='/private/estadisticas/fielding'>Fielding</NavLink>
          //       }
          //       // {
          //       //   key: '9.5',
          //       //   label: <NavLink to='/private/estadisticas/makeup'>Make up</NavLink>
          //       // }
          //     ]
          //   },
          //   {
          //     key: '3',
          //     icon: <UserOutlined />,
          //     label: <NavLink to='/private/registros-especiales'>Registros Especiales</NavLink>
          //   },
          //   {
          //     key: '4',
          //     icon: <UserOutlined />,
          //     label: <NavLink to='/private/fichas'>Fichas Antropométricas</NavLink>
          //   },
          //   {
          //     key: '5',
          //     icon: <UserOutlined />,
          //     label: <NavLink to='/private/usuarios'>Usuarios</NavLink>
          //   },
          //   {
          //     key: '6',
          //     icon: <UserOutlined />,
          //     label: <NavLink to='/private/lesiones'>Lesiones</NavLink>
          //   }
          //   // {
          //   //   key: '7',
          //   //   icon: <UserOutlined />,
          //   //   label: <NavLink to='/private/running'>Running</NavLink>
          //   // },
          //   // {
          //   //   key: '8',
          //   //   icon: <UserOutlined />,
          //   //   label: <NavLink to='/private/hitting'>Hitting</NavLink>
          //   // }
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            height: 80,
            background: 'rgba(255,255,255,0.09)'
          }}

        >
          <Flex>
            <Button
              type='text'
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64
              }}
            />
            <Spacer />
            <AvatarPanel />
          </Flex>
        </Header>
        <Content
          style={{
            margin: '30px 30px',
            padding: 24,
            minHeight: 280,
            borderRadius: borderRadiusLG,
            background: '#dcdcdc'
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}
export default HeaderSidebar
