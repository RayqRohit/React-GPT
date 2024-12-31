import React from 'react'

const Card = ({title, content, children}) => {
  return (
    <div className='card'>
        <p>{title}</p>
        <p>{content}</p>
        <p>{children}</p>
    </div>
  )
}

export default Card