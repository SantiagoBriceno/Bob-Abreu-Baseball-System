import React, { useState } from 'react'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  TeamOutlined,
  VideoCameraOutlined
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
  VStack
} from '@chakra-ui/react'
import { Layout, Menu, Button, theme } from 'antd'
import './index.css'
import { useSesionContext } from '../../context/SesionContext'
import logo from './logo.svg'
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
      <Container maxH='80px' w='200px' zIndex='1000' bg='rgba(255,255,255,0.09)' color='black' alignItems='center' _expanded={{ bg: 'white', color: 'black', borderColor: 'transparent', border: 0 }}>
        <Accordion alignContent='center' allowMultiple width='100%' h='80px' style={{ border: 0, borderColor: 'transparent' }} mt={0} pt={0} _hover={{ bg: 'trasnparent' }}>
          <AccordionItem
            _expanded={{ background: 'white', color: 'black' }}
          >
            <AccordionButton
              display='flex'
              alignItems='center'
              _expanded={{ background: 'white', color: 'black' }}
              _hover={{ bg: 'trasnparent', border: 0, borderColor: 'transparent' }}
            >
              <HStack gap={2}>
                <Avatar color='#fff' name={username} />
                <Stack>
                  <VStack>
                    <Text height='10px' fontSize='s' fontWeight='extrabold' color='#000'>{username}</Text>
                    <Text fontSize='xs' color='#000'>{rol}</Text>

                  </VStack>
                </Stack>
                <Spacer />
                <ChevronDownIcon fontSize='24px' />
              </HStack>

            </AccordionButton>
            <AccordionPanel mt={0}>
              <Button
                type='text'
                icon={<UserOutlined />}
                style={{
                  fontSize: '16px',
                  height: 80
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
        <div className='demo-logo-vertical'><img src={logo} alt='logo' /></div>
        <Menu
          theme='dark'
          mode='inline'
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['2']}
          style={{ background: '#000035' }}
          items={[
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
              key: '3',
              icon: <UserOutlined />,
              label: <NavLink to='/private/registros-especiales'>Registros especiales</NavLink>
            },
            {
              key: '4',
              icon: <UserOutlined />,
              label: <NavLink to='/private/fichas'>Fichas antropométricas</NavLink>
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
            },
            {
              key: '7',
              icon: <UserOutlined />,
              label: <NavLink to='/private/running'>Running</NavLink>
            },
            {
              key: '8',
              icon: <UserOutlined />,
              label: <NavLink to='/private/hitting'>Hitting</NavLink>
            }

          ]}
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
