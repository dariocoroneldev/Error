import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ebebef;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  text-align: center;
  width: 100%;
  max-width: 370px;

  img {
    width: 100%;
    max-width: 150px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin: 20px 0px;

    input {
      background: rgba(0, 0, 0, 0);
      border: 1px solid #ccc;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #000;
      margin: 0 0 15px;
      &::placeholder {
        //por si quiero cambiar el color despues
      }
    }
    span {
      color: red;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background-color: #3b93ff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: 0.2s;

      &:hover {
        background: ${darken(0.05, '#3b93ff')};
      }
    }
  }
  a {
    color: #000;
  }
`;
