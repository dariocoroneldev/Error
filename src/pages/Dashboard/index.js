import React from 'react';
import api from '~/services/api';
import { Container } from './styles';

function Dashboard() {
  api.get('appointments');
  api.get('notifications');
  return <h2>queonda</h2>;
}

export default Dashboard;
