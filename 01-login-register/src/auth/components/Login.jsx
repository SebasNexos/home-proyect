import React from "react";
import { useNavigate } from "react-router-dom";
import logoNexos from "../../public/img/LogoNexos5.png";
import { useForm } from "../../hooks/useForm";
import { formValidations } from "../../helpers/validacionesLogin";

const loginFormFields = {
  loginEmail: "",
  loginPassword: "",
};

export const Login = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/register");
  };

  // Usamos el hook useForm
  const {
    loginEmail,
    loginPassword,
    loginEmailValid,
    loginPasswordValid,
    loginPasswordUppercase,
    loginPasswordSymbol,
    onInputChange,
    isFormValid,
  } = useForm(loginFormFields, formValidations);

  // Función de envío del formulario
  const onSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) {
      console.log("Formulario inválido");
      return;
    }
    console.log("Datos enviados:", { loginEmail, loginPassword });
  };

  return (
    <>
      <div className="bg-white px-8 py-12 rounded-3xl border-2 border-gray-100 shadow-lg">
        <img className="mx-auto w-30 h-30 object-contain" src={logoNexos} alt="logo" />
        <h1 className="text-4xl text-orange-500 font-semibold text-center">Bienvenido a Nexos</h1>
        <p className="font-medium text-md text-orange-400 mt-4 text-center">
          Esto es la torre de control de Nexos
        </p>

        <div className="mt-6">
          <form className="flex flex-col gap-3" onSubmit={onSubmit}>
            <label className="text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="loginEmail"
              value={loginEmail}
              className="w-full border-2 border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Ingresa tu email"
              onChange={onInputChange}
            />
            {loginEmailValid && <p className="text-red-500 text-sm">{loginEmailValid}</p>}

            <label className="text-gray-700 font-medium">Contraseña</label>
            <input
              type="password"
              name="loginPassword"
              value={loginPassword}
              className="w-full border-2 border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Ingresa tu contraseña"
              onChange={onInputChange}
            />
            {loginPasswordValid && <p className="text-red-500 text-sm">{loginPasswordValid}</p>}
            {loginPasswordUppercase && <p className="text-red-500 text-sm">{loginPasswordUppercase}</p>}
            {loginPasswordSymbol && <p className="text-red-500 text-sm">{loginPasswordSymbol}</p>}

            <button
              type="submit"
              className="mt-6 py-2 rounded-xl bg-blue-500 text-white text-md font-bold disabled:opacity-50"
              onClick={() => {
                console.log('Hola mundo')
              }}
            >
              Ingresar
            </button>
          </form>

          <div className="mt-6 flex justify-center items-center">
            <p className="font-medium text-sm">¿Registrarse?</p>
            <button className="text-blue-600 text-sm font-medium ml-2 hover:underline" onClick={handleRegister}>
              Registrarse
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
