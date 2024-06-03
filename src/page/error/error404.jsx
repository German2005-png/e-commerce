import React from 'react'

export function Error404({minusPrCart}) {
  return (
    <div className='cont-error404'>
        <h1 className='error404-title'>Error 404</h1>
        <p className='error404-description'>This page doesn't exist {window.location.pathname}</p>
        <button className='error404-btn'>Home</button>
    </div>
  )
}
