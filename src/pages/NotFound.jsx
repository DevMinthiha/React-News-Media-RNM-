import React from 'react'
import Logo from '../components/Logo'

const NotFound = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-5 h-screen'>
      <Logo />
      <h1 className='text-5xl font-bold text-red-400'>404 Page Not Found</h1>
    </div>
  )
}

export default NotFound