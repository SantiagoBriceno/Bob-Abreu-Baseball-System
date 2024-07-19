import React from 'react'
import './cardbox.css'

const CardBox = ({ children, label, description }) => {
  return (
    <div className='cardbox-container'>
      <div className='login-form'>
        <div className='cardbox-header'>
          <label className='cardbox-title'>{label}</label>
          <p className='cardbox-description'>{description}</p>
        </div>
        <div className='input_container'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default CardBox
