import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import locklogin from '~/assets/img/login.svg';
import { signInRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('porfavor ingrese un correo valido')
    .required('El correo es obligatorio'),
  password: Yup.string().required('La contraseña es obligatoria'),
});

function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={locklogin} alt="loginlock" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Ingrese su correo" />
        <Input
          name="password"
          type="password"
          placeholder="Ingrese su contraseña"
        />
        <button type="submit">{loading ? 'Cargando..' : 'Ingresar'}</button>
      </Form>
      <Link to="/registrarse">Crear una cuenta gratuita</Link>
    </>
  );
}

export default SignIn;
