import React from 'react'
import './Message.css'

export const Message = ({children}) => {
  return (
    <div className='Message'>
      <h3>
        {children}
      </h3>
    </div>
  )
}
