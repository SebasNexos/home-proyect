export const formValidations = {
    loginEmail: [
      (value) => /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value), 
      "Por favor, ingrese un correo válido"
    ],
    loginPassword: [
      (value) => value.length >= 4 && /[A-Z]/.test(value) && /[^a-zA-Z0-9]/.test(value), 
      "La contraseña debe tener al menos 4 caracteres, una mayúscula y un símbolo"
    ],
  };
  
  