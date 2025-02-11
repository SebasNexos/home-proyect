
import React from 'react'
import { Login } from '../components/Login'

export const LoginPage = () => {
  return (
    <div>
      <div className='flex w-full py-10 bg-blue-50'>
        <div className='w-full flex items-center justify-center'>
          <Login />
        </div>
      </div>
    </div>
  )
}

