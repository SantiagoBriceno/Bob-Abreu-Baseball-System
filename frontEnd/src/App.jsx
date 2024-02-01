import './App.css'
import React from 'react'
import Sidebar from './components/partials/Sidebar'

const links = [
  {
    title: 'Home',
    href: '#home'
  },
  {
    title: 'About',
    href: '#about'
  },
  {
    title: 'Contact',
    href: '#contact'
  }
]

function App () {
  return (
    <>
      <Sidebar links={links} />
    </>
  )
}

export default App
