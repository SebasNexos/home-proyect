
import React, { useState } from 'react'
import logoNexos from '../../public/img/LogoNexos5.png'
import { useNavigate } from 'react-router-dom'

export const Login = () => {

  const navigate = useNavigate(); // enviar a registro 
  const handleRegister = () =>{ // enviar a registro 
    navigate('/register')
  }

  // estados iniciales de los inputs 
  const [password, setPassword] = useState("");  
  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(null);

  // validaciones de la contraseña 

  const getPasswordError = (value) => {
    if (value.length < 4) {
      return "Password must be 4 characters or more";
    }
    if ((value.match(/[A-Z]/g) || []).length < 1) {
      return "Password needs at least 1 uppercase letter";
    }
    if ((value.match(/[^a-z]/gi) || []).length < 1) {
      return "Password needs at least 1 symbol";
    }
    return null;
  };


  // enviar el input 
  const onSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    const passwordError = getPasswordError(password);
    if (passwordError) newErrors.password = passwordError;
    if (!email || !email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      newErrors.email = 'Por favor, ingrese un correo válido';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitted({ email, password });
  };



  return (
    <> 

      <div className='bg-white px-8 py-12 rounded-3xl border-2 border-gray-100 shadow-lg'>
        <img className='mx-auto w-30 h-30 object-contain' src={logoNexos} alt='logo' />
        <h1 className='text-4xl text-orange-500 font-semibold text-center'>Bienvenido a Nexos</h1>
        <p className='font-medium text-md text-orange-400 mt-4 text-center'>Esto es la torre de control de Nexos</p>
        
        <div className='mt-6'>
          <form 
            className='flex flex-col gap-3'
          >
            <label className='text-gray-700 font-medium'>Email</label>
            <input 
              type='email' 
              name='email'
              value={email}
              className='w-full border-2 border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-orange-500'
              placeholder='Ingresa tu email' 
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
            
            <label className='text-gray-700 font-medium'>Contraseña</label>
            <input 
              type='password' 
              name='password'
              value={password}
              className='w-full border-2 border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-orange-500'
              placeholder='Ingresa tu contraseña' 
              onChange={(e) => setPassword(e.target.value)}
            />

            {errors.password && <p className='text-red-500 text-sm'>{errors.password}</p>}

          </form>

          <div className='mt-6 flex justify-between items-center'>
            <button className='font-medium text-sm text-blue-600 hover:underline'>¿Olvidó la contraseña?</button>
          </div>

          <div className='mt-6 flex flex-col gap-y-3'>
            <button 
              className='active:scale-[0.98] active:duration-75 hover:scale-[1.01] transition-all py-2 rounded-xl bg-blue-500 text-white text-md font-bold'
              
              onClick={() => console.log('Ingresar')} 
            >Ingresar</button>
          </div>

          <div className='mt-6 flex justify-center items-center'>
            <p className='font-medium text-sm'>¿Registrarse?</p>
            <button 
              className='text-blue-600 text-sm font-medium ml-2 hover:underline'
              onClick={handleRegister}
            >
                Registrarse</button>
          </div>
        </div>
      </div>
        
    </>
  )
}


