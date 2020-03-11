import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  /* background: url(${props => props.background});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-attachment: fixed; */

  p {
    font-size: 40px;
    color: #7159c1;
    font-weight: bold;
    margin-bottom: 60px;
    text-transform: uppercase;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    input {
      width: 30%;
      padding: 15px 20px;
      color: #999;
      letter-spacing: 0.8px;
      background: #f0f0f3;
      box-shadow: 10px 10px 30px rgba(174, 174, 192, 0.4),
        -10px -10px 30px #ffffff;
      border-radius: 10px;

      & + input {
        margin-top: 15px;
      }

      &::placeholder {
        color: #999;
        font-weight: bold;
      }
    }

    button {
      margin-top: 35px;
      width: 10%;
      padding: 15px 20px;
      font-weight: bold;
      color: #7159c1;
      background: #f0f0f3;
      box-shadow: 7px 7px 15px rgba(55, 84, 170, 0.15),
        -7px -7px 20px rgba(255, 255, 255, 1),
        inset 0px 0px 4px rgba(255, 255, 255, 0.2),
        inset 7px 7px 15px rgba(55, 84, 170, 0),
        inset -7px -7px 20px rgba(255, 255, 255, 0),
        0px 0px 4px rgba(255, 255, 255, 0) !important;
      border-radius: 10px;
      transition: box-shadow 0.25s ease !important;

      &:active {
        box-shadow: 7px 7px 15px rgba(55, 84, 170, 0.15),
          -7px -7px 20px rgba(255, 255, 255, 1),
          inset 0px 0px 4px rgba(255, 255, 255, 0),
          inset 7px 7px 15px rgba(55, 84, 170, 0.15),
          inset -7px -7px 20px rgba(255, 255, 255, 1),
          0px 0px 4px rgba(255, 255, 255, 0.2) !important;
      }
    }
  }

  a {
    margin-top: 25px;
    color: #999;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;

    &:hover {
      color: ${darken(0.05, '#999')};
    }
  }
`;
