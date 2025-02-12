import React from 'react'
import logoNexos from '../../public/img/LogoNexos5.png'

const registerFormFields = {
  registerName: '',
  registerEmail: '',
  registerPassword: ''
}

export const Register = () => {
  return (
    <>
        <div className='bg-white px-8 py-12 rounded-3xl border-2 border-gray-100 shadow-lg'>
            <img className='mx-auto w-30 h-30 object-contain' src={logoNexos} alt='logo' />
            <h1 className='text-4xl text-orange-500 font-semibold text-center'>Bienvenido a Nexos</h1>
            <p className='font-medium text-md text-orange-400 mt-4 text-center'>Esto es el registro de la torre de control</p>
            
            <div className='mt-6'>
              <form className='flex flex-col gap-3'>

                <label className='text-gray-700 font-medium'>Nombre</label>
                <input 
                  type='text' 
                  className='w-full border-2 border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-orange-500'
                  placeholder='Ingresa tu nombre' 
                />

                <label className='text-gray-700 font-medium'>Email</label>
                <input 
                  type='email' 
                  className='w-full border-2 border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-orange-500'
                  placeholder='Ingresa tu email' 
                />
                
                <label className='text-gray-700 font-medium'>Contraseña</label>
                <input 
                  type='password' 
                  className='w-full border-2 border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-orange-500'
                  placeholder='Ingresa tu contraseña' 
                />
              </form>
    
              <div className='mt-6 flex flex-col gap-y-3'>
                <button 
                  className='active:scale-[0.98] active:duration-75 hover:scale-[1.01] transition-all py-2 rounded-xl bg-blue-500 text-white text-md font-bold'
                  onClick={() => console.log('Ingresar')} 
                >Registrarse</button>
              </div>
    
            </div>
        </div>
                
    </>
  )
}


