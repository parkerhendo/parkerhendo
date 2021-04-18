import React from 'react'

export default function Block({children, title}) {
  return (
    <div className='block'>
      <h3 className='title-lg block-title'>{title}</h3>
      {children}
    </div>
  )
}
