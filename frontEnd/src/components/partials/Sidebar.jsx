import React from 'react'
import '../partials/css/sidebar.css'

const Sidebar = ({ links }) => {
  return (
    <div className='sidebar'>
      <ul>
        {links.map((link) => (
          <li key={link.title}>
            <a href={link.href}>{link.title}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
