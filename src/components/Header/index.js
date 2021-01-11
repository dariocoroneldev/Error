import React from 'react';
import { Link } from 'react-router-dom';
import Notifications from '~/components/Notifications/';

import logo from '~/assets/img/login.svg';
import { Container, Content, Profile } from './styles';

function header() {
  return (
    <>
      <Container>
        <Content>
          <nav>
            <img src={logo} alt="encotraap" />
            <Link to="/admin">Administrar Negocio</Link>
          </nav>
          <aside>
            <Notifications />
            <Profile>
              <div>
                <strong>Dario Coronel</strong>
                <Link to="perfil">Mi perfil</Link>
              </div>
              <img
                src="https://api.hello-avatar.com/adorables/120/myseed"
                alt=""
              />
            </Profile>
          </aside>
        </Content>
      </Container>
    </>
  );
}

export default header;
