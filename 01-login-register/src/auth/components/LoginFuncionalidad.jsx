import React, { useState } from 'react';
import logoNexos from '../../public/img/LogoNexos5.png';

export const LoginPage = () => {
  return (
    <div className='flex w-full h-screen items-center justify-center bg-gray-100'>
      <div className='bg-white p-6 rounded-lg shadow-lg w-full max-w-sm'>
        <Login />
      </div>
    </div>
  );
};

export const Login = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(null);

  const getPasswordError = (value) => {
    if (value.length < 4) return 'La contraseña debe tener al menos 4 caracteres';
    if ((value.match(/[A-Z]/g) || []).length < 1) return 'Debe contener al menos una letra mayúscula';
    if ((value.match(/[^a-z]/gi) || []).length < 1) return 'Debe contener al menos un símbolo';
    return null;
  };

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
    <div className='bg-white px-8 py-12 rounded-3xl border-2 border-gray-100 shadow-lg'>
      <img className='mx-auto w-24 h-24 object-contain' src={logoNexos} alt='logo' />
      <h1 className='text-4xl font-semibold text-center'>Bienvenido a Nexos</h1>
      <p className='font-medium text-md text-gray-500 mt-4 text-center'>Esto es la torre de control de Nexos</p>
      
      <form className='flex flex-col gap-4 mt-6' onSubmit={onSubmit}>
        <label className='text-gray-700 font-medium'>Email</label>
        <input 
          type='email' 
          className={`w-full border-2 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-violet-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
          placeholder='Ingresa tu email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}

        <label className='text-gray-700 font-medium'>Contraseña</label>
        <input 
          type='password' 
          className={`w-full border-2 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-violet-500 ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
          placeholder='Ingresa tu contraseña'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p className='text-red-500 text-sm'>{errors.password}</p>}

        <div className='flex justify-between text-sm mt-2'>
          <button className='text-violet-600 hover:underline'>¿Olvidaste tu contraseña?</button>
        </div>

        <button className='w-full bg-violet-500 text-white py-3 rounded-xl font-bold' type='submit'>Ingresar</button>
      </form>

      {submitted && (
        <div className='text-small text-gray-500 mt-4'>
          Datos enviados: <pre>{JSON.stringify(submitted, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};
