import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '~/services/history';
import api from '~/services/api';

import { signInSuccess, signFailure } from './actions';

const test = api.get('appointments');
console.log(test);

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'session', {
      email,
      password,
    });
    const { token, user } = response.data;

    if (!user.provider) {
      toast.error('usario no es porveedor');
    }

    yield put(signInSuccess(token, user));

    history.push('/admin');
  } catch (err) {
    toast.error('error de autenticacion, verifique sus datos');
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password, whatsapp, repeatPassword } = payload;
    yield call(api.post, 'users', {
      name,
      email,
      password,
      whatsapp,
      repeatPassword,
      provider: true,
    });

    history.push('/sesion');
  } catch (err) {
    toast.error('error al registarse');
    yield put(signFailure());
  }
}

export async function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('@auth/persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
