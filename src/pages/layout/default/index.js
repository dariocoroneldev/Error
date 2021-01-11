import React from 'react';

import { Wrapper } from './styles';
import Header from '~/components/Header/';

function defaultLayout({ children }) {
  return (
    <Wrapper>
      <Header>{children}</Header>
    </Wrapper>
  );
}

export default defaultLayout;
