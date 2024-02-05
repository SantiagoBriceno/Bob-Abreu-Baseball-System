import React, { useState } from 'react'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  TeamOutlined,
  VideoCameraOutlined
} from '@ant-design/icons'
import { Layout, Menu, Button, theme } from 'antd'
import './index.css'
import logo from './logo.svg'
import { NavLink, Outlet } from 'react-router-dom'
const { Header, Sider, Content } = Layout
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
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className='demo-logo-vertical'><img src={logo} alt='logo' /></div>
        <Menu
          theme='dark'
          mode='inline'
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['2']}
          items={[
            {
              key: '1',
              icon: <TeamOutlined />,
              label: <NavLink to='/representantes'>Representantes</NavLink>
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: <NavLink to='/atletas'>Atletas</NavLink>,
              children: [
                {
                  key: '2.1',
                  label: <NavLink to='/atletas/infielders'>Infielders</NavLink>
                },
                {
                  key: '2.2',
                  label: <NavLink to='/atletas/outfielders'>Outfielders</NavLink>
                },
                {
                  key: '2.3',
                  label: <NavLink to='/atletas/catchers'>Catchers</NavLink>
                },
                {
                  key: '2.4',
                  label: <NavLink to='/atletas/pitchers'>Pitchers</NavLink>
                }
              ]
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: <NavLink to='/estadisticas'>Estadisticas</NavLink>,
              children: [
                {
                  key: '3.1',
                  label: <NavLink to='/estadisticas/running'>Running</NavLink>
                },
                {
                  key: '3.2',
                  label: <NavLink to='/estadisticas/fielding'>Fielding</NavLink>
                },
                {
                  key: '3.3',
                  label: <NavLink to='/estadisticas/batting'>Batting</NavLink>
                },
                {
                  key: '3.4',
                  label: <NavLink to='/estadisticas/throwing'>throwing</NavLink>
                },
                {
                  key: '3.5',
                  label: <NavLink to='/estadisticas/pitchers'>Pitching</NavLink>
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
            background: colorBgContainer
          }}
        >
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
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            borderRadius: borderRadiusLG
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}
export default HeaderSidebar
