import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';
import locklogin from '~/assets/img/login.svg';

import { signUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('El nombre es obligatorio'),
  email: Yup.string()
    .email('porfavor ingrese un nombre valido')
    .required('El correo es obligatorio'),
  password: Yup.string()
    .min(6, 'la contraseña debe tener minimo 6 caracteres')
    .required('La contraseña es obligatoria'),
  whatsapp: Yup.number().required('el numero de telefono es obligatorio'),
  repeatPassword: Yup.string().required('repita la contraseña porfavor'),
});

function SignIn() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password, whatsapp, repeatPassword }) {
    dispatch(signUpRequest(name, email, password, whatsapp, repeatPassword));
  }

  return (
    <>
      <img src={locklogin} alt="loginlock" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Ingrese su nombre" />
        <Input name="email" type="email" placeholder="Ingrese su correo" />
        <Input
          name="password"
          type="password"
          placeholder="Ingrese su contraseña"
        />
        <Input name="whatsapp" placeholder="Ingrese su wp" />
        <Input
          name="repeatPassword"
          type="password"
          placeholder="Ingrese su contraseña de nuevo"
        />

        <button type="submit">Registarse</button>
      </Form>
      <Link to="/sesion">Ya estoy registrado</Link>
    </>
  );
}

export default SignIn;
