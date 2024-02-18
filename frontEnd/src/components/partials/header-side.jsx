import React, { useState } from 'react'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
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
  console.log('user', user)

  const rol = user ? user.rol : ''
  const username = user ? user.username : ''
  console.log('user', username)
  console.log('rol', rol)

  return (
    <Flex
      align='center'
      justify='center'
    >
      <Container zIndex='1000' bg='#fff' color='black' rounded='15px'>
        <Accordion allowMultiple width='100%' maxW='lg' rounded='lg'>
          <AccordionItem>
            <AccordionButton
              display='flex'
              alignItems='center'
              justifyContent='space-between'
              p={1}
            >
              <HStack gap={2}>
                <Avatar bg='red.500' color='#fff' name={username} src='https://bit.ly/dan-abramov' />
                <Stack>
                  <VStack>
                    <Text height='10px' fontSize='xs' fontWeight='extrabold' color='#000'>{username} </Text>
                    <Text fontSize='xs' color='#000'>{rol}</Text>

                  </VStack>
                </Stack>
                <ChevronDownIcon fontSize='24px' />
              </HStack>

            </AccordionButton>
            <AccordionPanel pb={4}>
              <Button
                type='text'
                icon={<UserOutlined />}
                style={{
                  fontSize: '16px',
                  height: 64
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
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken()
  return (
    <Layout style={{
      minHeight: '100vh'
    }}
    >
      <Sider style={{ background: '#010440' }} trigger={null} collapsible collapsed={collapsed}>
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
              icon: <UploadOutlined />,
              label: <NavLink to='/private/estadisticas'>Estadisticas</NavLink>,
              children: [
                {
                  key: '3.1',
                  label: <NavLink to='/private/estadisticas/running'>Running</NavLink>
                },
                {
                  key: '3.2',
                  label: <NavLink to='/private/estadisticas/fielding'>Fielding</NavLink>
                },
                {
                  key: '3.3',
                  label: <NavLink to='/private/estadisticas/batting'>Batting</NavLink>
                },
                {
                  key: '3.4',
                  label: <NavLink to='/private/estadisticas/throwing'>throwing</NavLink>
                },
                {
                  key: '3.5',
                  label: <NavLink to='/private/estadisticas/pitchers'>Pitching</NavLink>
                }
              ]
            },
            {
              key: '4',
              icon: <UserOutlined />,
              label: 'nav 4'
            },
            {
              key: '5',
              icon: <UserOutlined />,
              label: 'nav 5'
            },
            {
              key: '6',
              icon: <UserOutlined />,
              label: 'nav 6'
            }

          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            height: 80,
            background: '#E1E4E7'
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
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            borderRadius: borderRadiusLG,
            background: '#fff'
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}
export default HeaderSidebar
