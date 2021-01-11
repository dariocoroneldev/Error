import { createGlobalStyle } from 'styled-components';
import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');

*{
  margin: 0;
  padding:0;
  outline:0;
  box-sizing:border-box;
  font-family: lato;
  -webkit-font-smoothing: antialiased;

  &:focus{
    outline:0;
  }
}

html, body, #root{
  height:100vh;
}

body, button, input{
  font: 14px 'lato'
}

a{
  text-decoration:none;

  &:hover{
    text-decoration:none;
  }
}

ul{
  list-style:none;
}


button{
  cursor: pointer;
}
`;
